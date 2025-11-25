import { GoogleGenAI } from "@google/genai";
import { FontStyle } from "../types";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key is missing in environment variables");
  }
  return new GoogleGenAI({ apiKey });
};

export const generateAsciiArt = async (text: string, style: FontStyle): Promise<string> => {
  try {
    const ai = getClient();
    
    // We use gemini-2.5-flash for speed and reasonably good spatial reasoning for ASCII
    const model = "gemini-2.5-flash";

    const prompt = `
      You are an expert ASCII art generator engine. 
      Your task is to convert the input text "${text}" into high-quality ASCII art using the "${style.name}" style (${style.description}).
      
      Rules:
      1. Output ONLY the ASCII art inside a code block.
      2. Do not include any introductory text, explanations, or conclusions.
      3. Ensure the width is suitable for a standard wide monitor (max 100-120 chars wide).
      4. If the text is too long, break it into multiple lines or stack it logically.
      5. The output must be pure text characters suitable for a <pre> tag.
      6. Be creative but ensure legibility.
    `;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
    });

    const output = response.text;
    
    // Clean up the response to extract just the content inside the code block if present
    const codeBlockRegex = /```(?:[a-zA-Z]*)\n([\s\S]*?)```/;
    const match = output?.match(codeBlockRegex);
    
    if (match && match[1]) {
      return match[1].trim(); // Return the content inside the backticks
    }
    
    // If no code block, return the raw text (trimmed of excess whitespace)
    return output?.trim() || "";
  } catch (error) {
    console.error("Error generating ASCII art:", error);
    throw error;
  }
};