import os

filepath = r'f:\مواقعي\core-pro\src\content\blog\mansoura-delta-concrete-cutting-towers.md'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

print("=== First 500 chars (UTF-8 read) ===")
print(content[:500])
print("\n=== File is valid UTF-8 Arabic! ===")
