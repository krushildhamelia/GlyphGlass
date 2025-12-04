
import React from 'react';
import { COLOR_THEMES } from '../constants';
import { ColorTheme } from '../types';
import { Palette } from 'lucide-react';

interface ColorSelectorProps {
  selectedThemeId: string;
  onSelect: (theme: ColorTheme) => void;
}

const ColorSelector: React.FC<ColorSelectorProps> = ({ selectedThemeId, onSelect }) => {
  return (
    <div className="flex flex-col gap-3">
       <div className="flex items-center gap-2 text-indigo-200 px-1">
         <Palette className="w-4 h-4 text-fuchsia-400" />
         <h2 className="text-xs font-bold uppercase tracking-widest">Terminal Color</h2>
       </div>
       
       <div className="grid grid-cols-4 gap-3 p-1">
         {COLOR_THEMES.map((theme) => {
           const isSelected = selectedThemeId === theme.id;
           return (
             <button
               key={theme.id}
               onClick={() => onSelect(theme)}
               className="group relative flex flex-col items-center gap-2"
               title={theme.description}
             >
               <div className={`
                 w-10 h-10 rounded-full transition-all duration-300 flex items-center justify-center
                 bg-gradient-to-br ${theme.gradient}
                 ${isSelected ? 'scale-110 ring-2 ring-white shadow-[0_0_15px_rgba(255,255,255,0.4)]' : 'opacity-70 hover:opacity-100 hover:scale-105'}
               `}>
                 {isSelected && <div className="w-2 h-2 bg-white rounded-full shadow-sm" />}
               </div>
               <span className={`text-[9px] uppercase font-bold tracking-wide transition-colors ${isSelected ? 'text-white' : 'text-indigo-400 group-hover:text-indigo-200'}`}>
                 {theme.name}
               </span>
             </button>
           );
         })}
       </div>
    </div>
  );
};

export default ColorSelector;
