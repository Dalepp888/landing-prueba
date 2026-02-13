"use client";
import LanguageIcon from "@mui/icons-material/Language";
import React from 'react';
import { motion } from 'motion/react';
import { Globe, Plane, Map } from 'lucide-react';
import { Button } from '../ui/design-system';

export default function RadarSection() {
  return (
    <section className="w-full min-h-screen bg-[#050505] relative overflow-hidden flex items-center justify-center">
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px] flex items-center justify-center">
          <div 
            className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/30"
            style={{
              animation: 'spin-slow 20s linear infinite'
            }}
          />
          
          <div 
            className="absolute inset-4 rounded-full border-2 border-dashed border-purple-950"
            style={{
              animation: 'spin-reverse 15s linear infinite'
            }}
          />

          <div 
            className="absolute w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full flex flex-col items-center justify-center"
            style={{
              background: 'radial-gradient(circle, rgba(120, 70, 230, 0.35) 0%, rgba(100, 60, 220, 0.15) 50%, transparent 70%)',
              animation: 'pulse-glow 3s ease-in-out infinite'
            }}
          >
            <LanguageIcon 
              className="text-blue-400 mb-3"
              sx={{ fontSize: 64 }}
            />
            
            <div className="text-center font-mono text-xs">
              <p className="text-blue-300 mb-0.5">SYSTEM: INTERNATIONAL</p>
              <p className="text-blue-300">STATUS: LOADING...</p>
            </div>
          </div>
          
          <div 
            className="absolute w-72 h-72 rounded-full -z-10"
            style={{
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
              filter: 'blur(40px)',
              animation: 'pulse-glow 3s ease-in-out infinite'
            }}
          />
        </div>

        <div className="mt-10">
          <span className="px-5 py-2 bg-blue-900/30 border border-blue-500/30 rounded-full text-blue-400 text-xs font-semibold tracking-wider uppercase">
            Próxima Frontera
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
        }
      `}</style>
    </section >
  );
}
