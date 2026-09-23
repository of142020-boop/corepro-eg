import re

f = open(r'f:\مواقعي\core-pro\dist\blog\mansoura-delta-concrete-cutting-towers\index.html', encoding='utf-8')
c = f.read()
f.close()

h1 = re.search(r'<h1[^>]*>(.*?)</h1>', c, re.DOTALL)
title_tag = re.search(r'<title>(.*?)</title>', c, re.DOTALL)
meta_desc = re.search(r'<meta name="description" content="([^"]+)"', c)

out = open(r'f:\مواقعي\core-pro\sample-output.txt', 'w', encoding='utf-8')
out.write('TITLE: ' + (title_tag.group(1).strip() if title_tag else 'NOT FOUND') + '\n\n')
out.write('H1: ' + (h1.group(1).strip() if h1 else 'NOT FOUND') + '\n\n')
out.write('META DESC: ' + (meta_desc.group(1).strip() if meta_desc else 'NOT FOUND') + '\n')
out.close()
print('done')
