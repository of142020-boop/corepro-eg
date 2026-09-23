import os
import subprocess

# Analyze the original garbled file from git
repo_dir = r'f:\مواقعي\core-pro'

# Get the original garbled file (before our fixes)
result = subprocess.run(
    ['git', 'show', '23434de:src/content/blog/mansoura-delta-concrete-cutting-towers.md'],
    cwd=repo_dir,
    capture_output=True
)
raw = result.stdout
print(f"Size: {len(raw)} bytes")
print(f"First 3 bytes (BOM?): {raw[:3].hex()}")
print(f"First 100 bytes hex: {raw[:100].hex()}")
print(f"First 100 bytes repr: {repr(raw[:100])}")
print()

# Try decoding
for enc in ['utf-8', 'utf-8-sig', 'utf-16', 'utf-16-le', 'utf-16-be', 'cp1256', 'latin-1']:
    try:
        text = raw.decode(enc)
        print(f"\n=== {enc} ===")
        print(repr(text[:80]))
    except Exception as e:
        print(f"\n=== {enc} === ERROR: {e}")
