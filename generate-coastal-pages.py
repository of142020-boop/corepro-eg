import os
import re

components_dir = r"f:\مواقعي\core-pro\src\components\pages"
pages_dir = r"f:\مواقعي\core-pro\src\pages"

cities = [
    {
        "en": "hurghada",
        "en_cap": "Hurghada",
        "ar": "الغردقة",
        "region": "EG-BA",
        "lat": 27.2579,
        "lng": 33.8116,
        "phone": "01094496839",
        "phone_int": "+201094496839",
        "areas": [
            'الجونة والممشى السياحي',
            'سهل حشيش',
            'طريق القرى والكوثر',
            'الدهار والسقالة',
            'الأحياء',
            'مكادي باي',
            'سوما باي',
            'جميع قرى ومنتجعات البحر الأحمر'
        ]
    },
    {
        "en": "safaga",
        "en_cap": "Safaga",
        "ar": "سفاجا",
        "region": "EG-BA",
        "lat": 26.7456,
        "lng": 33.9358,
        "phone": "01094496839",
        "phone_int": "+201094496839",
        "areas": [
            'ميناء سفاجا ومحيطه',
            'قرى سوما باي',
            'طريق القصير',
            'مركز المدينة',
            'المنطقة الصناعية بسفاجا',
            'منتجعات سفاجا السياحية'
        ]
    },
    {
        "en": "sokhna",
        "en_cap": "Ain Sokhna",
        "ar": "العين السخنة",
        "region": "EG-SU",
        "lat": 29.6015,
        "lng": 32.3168,
        "phone": "01094496839",
        "phone_int": "+201094496839",
        "areas": [
            'مدينة الجلالة',
            'بورتو السخنة',
            'طريق الزعفرانة',
            'طريق السويس - السخنة',
            'منتجعات وقرى العين السخنة',
            'المنطقة الصناعية بالسخنة'
        ]
    }
]

# Read minya component template
with open(os.path.join(components_dir, "minyaPage.tsx"), "r", encoding="utf-8") as f:
    minya_ts_content = f.read()

# Read minya astro template
with open(os.path.join(pages_dir, "concrete-cutting-minya", "index.astro"), "r", encoding="utf-8") as f:
    minya_astro_content = f.read()

for city in cities:
    print(f"Generating files for {city['en']}...")
    
    # --- Generate Component ---
    content = minya_ts_content
    # Replace areas array
    areas_str = ",\n  ".join([f"'{a}'" for a in city['areas']])
    content = re.sub(r'const MINYA_AREAS = \[.*?\];', f'const {city["en"].upper()}_AREAS = [\n  {areas_str}\n];', content, flags=re.DOTALL)
    content = content.replace('...MINYA_AREAS', f'...{city["en"].upper()}_AREAS')
    
    content = content.replace('MinyaPage', f"{city['en_cap'].replace(' ', '')}Page")
    content = content.replace('Minya', city['en_cap'])
    content = content.replace('minya', city['en'])
    content = content.replace('المنيا', city['ar'])
    content = content.replace('EG-MN', city['region'])
    content = content.replace('28.0871', str(city['lat']))
    content = content.replace('30.7618', str(city['lng']))
    
    # Replace phone if it's the coastal number
    content = content.replace('01021507462', city['phone'])
    content = content.replace('+201021507462', city['phone_int'])

    with open(os.path.join(components_dir, f"{city['en']}Page.tsx"), "w", encoding="utf-8") as f:
        f.write(content)
        
    # --- Generate Astro Page ---
    astro = minya_astro_content
    astro = astro.replace('minyaPage', f"{city['en']}Page")
    astro = astro.replace('minya', city['en'])
    astro = astro.replace('Minya', city['en_cap'])
    astro = astro.replace('المنيا', city['ar'])
    astro = astro.replace('EG-MN', city['region'])
    astro = astro.replace('28.0871', str(city['lat']))
    astro = astro.replace('30.7618', str(city['lng']))
    astro = astro.replace('01021507462', city['phone'])
    astro = astro.replace('+201021507462', city['phone_int'])
    
    page_dir = os.path.join(pages_dir, f"concrete-cutting-{city['en']}")
    os.makedirs(page_dir, exist_ok=True)
    with open(os.path.join(page_dir, "index.astro"), "w", encoding="utf-8") as f:
        f.write(astro)

print("Done generating pages.")
