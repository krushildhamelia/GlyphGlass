import React, { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
  onClick?: () => void;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', interactive = false, onClick }) => {
  const interactiveClasses = interactive 
    ? "cursor-pointer hover:bg-white/10 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300" 
    : "";

  return (
    <div 
      onClick={onClick}
      className={`
        relative backdrop-blur-xl bg-indigo-950/20
        border border-white/10
        rounded-2xl shadow-xl 
        overflow-hidden
        ${interactiveClasses} 
        ${className}
      `}
    >
      {/* Subtle colorful glow gradient at top */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
      {children}
    </div>
  );
};

export default GlassCard;