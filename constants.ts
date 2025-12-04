
import { FontStyle, ColorTheme } from './types';

export const COLOR_THEMES: ColorTheme[] = [
  { 
    id: 'plain', 
    name: 'Plain', 
    gradient: 'from-indigo-100 via-white to-indigo-100',
    description: 'Standard White'
  },
  { 
    id: 'neon', 
    name: 'Cyber', 
    gradient: 'from-cyan-400 via-fuchsia-400 to-purple-400',
    description: 'Cyan & Purple'
  },
  { 
    id: 'fire', 
    name: 'Inferno', 
    gradient: 'from-yellow-400 via-orange-500 to-red-600',
    description: 'Red & Yellow'
  },
  { 
    id: 'matrix', 
    name: 'Hacker', 
    gradient: 'from-green-400 via-emerald-500 to-green-600',
    description: 'Matrix Green'
  },
  { 
    id: 'ocean', 
    name: 'Deep Sea', 
    gradient: 'from-cyan-300 via-blue-500 to-indigo-600',
    description: 'Blue Depths'
  },
  { 
    id: 'rainbow', 
    name: 'Prism', 
    gradient: 'from-red-400 via-green-400 to-blue-400',
    description: 'Full Spectrum'
  },
  { 
    id: 'sunset', 
    name: 'Sunset', 
    gradient: 'from-indigo-400 via-purple-400 to-pink-400',
    description: 'Dusk Vibes'
  },
  { 
    id: 'candy', 
    name: 'Cotton', 
    gradient: 'from-pink-300 via-purple-300 to-cyan-300',
    description: 'Pastel Dreams'
  },
];

export const FONT_STYLES: FontStyle[] = [
  { id: '3d', name: 'ANSI Shadow', description: 'Real 3D', preview: '█', complexity: 'High' },
  { id: 'bloody', name: 'Bloody', description: 'Dripping', preview: '🩸', complexity: 'Medium' },
  { id: 'graffiti', name: 'Graffiti', description: 'Street Art', preview: '⚡', complexity: 'High' },
  { id: 'starwars', name: 'Galactic', description: 'Far Away', preview: '★', complexity: 'High' },
  { id: 'isometric', name: 'Isometric', description: 'Cubes', preview: '🧊', complexity: 'High' },
  { id: 'heavy-3d', name: 'Heavy 3D', description: 'Extruded', preview: 'H', complexity: 'High' },
  { id: 'standard', name: 'Standard', description: 'Classic ASCII', preview: 'A', complexity: 'Medium' },
  { id: 'blocks', name: 'Solid Block', description: 'Heavy Density', preview: '█', complexity: 'Low' },
  { id: 'modern', name: 'Modern', description: 'Double Line', preview: 'M', complexity: 'High' },
  { id: 'bubble', name: 'Bubble', description: 'Rounded', preview: 'B', complexity: 'Medium' },
  { id: 'alpha', name: 'Handwritten', description: 'Organic', preview: '~', complexity: 'Medium' },
  { id: 'shade', name: 'Shaded', description: 'Textured', preview: '░', complexity: 'High' },
  { id: 'grid', name: 'Dot Matrix', description: 'Retro PC', preview: ':', complexity: 'Medium' },
  { id: 'tiny', name: 'Micro', description: 'Smallest', preview: 't', complexity: 'Low' },
  { id: 'binary', name: 'Binary', description: '0s and 1s', preview: '01', complexity: 'Low' },
  { id: 'hex', name: 'Hex code', description: 'Hexadecimal', preview: 'x', complexity: 'Low' },
  { id: 'runes', name: 'Runes', description: 'Ancient', preview: 'ᚠ', complexity: 'Medium' },
  { id: 'box', name: 'Boxed', description: 'In a box', preview: '[]', complexity: 'Medium' },
  { id: 'frame', name: 'Framed', description: 'Double Frame', preview: '╔╗', complexity: 'High' },
  { id: 'slash', name: 'Slash', description: 'Slanted', preview: '/', complexity: 'Low' },
  { id: 'upside', name: 'Upside Down', description: 'Inverted', preview: '∀', complexity: 'Medium' },
  { id: 'math', name: 'Math', description: 'Symbols', preview: '∑', complexity: 'Medium' },
  { id: 'dots', name: 'Dots', description: 'Decorated', preview: '..', complexity: 'Low' },
  { id: 'arrow', name: 'Arrows', description: 'Pointing', preview: '>>', complexity: 'Low' },
  { id: 'stars', name: 'Stars', description: 'Constellation', preview: '*', complexity: 'High' },
  { id: 'currency', name: 'Money', description: 'Rich', preview: '$', complexity: 'Low' },
  { id: 'octal', name: 'Octal', description: 'Base 8', preview: '8', complexity: 'Low' },
  { id: 'wide', name: 'Wide', description: 'Spaced Out', preview: 'W', complexity: 'Medium' },
  { id: 'spaced', name: 'Spacing', description: 'Airy', preview: '_', complexity: 'Low' },
  { id: 'heavy', name: 'Heavy', description: 'Bold', preview: 'H', complexity: 'Low' },
  { id: 'slick', name: 'Slick', description: 'Tight', preview: 'S', complexity: 'Medium' },
  { id: 'retro', name: 'Retro', description: '8-bit', preview: 'R', complexity: 'Low' },
  { id: 'comic', name: 'Comic', description: 'Playful', preview: 'C', complexity: 'Medium' },
  { id: 'sleek', name: 'Sleek', description: 'Futura', preview: 'F', complexity: 'High' },
  { id: 'lines', name: 'Plain', description: 'One Line', preview: '-', complexity: 'Low' },
  { id: 'compact', name: 'Compact', description: 'Dense', preview: '|', complexity: 'Medium' },
  { id: 'mirror', name: 'Mirror', description: 'Reflected', preview: 'M', complexity: 'Low' },
];

export const MOCK_ASCII_PREVIEW = `
  ________  .__               .__      ________.__                         
 /  _____/  |  |   ___.__.    |  |__  /  _____/|  | _____    ______ ______ 
/   \\  ___  |  |  <   |  |    |  |  \\/   \\  ___|  | \\__  \\  /  ___//  ___/ 
\\    \\_\\  \\ |  |__ \\___  |    |   Y  \\    \\_\\  \\  |__/ __ \\_\\___ \\ \\___ \\  
 \\______  / |____/ / ____| /\\ |___|  /\\______  /____(____  /____  >____  > 
        \\/         \\/      \\/      \\/        \\/          \\/     \\/     \\/  
`;
