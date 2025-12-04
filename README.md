
# 🎨 How to Use & Test Colorful ANSI Banners

GlyphGlass generates **TrueColor ANSI Escape Codes**. These are special invisible characters that tell a command-line terminal (like VS Code, Bash, or Command Prompt) which colors to display.

**⚠️ Important:** You cannot simply paste colored text into Notepad, Word, or a Web Browser. It must be viewed in a Terminal.

---

## ✅ The Best Way: Download the File

The most reliable way to use the art (especially on Windows) is to download it.

1. Click the **Save .txt** button in the app.
2. Open your terminal (VS Code, PowerShell, Terminal.app).
3. Run the command to view it:

   **Windows PowerShell:**
   ```powershell
   Get-Content .\glyphglass_art.txt -Encoding UTF8
   ```
   
   **Mac / Linux:**
   ```bash
   cat glyphglass_art.txt
   ```

---

## Testing via Copy/Paste

If you prefer to copy to clipboard:

### Method A: VS Code (Easiest)
1. Copy the text from the app.
2. In VS Code, create a new file `banner.txt`.
3. Paste.
4. Open the VS Code Terminal (`Ctrl + ~`).
5. Run: `Get-Content banner.txt -Encoding UTF8` (Windows) or `cat banner.txt` (Mac).

### Method B: Node.js
*Note: Do not paste the code directly into the `node` console. The terminal will strip the escape codes.*

1. **Download** the file (or save your clipboard content to `banner.txt`).
2. Run this one-liner in your terminal to view it via Node:
   ```bash
   node -e "console.log(require('fs').readFileSync('banner.txt', 'utf8'))"
   ```

---

## Troubleshooting

- **"I see weird squares or `â-^` symbols"**: This is a Windows encoding issue. 
  - Solution 1: Use the **Save .txt** button (it handles UTF-8 automatically).
  - Solution 2: Always use `-Encoding UTF8` when using `Get-Content` in PowerShell.

- **"The colors are missing"**: Ensure you selected a Color Theme (like Cyber or Inferno) and not "Plain".
