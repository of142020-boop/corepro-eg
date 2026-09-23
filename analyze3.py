import os
import subprocess

repo_dir = r'f:\مواقعي\core-pro'

# Get ORIGINAL garbled file from before our fix commit (HEAD~1)
result = subprocess.run(
    ['git', 'show', '23434de:src/content/blog/mansoura-delta-concrete-cutting-towers.md'],
    cwd=repo_dir,
    capture_output=True
)
raw = result.stdout

output_lines = []
output_lines.append(f"Size: {len(raw)} bytes")
output_lines.append(f"BOM: {raw[:3].hex()}")
output_lines.append(f"First 200 bytes hex: {raw[:200].hex()}")
output_lines.append("")

# Try utf-8-sig decode and write result to file
try:
    text_utf8sig = raw.decode('utf-8-sig')
    output_lines.append(f"UTF-8-sig decoded length: {len(text_utf8sig)}")
    output_lines.append("First 200 chars code points:")
    for i, ch in enumerate(text_utf8sig[:200]):
        output_lines.append(f"  [{i}] U+{ord(ch):04X} = {repr(ch)}")
except Exception as e:
    output_lines.append(f"UTF-8-sig error: {e}")

# Write to file
with open(r'f:\مواقعي\core-pro\encoding-analysis-output.txt', 'w', encoding='utf-8') as f:
    f.write('\n'.join(output_lines))

print("Done - output written to encoding-analysis-output.txt")
