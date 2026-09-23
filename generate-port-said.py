import os
import re

components_dir = r'f:\مواقعي\core-pro\src\components\pages'
pages_dir = r'f:\مواقعي\core-pro\src\pages'

city = {
    'en': 'port-said-ismailia',
    'en_cap': 'Port Said & Ismailia',
    'ar': 'بورسعيد والإسماعيلية',
    'region': 'EG-PTS',
    'lat': 31.2565,
    'lng': 32.2841,
    'phone': '01021507462',
    'phone_int': '+201021507462',
    'areas': ['ميناء شرق بورسعيد', 'المنطقة الحرة الاستثمارية', 'مدينة الإسماعيلية الجديدة', 'قناة السويس ومحيطها', 'القنطرة وشرق التفريعة', 'المناطق الصناعية']
}

with open(os.path.join(components_dir, 'minyaPage.tsx'), 'r', encoding='utf-8') as f:
    minya_ts_content = f.read()

with open(os.path.join(pages_dir, 'concrete-cutting-minya', 'index.astro'), 'r', encoding='utf-8') as f:
    minya_astro_content = f.read()

# --- Component ---
content = minya_ts_content
areas_str = ',\n  '.join([f"'{a}'" for a in city['areas']])
content = re.sub(r'const MINYA_AREAS = \[.*?\];', f'const PORTSAID_AREAS = [\n  {areas_str}\n];', content, flags=re.DOTALL)
content = content.replace('...MINYA_AREAS', '...PORTSAID_AREAS')
content = content.replace('MINYA_AREAS', 'PORTSAID_AREAS') # for the maps below

content = content.replace('MinyaPage', 'PortSaidIsmailiaPage')
content = content.replace('Minya', city['en_cap'])
content = content.replace('minya', city['en'])
content = content.replace('المنيا', city['ar'])
content = content.replace('EG-MN', city['region'])
content = content.replace('28.0871', str(city['lat']))
content = content.replace('30.7618', str(city['lng']))

# Uniqueness & Wire Sawing Emphasis
content = content.replace('متخصصون في تخريم الخرسانة بالكور وقص الخرسانة بالمنشار في بورسعيد والإسماعيلية — فتحات التكييف والغاز والسباكة وفتح الأبواب والشبابيك بدقة هندسية وبدون اهتزاز.', 'المقاول الأول لأعمال قص الخرسانة بالواير الماسي (Wire Sawing) وتخريم الكور في بورسعيد والإسماعيلية. متخصصون في قص الكباري والموانئ والمشاريع القومية.')
content = content.replace('نقدم الخدمتين في بورسعيد والإسماعيلية وجميع مراكزها', 'نقدم خدماتنا لكبرى المشاريع في مدن القناة والموانئ، مع تخصص دقيق في قص الكتل الخرسانية الضخمة بالواير الماسي')
content = content.replace('تخريم الكور وقص الخرسانة في بورسعيد والإسماعيلية', 'قص الخرسانة بالواير وتخريم الكور لمشاريع القناة')

# Customizing FAQ to mention wire sawing
content = content.replace('هل تعملون في تخريم الكور وقص الخرسانة في بورسعيد والإسماعيلية؟', 'هل تقومون بقص الخرسانة بالواير للكباري والموانئ في مدن القناة؟')
content = content.replace('نعم، نقدم الخدمتين في بورسعيد والإسماعيلية وجميع مراكزها. تخريم الكور لفتحات التكييف والغاز والسباكة والصرف، وقص الخرسانة بالمنشار لفتح الأبواب والشبابيك وقص الأسقف. فريقنا يصل لأي موقع في محافظة بورسعيد والإسماعيلية.', 'نعم، نحن متخصصون في تقنية الواير الماسي (Wire Sawing) لقص الكتل الخرسانية الضخمة، قواعد الكباري، والموانئ بمدن القناة. الواير يوفر قصاً صامتاً بسماكات مترية بدون أي اهتزازات تؤثر على البنية التحتية.')

content = content.replace('هل يمكنكم قص جدار لفتح باب في منزلي ببورسعيد والإسماعيلية؟', 'كيف يفيد القص بالواير مشاريع البنية التحتية في بورسعيد؟')
content = content.replace('بالطبع. نأتي لموقعك ونعاين الجدار بالكاشف الإلكتروني لتحديد حديد التسليح، ثم ننفذ القص بمنشار السكة الماسي مع تبريد مائي كامل. الفتحة تخرج نظيفة وجاهزة لتركيب البوابة مباشرة.', 'تقنية الواير الماسي مثالية للمشاريع القومية، حيث يمكننا فصل أجزاء كباري كاملة أو قص قواعد أرصفة الموانئ بدقة هندسية متناهية وفي وقت قياسي مقارنة بطرق التكسير التقليدية.')

with open(os.path.join(components_dir, 'portSaidIsmailiaPage.tsx'), 'w', encoding='utf-8') as f:
    f.write(content)

# --- Astro ---
astro = minya_astro_content
astro = astro.replace('minyaPage', 'portSaidIsmailiaPage')
astro = astro.replace('minya', city['en'])
astro = astro.replace('Minya', city['en_cap'])
astro = astro.replace('المنيا', city['ar'])
astro = astro.replace('EG-MN', city['region'])
astro = astro.replace('28.0871', str(city['lat']))
astro = astro.replace('30.7618', str(city['lng']))

# Uniqueness & Wire Sawing Emphasis
astro = astro.replace('صنايعي كور وقص الخرسانة في بورسعيد والإسماعيلية - 01021507462', 'مقاول قص الخرسانة بالواير وتخريم الكور بورسعيد والإسماعيلية')
astro = astro.replace('متخصصون في تخريم الخرسانة بالكور وقص الخرسانة بالمنشار في بورسعيد والإسماعيلية — فتحات التكييف والغاز الطبيعي والسباكة وفتح الأبواب والشبابيك بدقة هندسية وبدون اهتزاز. نخدم جميع مراكز بورسعيد والإسماعيلية. اتصل 01021507462.', 'مقاول متخصص في قص الخرسانة بالواير الماسي وتخريم الكور للمشاريع القومية والموانئ في بورسعيد والإسماعيلية. قص كباري، قواعد خرسانية، وفتحات MEP بدقة هندسية.')
astro = astro.replace('تخريم الكور وقص الخرسانة في بورسعيد والإسماعيلية - كور برو', 'قص الخرسانة بالواير الماسي بورسعيد والإسماعيلية - كور برو')

page_dir = os.path.join(pages_dir, f"concrete-cutting-{city['en']}")
os.makedirs(page_dir, exist_ok=True)
with open(os.path.join(page_dir, 'index.astro'), 'w', encoding='utf-8') as f:
    f.write(astro)

print('Port Said & Ismailia pages generated.')
