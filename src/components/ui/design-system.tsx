import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion } from 'motion/react';
import { HTMLMotionProps } from "framer-motion";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Primitives ---

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'cyber';
  size?: 'sm' | 'md' | 'lg';
  glow?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', glow = false, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group";
    
    const variants = {
      primary: "bg-[#00FF9D] text-black hover:bg-[#00D47E] font-bold tracking-wide",
      secondary: "bg-[#1A1A24] text-white hover:bg-[#2A2A35] border border-[#2A2A35]",
      outline: "bg-transparent border border-[#00FF9D] text-[#00FF9D] hover:bg-[#00FF9D]/10",
      ghost: "bg-transparent text-gray-400 hover:text-white hover:bg-white/5",
      cyber: "bg-black border border-[#00FF9D] text-[#00FF9D] hover:bg-[#00FF9D] hover:text-black hover:shadow-[0_0_20px_#00FF9D] uppercase font-mono tracking-widest",
    };

    const sizes = {
      sm: "h-8 px-3 text-xs",
      md: "h-10 px-6 text-sm",
      lg: "h-14 px-8 text-base",
    };

    const glowStyle = glow ? "shadow-[0_0_20px_rgba(0,255,157,0.4)] hover:shadow-[0_0_35px_rgba(0,255,157,0.6)]" : "";

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.96 }}
        className={cn(baseStyles, variants[variant], sizes[size], glowStyle, className)}
        {...props}
      >
        {/* Cyberpunk Scanline Effect for 'cyber' variant */}
        {variant === 'cyber' && (
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
        )}
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </motion.button>
    );
  }
);
Button.displayName = "Button";

export const Card = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("bg-[#121218] border border-[#1A1A24] rounded-xl p-6 relative overflow-hidden", className)} {...props}>
    {children}
  </div>
);

// --- Cyberpunk Special Components ---

export const CyberCard = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("bg-[#0f0f16]/90 backdrop-blur-md border border-[#00FF9D]/20 p-6 relative group overflow-hidden rounded-xl hover:border-[#00FF9D]/50 transition-colors duration-500", className)} {...props}>
    {/* Corner accents */}
    <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#00FF9D] opacity-50 group-hover:opacity-100 transition-opacity" />
    <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#00FF9D] opacity-50 group-hover:opacity-100 transition-opacity" />
    <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#00FF9D] opacity-50 group-hover:opacity-100 transition-opacity" />
    <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#00FF9D] opacity-50 group-hover:opacity-100 transition-opacity" />
    
    {/* Scanline background */}
    <div className="absolute inset-0 bg-[linear-gradient(transparent_2px,#00FF9D_2px)] bg-[size:100%_4px] opacity-[0.03] pointer-events-none" />
    
    <div className="relative z-10">{children}</div>
  </div>
);

export const GlitchText = ({ text, className }: { text: string, className?: string }) => {
  return (
    <div className={cn("relative inline-block group", className)}>
      <span className="relative z-10">{text}</span>
      <span className="absolute top-0 left-0 -ml-[2px] text-[#00FF9D] opacity-0 group-hover:opacity-70 group-hover:animate-glitch-1 hidden sm:block">
        {text}
      </span>
      <span className="absolute top-0 left-0 ml-[2px] text-red-500 opacity-0 group-hover:opacity-70 group-hover:animate-glitch-2 hidden sm:block">
        {text}
      </span>
    </div>
  );
};

export const Badge = ({ className, variant = 'default', children, ...props }: React.HTMLAttributes<HTMLSpanElement> & { variant?: 'default' | 'success' | 'warning' | 'outline' | 'cyber' }) => {
  const variants = {
    default: "bg-[#1A1A24] text-gray-300",
    success: "bg-[#00FF9D]/10 text-[#00FF9D]",
    warning: "bg-amber-500/10 text-amber-500",
    outline: "border border-[#00FF9D]/30 text-[#00FF9D]",
    cyber: "bg-[#00FF9D] text-black font-bold uppercase tracking-wider text-[10px] shadow-[0_0_10px_#00FF9D]",
  };
  
  return (
    <span className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium", variants[variant], className)} {...props}>
      {children}
    </span>
  );
};
