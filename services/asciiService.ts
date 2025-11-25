
import { FONT_LIBRARY } from "../data/fontData";
import { FontKey } from "../types";

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
    //    Some font definitions might have inconsistent line lengths (e.g. " I " vs "I")
    let maxWidth = 0;
    for (let j = 0; j < height; j++) {
      const lineLen = (rawLines[j] || "").length;
      if (lineLen > maxWidth) maxWidth = lineLen;
    }
    
    // Ensure that if it's a space, it has a minimum width relative to the font
    if (char === ' ' && maxWidth === 0) {
        maxWidth = 4; // Fallback width for empty spaces if defined as ""
    }

    // 2. Append each line, padding with spaces to match maxWidth
    for (let lineIndex = 0; lineIndex < height; lineIndex++) {
      const rawLine = rawLines[lineIndex] || "";
      // Pad end to make this character a perfect rectangle
      const paddedSegment = rawLine.padEnd(maxWidth, " ");
      
      lines[lineIndex] += paddedSegment;
      
      // Add gap if not the last character
      if (gap > 0 && i < cleanText.length - 1) {
        lines[lineIndex] += " ".repeat(gap);
      }
    }
  }

  return lines.join("\n");
};
