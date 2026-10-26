import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';

const root = path.resolve('dist');
const origin = 'https://corepro-eg.com';
const failures = [];
const pages = new Map();
const clean = value => value.replace(/\s+/g, ' ').trim();
const attr = (node, name) => node.attrs?.find(item => item.name === name)?.value || '';
function elements(node) { return [node, ...(node.childNodes || []).flatMap(elements)]; }
function visibleText(node) {
  if (!node) return '';
  if (['script', 'style'].includes(node.tagName)) return '';
  return node.nodeName === '#text' ? node.value : (node.childNodes || []).map(visibleText).join(' ');
}
function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) { if (!['admin', '_astro'].includes(entry.name)) walk(file); continue; }
    if (!entry.name.endsWith('.html') || entry.name === '404.html') continue;
    const html = fs.readFileSync(file, 'utf8');
    const nodes = elements(parse(html));
    if (nodes.some(n => n.tagName === 'meta' && attr(n, 'http-equiv').toLowerCase() === 'refresh')) continue;
    const relative = path.relative(root, file).replaceAll('\\', '/');
    const route = relative === 'index.html' ? '/' : `/${relative.replace(/\/index\.html$/, '').replace(/\.html$/, '')}`;
    pages.set(route, { html, nodes, relative });
  }
}
walk(root);
const fail = (route, message) => failures.push(`${route}: ${message}`);
for (const [route, page] of pages) {
  const { nodes, html } = page;
  for (const staleImage of ['/images/home/hero.webp', 'sharikat-kas-kharsana', '/images/core/sanayeh-core-egypt.webp', '/images/saw/mokawel-kas-kharsana.webp', '/images/wire/wire-takteaa-kharsana.webp']) {
    if (html.includes(staleImage)) fail(route, `Image still contains obsolete phone: ${staleImage}`);
  }
  if (html.includes('01055550195')) fail(route, 'Obsolete phone remains in HTML');
  const titles = nodes.filter(n => n.tagName === 'title');
  const headings = nodes.filter(n => n.tagName === 'h1');
  const descriptions = nodes.filter(n => n.tagName === 'meta' && attr(n, 'name') === 'description');
  const canonicals = nodes.filter(n => n.tagName === 'link' && attr(n, 'rel') === 'canonical');
  if (titles.length !== 1 || !clean(visibleText(titles[0]))) fail(route, 'one non-empty title required');
  if (headings.length !== 1) fail(route, `expected one H1, found ${headings.length}`);
  if (descriptions.length !== 1 || !attr(descriptions[0], 'content')) fail(route, 'one non-empty meta description required');
  if (canonicals.length !== 1 || new URL(attr(canonicals[0], 'href') || '/', origin).href !== new URL(`${origin}${route}`).href) fail(route, 'canonical differs from published route');
  const ids = nodes.map(n => attr(n, 'id')).filter(Boolean);
  if (new Set(ids).size !== ids.length) fail(route, 'duplicate element IDs');
  page.ids = new Set(ids);
  const jsonScripts = nodes.filter(n => n.tagName === 'script' && attr(n, 'type') === 'application/ld+json');
  const schemas = [];
  for (const script of jsonScripts) {
    try { const parsed = JSON.parse((script.childNodes || []).map(n => n.value || '').join('')); schemas.push(...(Array.isArray(parsed) ? parsed : [parsed])); }
    catch { fail(route, 'invalid JSON-LD'); }
  }
  const faqs = schemas.flatMap(s => s['@graph'] || [s]).filter(s => s['@type'] === 'FAQPage');
  if (faqs.length > 1) fail(route, 'duplicate FAQPage schema');
  const text = clean(visibleText(nodes.find(n => n.tagName === 'body')));
  for (const schema of faqs) for (const question of schema.mainEntity || []) {
    if (!text.includes(clean(question.name))) fail(route, `FAQ question not visible: ${question.name}`);
    if (!text.includes(clean(question.acceptedAnswer?.text || ''))) fail(route, `FAQ answer not visible: ${question.name}`);
  }
  for (const image of nodes.filter(n => n.tagName === 'img')) {
    const src = attr(image, 'src');
    if (src.startsWith('/') && !fs.existsSync(path.join(root, decodeURIComponent(src.split('?')[0])))) fail(route, `missing local image ${src}`);
    if (!image.attrs?.some(a => a.name === 'alt')) fail(route, `image missing alt attribute: ${src}`);
  }
  const requiredTitles = {
    '/': 'قص وتخريم الخرسانة في مصر | كور برو - 01021507462',
    '/core': 'أفضل صنايعي كور لعمل أي فتحة كور وتخريم جدار خرساني - 01021507462',
    '/saw': 'قص الخرسانة بالمنشار الماسي وفتح الجدران والأسقف - 01021507462',
    '/hoods': 'تأسيس وتركيب شفاط المطبخ - 01015218216',
  };
  if (requiredTitles[route] && (clean(visibleText(headings[0])) !== requiredTitles[route] || clean(visibleText(titles[0])) !== requiredTitles[route])) fail(route, 'requested title/H1 changed');
  const dedicated = route === '/hoods' ? '201015218216' : route === '/concrete-cutting-alexandria' ? '201094496839' : null;
  if (dedicated) for (const link of nodes.filter(n => n.tagName === 'a')) {
    const href = attr(link, 'href');
    if (!href.startsWith('tel:')) continue;
    let phone = href.slice(4).replace(/\D/g, '');
    if (phone.startsWith('0')) phone = `20${phone.slice(1)}`;
    if (phone !== dedicated) fail(route, `wrong dedicated telephone link: ${href}`);
  }
  if (route.startsWith('/concrete-cutting-') && html.includes('<astro-island')) fail(route, 'static regional page unnecessarily hydrated');
}
for (const [route, page] of pages) for (const link of page.nodes.filter(n => n.tagName === 'a')) {
  const href = attr(link, 'href');
  if (!href || /^(mailto:|tel:|javascript:)/.test(href)) continue;
  let url;
  try { url = new URL(href, `${origin}${route === '/' ? '/' : `${route}/`}`); } catch { continue; }
  if (url.origin !== origin) continue;
  const targetRoute = decodeURIComponent(url.pathname).replace(/\/$/, '') || '/';
  const targetPage = pages.get(targetRoute);
  if (!targetPage) {
    if (!fs.existsSync(path.join(root, decodeURIComponent(url.pathname))) && !['/api/auth', '/hoods-alexandria'].some(p => targetRoute.startsWith(p))) fail(route, `broken internal route ${href}`);
    continue;
  }
  if (url.hash && !targetPage.ids.has(decodeURIComponent(url.hash.slice(1)))) fail(route, `broken internal fragment ${href}`);
}
if ([...pages.keys()].some(route => route.startsWith('/seo-lab'))) fail('/seo-lab', 'private research tool included in public build');
const titleOwners = new Map();
for (const [route, page] of pages) {
  const title = clean(visibleText(page.nodes.find(n => n.tagName === 'title')));
  if (titleOwners.has(title)) fail(route, `duplicate title also used by ${titleOwners.get(title)}`);
  titleOwners.set(title, route);
}
const report = { checkedAt: new Date().toISOString(), pagesChecked: pages.size, failures, pages: [...pages].map(([route, page]) => ({ route, bytes: Buffer.byteLength(page.html), hydrated: page.html.includes('<astro-island') })) };
fs.mkdirSync('.astro/seo-audit', { recursive: true });
fs.writeFileSync('.astro/seo-audit/built-check.json', JSON.stringify(report, null, 2));
console.log(`Checked ${pages.size} public HTML pages: ${failures.length} SEO/content integrity failures.`);
for (const message of failures) console.error(message);
process.exitCode = failures.length ? 1 : 0;
