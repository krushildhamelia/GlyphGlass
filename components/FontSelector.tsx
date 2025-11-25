import React from 'react';
import { FONT_STYLES } from '../constants';
import { FontStyle } from '../types';

interface FontSelectorProps {
  selectedFontId: string;
  onSelect: (font: FontStyle) => void;
  disabled?: boolean;
}

const FontSelector: React.FC<FontSelectorProps> = ({ selectedFontId, onSelect, disabled }) => {
  return (
    <div className="flex flex-col gap-2 w-full pr-2 pb-10">
      {FONT_STYLES.map((font) => {
        const isSelected = selectedFontId === font.id;
        
        return (
          <button
            key={font.id}
            onClick={() => !disabled && onSelect(font)}
            disabled={disabled}
            className={`
              relative group flex items-center justify-between p-3 rounded-xl transition-all duration-300 border text-left
              ${isSelected 
                ? 'bg-gradient-to-r from-fuchsia-500/20 to-purple-600/20 border-fuchsia-500/50 shadow-[0_0_15px_rgba(217,70,239,0.2)] translate-x-1' 
                : 'bg-indigo-950/20 border-white/5 hover:bg-indigo-900/40 hover:border-white/10'}
              ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
            `}
          >
            <div className="flex items-center gap-3">
              <div className={`
                flex items-center justify-center w-9 h-9 rounded-lg font-mono font-bold text-lg transition-colors
                ${isSelected ? 'bg-fuchsia-500 text-white shadow-lg shadow-fuchsia-500/40' : 'bg-white/5 text-indigo-300 group-hover:bg-white/10 group-hover:text-white'}
              `}>
                {font.preview}
              </div>
              <div>
                <h3 className={`text-sm font-bold transition-colors ${isSelected ? 'text-fuchsia-200' : 'text-indigo-100 group-hover:text-white'}`}>
                  {font.name}
                </h3>
                <p className={`text-[10px] uppercase tracking-wider transition-colors ${isSelected ? 'text-fuchsia-300/70' : 'text-indigo-400/70'}`}>{font.description}</p>
              </div>
            </div>
            
            {isSelected && (
              <div className="w-2 h-2 rounded-full bg-fuchsia-400 shadow-[0_0_8px_rgba(232,121,249,0.8)] animate-pulse" />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default FontSelector;