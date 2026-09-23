import os

filepath = r'f:\مواقعي\core-pro\src\content\blog\mansoura-delta-concrete-cutting-towers.md'

with open(filepath, 'rb') as f:
    raw_bytes = f.read()

print(f"File size: {len(raw_bytes)} bytes")
print(f"BOM: {raw_bytes[:3].hex()}")
print(f"\nFirst 50 bytes (after BOM): {raw_bytes[3:53].hex()}")
print(f"\nFirst 50 bytes repr: {repr(raw_bytes[3:53])}")

# The bytes look like double-encoded UTF-8
# Let's look at what we have for Arabic char ق (U+0642)
# UTF-8 for ق = D9 82
# If the file was saved as UTF-8 but the UTF-8 bytes were treated as cp1252/latin-1
# and then re-encoded as UTF-8, the pattern would be:
# Original: D9 82 (UTF-8 for ق)
# cp1252 char for 0xD9 = Ù, cp1252 for 0x82 = ‚ (smart quote)
# UTF-8 for Ù = C3 99, UTF-8 for ‚ = E2 80 9A
# So double-encoded: C3 99 E2 80 9A

# Let's see if we find C3 99 E2 80 9A pattern
idx = raw_bytes.find(b'\xc3\x99\xe2\x80\x9a')
print(f"\nFound 'Ù‚' pattern at index: {idx}")

# Try: read as UTF-8, get the garbled chars, encode each char as its cp1252 byte value
content = raw_bytes[3:].decode('utf-8', errors='replace')
print(f"\nFirst 60 chars (UTF-8 decoded): {content[:60]}")

# Now try to map cp1252 encoding
try:
    recovered = content.encode('cp1252', errors='replace')
    print(f"\nRecovered bytes (first 30): {recovered[:30].hex()}")
    # Now decode as UTF-8
    arabic = recovered.decode('utf-8', errors='replace')
    print(f"\nArabic text: {arabic[:100]}")
except Exception as e:
    print(f"Error: {e}")
