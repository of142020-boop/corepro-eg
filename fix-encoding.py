import os
import glob

blog_dir = r'f:\مواقعي\core-pro\src\content\blog'
files = glob.glob(os.path.join(blog_dir, '*.md'))

count = 0
errors = 0

for filepath in files:
    filename = os.path.basename(filepath)
    try:
        # Read raw bytes
        with open(filepath, 'rb') as f:
            raw_bytes = f.read()
        
        # Remove BOM if present
        if raw_bytes.startswith(b'\xef\xbb\xbf'):
            raw_bytes = raw_bytes[3:]
        
        # The file is UTF-8 encoded, but the text content itself is 
        # Windows-1252 characters that represent garbled Arabic.
        # Step 1: Decode the file as UTF-8 to get the garbled string
        garbled_text = raw_bytes.decode('utf-8', errors='ignore')
        
        # Step 2: Encode the garbled text back to cp1252 bytes
        # This recovers the original UTF-8 Arabic bytes
        recovered_bytes = garbled_text.encode('cp1252', errors='ignore')
        
        # Step 3: Decode those recovered bytes as UTF-8 to get correct Arabic
        correct_text = recovered_bytes.decode('utf-8', errors='ignore')
        
        # Write back as UTF-8 without BOM
        with open(filepath, 'w', encoding='utf-8', newline='') as f:
            f.write(correct_text)
        
        count += 1
        print(f"Fixed: {filename}")
        
        # Verify first line
        with open(filepath, 'r', encoding='utf-8') as f:
            first_lines = f.read(100)
        print(f"  Preview: {first_lines[:60]}")
        
    except Exception as e:
        errors += 1
        print(f"Error: {filename} - {e}")

print(f"\nDone! Fixed: {count}, Errors: {errors}")
