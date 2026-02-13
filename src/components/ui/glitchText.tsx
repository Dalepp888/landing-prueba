import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

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