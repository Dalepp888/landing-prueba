import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

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