import fs from 'node:fs';

const areas = JSON.parse(fs.readFileSync('src/data/service-areas.json', 'utf8'));
for (const [key, area] of Object.entries(areas)) {
  const route = `src/pages/${area.slug}/index.astro`;
  const previous = fs.readFileSync(route, 'utf8');
  const geo = [...previous.matchAll(/(geoRegion|geoPlacename|geoPosition)="([^"]+)"/g)].map(m => `  ${m[1]}="${m[2]}"`).join('\n');
  fs.writeFileSync(route, `---
import Layout from '../../layouts/Layout.astro';
import PageComponent from '../../components/pages/${area.component}';
import BreadcrumbNav from '../../components/BreadcrumbNav.astro';
import areas from '../../data/service-areas.json';
const area = areas.${key};
---

<Layout
  title={\`${'${area.title}'} - ${'${area.phone}'}\`}
  description={\`${'${area.title}'} لفتحات الخدمات والأبواب والنوافذ. أرسل الصور والمقاسات وموقع العمل لتأكيد التنفيذ وتقدير التكلفة: ${'${area.phone}'}.\`}
  canonical={\`https://corepro-eg.com/${'${area.slug}'}\`}
  ogImageAlt={area.title}
${geo}
>
  <BreadcrumbNav items={[{ label: 'الرئيسية', href: '/' }, { label: area.title }]} />
  <PageComponent />
</Layout>
`, 'utf8');
  fs.writeFileSync(`src/components/pages/${area.component}.tsx`, `import React from 'react';
import ServiceAreaPage from '../ServiceAreaPage';
import areas from '../../data/service-areas.json';

export default function Page() {
  return <ServiceAreaPage area={areas.${key}} />;
}
`, 'utf8');
}
console.log(`Updated ${Object.keys(areas).length} regional routes and components.`);
