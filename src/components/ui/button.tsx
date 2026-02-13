import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion } from 'motion/react';
import { HTMLMotionProps } from "framer-motion";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, 'children'> {
    children?: React.ReactNode
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'cyber'
    size?: 'sm' | 'md' | 'lg'
    glow?: boolean
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
                {variant === 'cyber' && (
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                )}
                <span className="relative z-10 flex items-center gap-2">{children}</span>
            </motion.button>
        );
    }
);
Button.displayName = "Button";