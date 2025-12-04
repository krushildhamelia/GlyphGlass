
export type FontKey = 
  | 'standard' 
  | 'blocks' 
  | 'slick' 
  | 'tiny' 
  | 'grid' 
  | 'shade' 
  | 'alpha' 
  | 'retro' 
  | 'comic' 
  | 'sleek' 
  | 'heavy'
  | 'modern'
  | 'bubble'
  | 'stars'
  | '3d'
  | 'isometric'
  | 'starwars'
  | 'bloody'
  | 'graffiti'
  | 'heavy-3d'
  | 'lines'
  | 'digital'
  | 'binary'
  | 'hex'
  | 'octal'
  | 'slash'
  | 'runes'
  | 'dots'
  | 'wide'
  | 'tall'
  | 'box'
  | 'frame'
  | 'spaced'
  | 'compact'
  | 'mirror'
  | 'bwd'
  | 'upside'
  | 'arrow'
  | 'currency'
  | 'math';

export interface FontStyle {
  id: FontKey;
  name: string;
  description: string;
  preview: string;
  complexity: 'Low' | 'Medium' | 'High';
}

export type ColorThemeId = 'plain' | 'neon' | 'fire' | 'matrix' | 'ocean' | 'rainbow' | 'sunset' | 'candy';

export interface ColorTheme {
  id: ColorThemeId;
  name: string;
  gradient: string; // Tailwind class for Web Preview
  description: string;
}

export interface ToastMessage {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}
