
import { FONT_LIBRARY } from "../data/fontData";
import { FontKey, ColorThemeId } from "../types";

/**
 * Generates ASCII art locally using predefined font maps.
 * Includes auto-padding to ensure character blocks are rectangular,
 * preventing misalignment issues.
 */
export const generateAsciiArtLocal = (text: string, fontKey: FontKey): string => {
  const fontDef = FONT_LIBRARY[fontKey];
  
  if (!fontDef) {
    return generateAsciiArtLocal(text, 'standard');
  }

  const { height, gap, map } = fontDef;
  const lines: string[] = new Array(height).fill("");
  const cleanText = text.toUpperCase();

  // Helper to safely get character lines
  const getCharLines = (char: string): string[] => {
    // Try exact match, then fallback to ? or space
    return map[char] || map['?'] || map[' '] || new Array(height).fill(" ");
  };

  for (let i = 0; i < cleanText.length; i++) {
    const char = cleanText[i];
    const rawLines = getCharLines(char);

    // 1. Calculate the maximum width for this specific character
    let maxWidth = 0;
    for (let j = 0; j < height; j++) {
      const lineLen = (rawLines[j] || "").length;
      if (lineLen > maxWidth) maxWidth = lineLen;
    }
    
    if (char === ' ' && maxWidth === 0) {
        maxWidth = 4;
    }

    // 2. Append each line, padding with spaces
    for (let lineIndex = 0; lineIndex < height; lineIndex++) {
      const rawLine = rawLines[lineIndex] || "";
      const paddedSegment = rawLine.padEnd(maxWidth, " ");
      
      lines[lineIndex] += paddedSegment;
      
      if (gap > 0 && i < cleanText.length - 1) {
        lines[lineIndex] += " ".repeat(gap);
      }
    }
  }

  return lines.join("\n");
};

/**
 * Wraps ASCII art in TrueColor ANSI escape codes based on a theme.
 */
export const applyAnsiTheme = (ascii: string, themeId: ColorThemeId): string => {
  if (themeId === 'plain') return ascii;

  const lines = ascii.split('\n');
  const height = lines.length;
  const width = Math.max(...lines.map(l => l.length));

  // RGB helpers with clamping to 0-255
  const clamp = (num: number) => Math.min(255, Math.max(0, Math.floor(num)));
  const rgb = (r: number, g: number, b: number) => `\x1b[38;2;${clamp(r)};${clamp(g)};${clamp(b)}m`;
  const reset = `\x1b[0m`;

  return lines.map((line, y) => {
    let coloredLine = '';
    // Use Array.from to correctly iterate over Unicode characters (surrogate pairs)
    const chars = Array.from(line);
    
    for (let x = 0; x < chars.length; x++) {
      const char = chars[x];
      
      let r = 255, g = 255, b = 255;
      const progressX = x / Math.max(width, 1);
      const progressY = y / Math.max(height, 1);

      switch (themeId) {
        case 'neon': // Cyan -> Purple Horizontal
          r = 60 + (progressX * 160);
          g = 200 - (progressX * 180);
          b = 255;
          break;
        case 'fire': // Yellow -> Red Vertical
          r = 255;
          g = 200 - (progressY * 200);
          b = 0;
          break;
        case 'matrix': // Dark Green -> Bright Green
          r = 0;
          g = 150 + (Math.random() * 100); // Glitchy matrix effect
          b = 0;
          break;
        case 'ocean': // Deep Blue -> Cyan
          r = 0;
          g = 100 + (progressY * 155);
          b = 200 + (progressX * 55);
          break;
        case 'rainbow': // HSV Spectrum
           const h = (x / width); 
           // Simple Hue to RGB approx
           const i = Math.floor(h * 6);
           const f = h * 6 - i;
           const q = 1 - f;
           switch (i % 6) {
             case 0: r=255; g=f*255; b=0; break;
             case 1: r=q*255; g=255; b=0; break;
             case 2: r=0; g=255; b=f*255; break;
             case 3: r=0; g=q*255; b=255; break;
             case 4: r=f*255; g=0; b=255; break;
             case 5: r=255; g=0; b=q*255; break;
           }
           break;
        case 'sunset': // Indigo -> Pink
           r = 100 + (progressX * 155);
           g = 50 + (progressX * 50);
           b = 150 + (progressY * 50);
           break;
        case 'candy': // Pastel Pink/Blue
           r = 255 - (progressY * 50);
           g = 150 + (progressX * 100);
           b = 255;
           break;
      }
      
      if (char !== ' ') {
         coloredLine += `${rgb(r,g,b)}${char}`;
      } else {
         coloredLine += char; 
      }
    }
    return coloredLine + reset; // Reset at end of line
  }).join('\n');
};
