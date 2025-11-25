import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0a0118]">
      {/* Gradient Orbs - Vibrant Neon Palette */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-fuchsia-600/30 blur-[120px] animate-float mix-blend-screen" style={{ animationDelay: '0s' }}></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-600/30 blur-[120px] animate-float mix-blend-screen" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-[40%] left-[30%] w-[40%] h-[40%] rounded-full bg-violet-600/20 blur-[100px] animate-float mix-blend-screen" style={{ animationDelay: '4s' }}></div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      
      {/* Radial fade to keep center readable */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0a0118]/50 to-[#0a0118]"></div>
    </div>
  );
};

export default Background;