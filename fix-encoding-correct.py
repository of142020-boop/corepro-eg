import os
import subprocess
import glob

repo_dir = r'f:\مواقعي\core-pro'
blog_dir = r'f:\مواقعي\core-pro\src\content\blog'

# Build the COMPLETE reverse cp1252 mapping
# cp1252 maps bytes 0x00-0xFF to Unicode chars
# For bytes 0x81, 0x8D, 0x8F, 0x90, 0x9D (undefined in cp1252),
# the original tool stored them as their C1 control char equivalents (U+0081 etc.)
REVERSE_CP1252 = {}

for b in range(0x100):
    try:
        ch = bytes([b]).decode('cp1252')
        REVERSE_CP1252[ch] = b
    except (UnicodeDecodeError, ValueError):
        # Undefined in cp1252 - map the C1 control char to this byte
        REVERSE_CP1252[chr(b)] = b

print(f"Reverse cp1252 map size: {len(REVERSE_CP1252)} entries")

# Verify some key mappings:
print(f"U+201A (‚) -> 0x{REVERSE_CP1252.get(chr(0x201A), -1):02X}")  # should be 0x82
print(f"U+0081 (\\x81) -> 0x{REVERSE_CP1252.get(chr(0x81), -1):02X}")  # should be 0x81
print(f"U+00D9 (Ù) -> 0x{REVERSE_CP1252.get(chr(0xD9), -1):02X}")    # should be 0xD9


def fix_double_encoded(garbled_text):
    """
    Reverse the double-encoding:
    Original UTF-8 bytes were read as cp1252 chars, then saved as UTF-8.
    This function reverses that to recover the original UTF-8 Arabic text.
    """
    result = bytearray()
    for ch in garbled_text:
        if ch in REVERSE_CP1252:
            result.append(REVERSE_CP1252[ch])
        else:
            # Character outside cp1252 range - encode as UTF-8 (shouldn't normally happen)
            result.extend(ch.encode('utf-8', errors='replace'))
    
    # Decode the recovered bytes as UTF-8
    return result.decode('utf-8', errors='replace')


# Get list of blog files from the ORIGINAL commit (before our fixes)
original_commit = '23434de'
blog_files_result = subprocess.run(
    ['git', 'ls-tree', '--name-only', f'{original_commit}:src/content/blog'],
    cwd=repo_dir,
    capture_output=True,
    text=True,
    encoding='utf-8'
)
blog_files = [f.strip() for f in blog_files_result.stdout.strip().split('\n') if f.strip().endswith('.md')]
print(f"\nFound {len(blog_files)} blog files to process")

count = 0
errors = 0

for filename in blog_files:
    git_path = f'src/content/blog/{filename}'
    output_path = os.path.join(blog_dir, filename)
    
    try:
        # Get the ORIGINAL garbled file from git (before our broken fix)
        result = subprocess.run(
            ['git', 'show', f'{original_commit}:{git_path}'],
            cwd=repo_dir,
            capture_output=True
        )
        
        if result.returncode != 0:
            print(f"Git error for {filename}")
            errors += 1
            continue
        
        raw_bytes = result.stdout
        
        # Remove BOM if present
        if raw_bytes.startswith(b'\xef\xbb\xbf'):
            raw_bytes = raw_bytes[3:]
        
        # Decode the garbled content as UTF-8
        garbled_text = raw_bytes.decode('utf-8', errors='replace')
        
        # Fix the double encoding using our complete reverse cp1252 map
        correct_text = fix_double_encoded(garbled_text)
        
        # Normalize line endings
        correct_text = correct_text.replace('\r\n', '\n').replace('\r', '\n')
        
        # Write as clean UTF-8 without BOM
        with open(output_path, 'w', encoding='utf-8', newline='\n') as f:
            f.write(correct_text)
        
        count += 1
        
    except Exception as e:
        errors += 1
        print(f"Error: {filename} - {e}")

print(f"\n✅ Fixed: {count}, Errors: {errors}")

# Write verification output to file
verify_output = []
test_file = os.path.join(blog_dir, 'mansoura-delta-concrete-cutting-towers.md')
with open(test_file, 'r', encoding='utf-8') as f:
    content = f.read()

verify_output.append("=== VERIFICATION: mansoura file ===")
verify_output.append(content[:600])
verify_output.append("")
verify_output.append(f"Contains 'ف': {'ف' in content}")
verify_output.append(f"Contains 'في': {'في' in content}")
verify_output.append(f"Contains 'قص': {'قص' in content}")
verify_output.append(f"Contains 'الخرسانة': {'الخرسانة' in content}")
verify_output.append(f"Contains 'المنصورة': {'المنصورة' in content}")

with open(r'f:\مواقعي\core-pro\fix-verify-output.txt', 'w', encoding='utf-8') as f:
    f.write('\n'.join(verify_output))

print("\nVerification written to fix-verify-output.txt")
