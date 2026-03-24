const fs = require('fs');

// Fix blog-[slug]Page.tsx
let content = fs.readFileSync('src/components/pages/blog-[slug]Page.tsx', 'utf8');
content = content.replace(
  /export default async function PostPage\(\{\r?\n\s*params,\r?\n\}\:\s*\{\r?\n\s*params\:\s*Promise\<\{\s*slug\:\s*string\s*\}\>;\r?\n\}\)\s*\{\r?\n\s*const\s*\{\s*slug\s*\}\s*\=\s*await\s*params;/,
  'export default async function PostPage({ slug }: { slug: string }) {'
);

fs.writeFileSync('src/components/pages/blog-[slug]Page.tsx', content);

// Fix blog/[slug]/index.astro
let astroContent = `---
import Layout from '../../../layouts/Layout.astro';
import PageComponent from '../../../components/pages/blog-[slug]Page';
import { client } from '../../../sanity/lib/client';

export async function getStaticPaths() {
  const query = \`*[_type == "post"]{ "slug": slug.current }\`;
  const posts = await client.fetch(query);
  return posts.map((post: any) => ({
    params: { slug: post.slug },
  }));
}

const { slug } = Astro.params;
---

<Layout title="Core Pro | Blog" description="اقرأ أحدث المقالات عن قص وتخريم الخرسانة من كور برو.">
  <PageComponent slug={slug} client:idle />
</Layout>
`;
fs.writeFileSync('src/pages/blog/[slug]/index.astro', astroContent);
console.log('Fixed blog slug page!');
