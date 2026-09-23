import os
import subprocess
import glob

blog_dir = r'f:\مواقعي\core-pro\src\content\blog'
repo_dir = r'f:\مواقعي\core-pro'
files = glob.glob(os.path.join(blog_dir, '*.md'))

count = 0
errors = 0

for filepath in files:
    filename = os.path.basename(filepath)
    git_path = f'src/content/blog/{filename}'
    
    try:
        # Get the file content from git (HEAD commit) as raw bytes
        result = subprocess.run(
            ['git', 'show', f'HEAD:{git_path}'],
            cwd=repo_dir,
            capture_output=True
        )
        
        if result.returncode != 0:
            print(f"Git error for {filename}: {result.stderr.decode('utf-8', errors='replace')}")
            errors += 1
            continue
        
        raw_bytes = result.stdout
        
        # Detect encoding
        if raw_bytes.startswith(b'\xff\xfe'):
            # UTF-16 LE with BOM
            text = raw_bytes.decode('utf-16-le', errors='replace')
            # Remove the BOM character if present
            if text.startswith('\ufeff'):
                text = text[1:]
            encoding_used = 'UTF-16 LE'
        elif raw_bytes.startswith(b'\xfe\xff'):
            # UTF-16 BE with BOM
            text = raw_bytes.decode('utf-16-be', errors='replace')
            if text.startswith('\ufeff'):
                text = text[1:]
            encoding_used = 'UTF-16 BE'
        elif raw_bytes.startswith(b'\xef\xbb\xbf'):
            # UTF-8 with BOM
            text = raw_bytes[3:].decode('utf-8', errors='replace')
            encoding_used = 'UTF-8 BOM'
        else:
            # Try UTF-8, then fallback
            try:
                text = raw_bytes.decode('utf-8')
                encoding_used = 'UTF-8'
            except:
                text = raw_bytes.decode('cp1252', errors='replace')
                encoding_used = 'CP1252'
        
        # Fix line endings (normalize to \n)
        text = text.replace('\r\n', '\n').replace('\r', '\n')
        
        # Write as UTF-8 without BOM
        with open(filepath, 'w', encoding='utf-8', newline='\n') as f:
            f.write(text)
        
        count += 1
        print(f"Fixed ({encoding_used}): {filename}")
        
    except Exception as e:
        errors += 1
        print(f"Error: {filename} - {e}")

print(f"\nDone! Fixed: {count}, Errors: {errors}")

# Verify one file
test_file = os.path.join(blog_dir, 'mansoura-delta-concrete-cutting-towers.md')
with open(test_file, 'r', encoding='utf-8') as f:
    preview = f.read(300)
print("\n=== Verification (mansoura file) ===")
print(preview)
