import os
import re

components_dir = r'f:\مواقعي\core-pro\src\components\pages'
pages_dir = r'f:\مواقعي\core-pro\src\pages'

city = {
    'en': 'marsa-alam',
    'en_cap': 'Marsa Alam',
    'ar': 'مرسى علم',
    'region': 'EG-BA',
    'lat': 25.0676,
    'lng': 34.8790,
    'phone': '01021507462',
    'phone_int': '+201021507462',
    'areas': ['بورت غالب', 'خليج كورايا', 'أبو دباب', 'مرسى شجرة', 'القرى السياحية بمرسى علم', 'جنوب البحر الأحمر']
}

with open(os.path.join(components_dir, 'minyaPage.tsx'), 'r', encoding='utf-8') as f:
    minya_ts_content = f.read()

with open(os.path.join(pages_dir, 'concrete-cutting-minya', 'index.astro'), 'r', encoding='utf-8') as f:
    minya_astro_content = f.read()

# --- Component ---
content = minya_ts_content
areas_str = ',\n  '.join([f"'{a}'" for a in city['areas']])
content = re.sub(r'const MINYA_AREAS = \[.*?\];', f'const MARSAALAM_AREAS = [\n  {areas_str}\n];', content, flags=re.DOTALL)
content = content.replace('...MINYA_AREAS', '...MARSAALAM_AREAS')
content = content.replace('MINYA_AREAS', 'MARSAALAM_AREAS') # for the maps below

content = content.replace('MinyaPage', 'MarsaAlamPage')
content = content.replace('Minya', city['en_cap'])
content = content.replace('minya', city['en'])
content = content.replace('المنيا', city['ar'])
content = content.replace('EG-MN', city['region'])
content = content.replace('28.0871', str(city['lat']))
content = content.replace('30.7618', str(city['lng']))

# Uniqueness
content = content.replace('نقدم الخدمتين في مرسى علم وجميع مراكزها', 'نقدم الخدمتين للمنتجعات السياحية والفنادق في مرسى علم وبورت غالب')
content = content.replace('شركة متخصصة في أعمال تخريم الخرسانة بالكور وقص الخرسانة بالمنشار', 'الشركة الرائدة في قص وتخريم الخرسانة للمشاريع السياحية بجنوب البحر الأحمر')

with open(os.path.join(components_dir, 'marsaAlamPage.tsx'), 'w', encoding='utf-8') as f:
    f.write(content)

# --- Astro ---
astro = minya_astro_content
astro = astro.replace('minyaPage', 'marsaAlamPage')
astro = astro.replace('minya', city['en'])
astro = astro.replace('Minya', city['en_cap'])
astro = astro.replace('المنيا', city['ar'])
astro = astro.replace('EG-MN', city['region'])
astro = astro.replace('28.0871', str(city['lat']))
astro = astro.replace('30.7618', str(city['lng']))

# Uniqueness
astro = astro.replace('صنايعي كور وقص الخرسانة في مرسى علم - 01021507462', 'قص الخرسانة وتخريم الكور للفنادق في مرسى علم - 01021507462')
astro = astro.replace('متخصصون في تخريم الخرسانة بالكور وقص الخرسانة بالمنشار في مرسى علم — فتحات التكييف والغاز الطبيعي والسباكة وفتح الأبواب والشبابيك بدقة هندسية وبدون اهتزاز. نخدم جميع مراكز مرسى علم. اتصل 01021507462.', 'مقاول تخريم وقص خرسانة متخصص لخدمة القرى السياحية والفنادق في مرسى علم وبورت غالب. فتحات دقيقة للكهروميكانيك بدون اهتزاز.')

page_dir = os.path.join(pages_dir, f"concrete-cutting-{city['en']}")
os.makedirs(page_dir, exist_ok=True)
with open(os.path.join(page_dir, 'index.astro'), 'w', encoding='utf-8') as f:
    f.write(astro)

print('Marsa Alam pages generated.')
