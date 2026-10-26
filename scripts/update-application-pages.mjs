import fs from 'node:fs';

const applications = JSON.parse(fs.readFileSync('src/data/service-applications.json', 'utf8'));
for (const [key, service] of Object.entries(applications)) {
  fs.writeFileSync(`src/components/pages/${service.component}.tsx`, `import React from 'react';
import ApplicationServicePage from '../ApplicationServicePage';
import applications from '../../data/service-applications.json';

export default function Page() {
  return <ApplicationServicePage service={applications.${key}} />;
}
`, 'utf8');
  fs.writeFileSync(`src/pages/${service.slug}/index.astro`, `---
import Layout from '../../layouts/Layout.astro';
import PageComponent from '../../components/pages/${service.component}';
import BreadcrumbNav from '../../components/BreadcrumbNav.astro';
import applications from '../../data/service-applications.json';
const service = applications.${key};
---

<Layout title={\`${'${service.title}'} - 01021507462\`} description={service.description} canonical={\`https://corepro-eg.com/${'${service.slug}'}\`}>
  <BreadcrumbNav items={[{ label: 'الرئيسية', href: '/' }, { label: service.parentLabel, href: \`/${'${service.parent}'}\` }, { label: service.title }]} />
  <PageComponent />
</Layout>
`, 'utf8');
}
console.log(`Updated ${Object.keys(applications).length} application routes and components.`);
