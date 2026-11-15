export function getPageContact(pathname: string) {
  const path = pathname.replace(/\/$/, '');
  const phone = path === '/hoods' ? '01015218216' : ['/concrete-cutting-alexandria', '/hoods-blowers-alexandria'].includes(path) ? '01094496839' : '01021507462';
  const international = `+20${phone.slice(1)}`;
  return { phone, international, whatsapp: `https://wa.me/${international.slice(1)}` };
}
