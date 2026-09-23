$blogDir = 'f:\مواقعي\core-pro\src\content\blog'
$files = Get-ChildItem -Path $blogDir -Filter '*.md'
$count = 0
foreach ($file in $files) {
    # Read raw bytes
    $bytes = [System.IO.File]::ReadAllBytes($file.FullName)
    # Interpret bytes as Latin-1 (how UTF-8 Arabic bytes were misread/stored)
    $latin1String = [System.Text.Encoding]::GetEncoding(28591).GetString($bytes)
    # Convert the Latin-1 string back to raw bytes (this recovers the original UTF-8 byte sequence)
    $recoveredBytes = [System.Text.Encoding]::GetEncoding(28591).GetBytes($latin1String)
    try {
        # Now decode the recovered bytes as UTF-8
        $correctText = [System.Text.Encoding]::UTF8.GetString($recoveredBytes)
        # Write back as proper UTF-8
        [System.IO.File]::WriteAllText($file.FullName, $correctText, [System.Text.Encoding]::UTF8)
        $count++
        Write-Host "Fixed: $($file.Name)"
    } catch {
        Write-Host "Error: $($file.Name) - $($_.Exception.Message)"
    }
}
Write-Host ""
Write-Host "Done! Fixed $count files."
