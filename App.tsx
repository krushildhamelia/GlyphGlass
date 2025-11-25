import React, { useState, useEffect, useCallback, useRef } from 'react';
import { FONT_STYLES } from './constants';
import { FontStyle } from './types';
import { generateAsciiArtLocal } from './services/asciiService';
import Background from './components/Background';
import GlassCard from './components/GlassCard';
import FontSelector from './components/FontSelector';
import { Copy, Sparkles, Wand2, Terminal, AlignLeft, Keyboard, Zap } from 'lucide-react';

const App: React.FC = () => {
  // State
  const [inputText, setInputText] = useState<string>('NEON');
  const [selectedFont, setSelectedFont] = useState<FontStyle>(FONT_STYLES[0]);
  const [outputAscii, setOutputAscii] = useState<string>('');
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  
  // Initial load
  useEffect(() => {
    const art = generateAsciiArtLocal('NEON', 'standard');
    setOutputAscii(art);
  }, []);

  // Handlers
  const handleGenerate = useCallback(() => {
    if (!inputText.trim()) return;

    setIsAnimating(true);
    setCopied(false);

    setTimeout(() => {
      const art = generateAsciiArtLocal(inputText, selectedFont.id);
      setOutputAscii(art);
      setIsAnimating(false);
    }, 200);

  }, [inputText, selectedFont]);

  // Auto-generate when font changes or text changes
  useEffect(() => {
    if (inputText.trim()) {
       const art = generateAsciiArtLocal(inputText, selectedFont.id);
       setOutputAscii(art);
    }
  }, [selectedFont, inputText]);

  const handleCopy = useCallback(async () => {
    if (!outputAscii) return;
    try {
      await navigator.clipboard.writeText(outputAscii);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  }, [outputAscii]);

  return (
    <main className="relative min-h-screen h-screen overflow-hidden text-indigo-50 font-sans selection:bg-fuchsia-500/30 selection:text-fuchsia-200">
      <Background />
      
      <div className="h-full flex flex-col relative z-10 max-w-[1600px] mx-auto p-4 md:p-6 gap-6">
        
        {/* Header */}
        <header className="flex-none flex items-center justify-between bg-indigo-950/30 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-lg shadow-black/20">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center p-2.5 bg-gradient-to-br from-fuchsia-600 to-purple-600 rounded-xl shadow-lg shadow-purple-500/20 border border-white/10">
               <Terminal className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                GlyphGlass <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded-full border border-cyan-500/20 tracking-wide font-bold">V 2.0</span>
              </h1>
              <p className="text-xs text-indigo-300 font-medium">Next-Gen ASCII Generator</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6 text-sm text-indigo-300/80">
             <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/5">
               <Keyboard className="w-4 h-4 text-fuchsia-400" />
               <span>{inputText.length}/20 Chars</span>
             </div>
             <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/5">
               <AlignLeft className="w-4 h-4 text-cyan-400" />
               <span>{FONT_STYLES.length} Styles</span>
             </div>
          </div>
        </header>

        {/* Dashboard Layout */}
        <div className="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* LEFT SIDEBAR: Controls */}
          <div className="md:col-span-4 lg:col-span-3 flex flex-col gap-6 min-h-0 h-full">
            
            {/* Input Section */}
            <div className="flex-none">
              <GlassCard className="p-1 group focus-within:ring-2 ring-fuchsia-500/50 transition-all duration-300">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="TYPE HERE..."
                  maxLength={20}
                  className="w-full bg-transparent border-none text-xl p-5 placeholder:text-indigo-500/50 focus:outline-none focus:ring-0 font-mono text-white uppercase text-center font-bold tracking-wider"
                />
                <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent opacity-50 group-focus-within:opacity-100 transition-opacity" />
              </GlassCard>
            </div>

            {/* Scrollable Font List */}
            <div className="flex-1 min-h-0 flex flex-col bg-indigo-950/20 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden shadow-xl">
               <div className="p-4 border-b border-white/5 bg-white/5 backdrop-blur-sm sticky top-0 z-10 flex items-center justify-between">
                 <div className="flex items-center gap-2 text-indigo-200">
                   <Zap className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                   <h2 className="text-xs font-bold uppercase tracking-widest">Select Style</h2>
                 </div>
                 <div className="text-[10px] text-indigo-400 font-mono">SCROLL ▼</div>
               </div>
               
               <div className="flex-1 overflow-y-auto p-3 scrollbar-thin scrollbar-thumb-fuchsia-500/20 hover:scrollbar-thumb-fuchsia-500/40">
                 <FontSelector 
                    selectedFontId={selectedFont.id} 
                    onSelect={setSelectedFont}
                    disabled={false}
                 />
               </div>
            </div>
          </div>

          {/* MAIN AREA: Output */}
          <div className="md:col-span-8 lg:col-span-9 h-full min-h-0 flex flex-col">
            <GlassCard className="flex-1 flex flex-col relative w-full h-full border-white/10">
               
               {/* Toolbar */}
               <div className="flex-none p-4 flex items-center justify-between border-b border-white/5 bg-white/5 backdrop-blur-sm z-10">
                 <div className="flex items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-indigo-300 flex items-center gap-2">
                      <Sparkles className="w-3 h-3 text-cyan-400" />
                      Live Preview
                    </span>
                    {copied && (
                      <span className="text-[10px] bg-green-500/20 text-green-400 px-3 py-0.5 rounded-full border border-green-500/20 animate-pulse font-bold flex items-center gap-1">
                        COPIED!
                      </span>
                    )}
                 </div>
                 <button
                   onClick={handleCopy}
                   className="group relative flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold text-sm rounded-xl transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] active:scale-95"
                 >
                   <Copy className="w-4 h-4" />
                   <span>Copy ASCII</span>
                   <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                 </button>
               </div>

               {/* Output Stage */}
               <div className="flex-1 overflow-auto p-8 flex items-center justify-center bg-black/20 relative">
                  {/* Grid lines in background */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

                  {isAnimating ? (
                    <div className="flex flex-col items-center gap-4 text-fuchsia-400 animate-pulse opacity-50">
                       <Wand2 className="w-12 h-12 animate-spin" />
                    </div>
                  ) : (
                    <div className="relative group w-full flex justify-center perspective-1000">
                       {/* Multiple Glow layers */}
                       <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-fuchsia-500/10 to-cyan-500/10 blur-3xl rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />
                       
                       <pre 
                        className="relative z-10 font-mono text-xs sm:text-sm md:text-base lg:text-lg leading-none text-transparent bg-clip-text bg-gradient-to-r from-cyan-100 via-white to-fuchsia-100 whitespace-pre text-center select-all cursor-text drop-shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-300"
                        style={{ fontFamily: '"JetBrains Mono", monospace' }}
                      >
                        {outputAscii || "..."}
                      </pre>
                    </div>
                  )}
               </div>
               
               {/* Info Footer */}
               <div className="flex-none p-3 border-t border-white/5 text-center bg-black/20">
                 <p className="text-[10px] text-indigo-400/60 font-mono">
                   RENDERED WITH GLYPHGLASS ENGINE • {selectedFont.name.toUpperCase()}
                 </p>
               </div>
            </GlassCard>
          </div>

        </div>
      </div>
    </main>
  );
};

export default App;