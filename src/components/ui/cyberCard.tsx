import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

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