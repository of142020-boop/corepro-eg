import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, '../src/components/pages/hoodsAlexandriaPage.tsx');

let content = fs.readFileSync(filePath, 'utf8');

// 1. Rename Component
content = content.replace(/export default function HoodsPage/g, 'export default function HoodsAlexandriaPage');

// 2. Change Phone Number
content = content.replace(/01015218216/g, '01030881637');
content = content.replace(/01103212888/g, '01030881637');

// 3. Update H1
content = content.replace(
  /<h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-\[1.2\] tracking-tight">([\s\S]*?)<\/h1>/,
  '<h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.2] tracking-tight">\nفني تركيب وصيانة <span className="text-transparent bg-clip-text bg-gradient-to-l from-orange-600 to-orange-400">شفاطات بالاسكندرية</span>\n</h1>'
);

// 4. Add Alexandria Locations Paragraph
const locationsHtml = `
  {/* ── مناطق الاسكندرية ── */}
  <Section id="alexandria-locations" title="نغطي جميع مناطق الاسكندرية">
    <p className="mb-4">
      نقدم خدماتنا في توريد وتركيب وصيانة كافة الشفاطات والمداخن وتخريم الكور في جميع أحياء ومناطق الاسكندرية لضمان سرعة الوصول والتنفيذ:
    </p>
    <div className="flex flex-wrap gap-2">
      {["سموحة", "محطة الرمل", "ميامي", "المندرة", "لوران", "كفر عبده", "رشدي", "جليم", "سان ستيفانو", "سيدي جابر", "سيدي بشر", "فيكتوريا", "السيوف", "العجمي", "برج العرب", "المنتزه", "أبو قير", "المعمورة"].map((area) => (
        <span key={area} className="px-4 py-2 bg-orange-50 text-orange-800 rounded-full text-sm font-bold border border-orange-100 shadow-sm">
          {area}
        </span>
      ))}
    </div>
  </Section>
`;

content = content.replace('{/* ── قسم جديد: مقارنة شفاط بمدخنة vs بدون مدخنة ── */}', locationsHtml + '\n\n  {/* ── قسم جديد: مقارنة شفاط بمدخنة vs بدون مدخنة ── */}');

// 5. Update subtitle text
content = content.replace(
  'تركيب دكت ومداخن الشفاطات المركزي',
  'تركيب دكت ومداخن الشفاطات المركزي بالإسكندرية'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Alexandria modifications applied successfully.');
