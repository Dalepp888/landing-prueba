"use client";

import React from "react";
import LanguageIcon from "@mui/icons-material/Language";

export default function SystemStatus() {
  return (
    <section className="w-full py-20 px-4 bg-black relative overflow-hidden flex items-center justify-center min-h-[60vh]">
      {/* Background glow effect */}
      <div 
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Globe Icon */}
        <div className="mb-8">
          <LanguageIcon 
            className="text-blue-400"
            sx={{ fontSize: 100 }}
          />
        </div>

        {/* System Status Text */}
        <div className="font-mono text-sm mb-8">
          <p className="text-blue-300 mb-2">SYSTEM: INTERNATIONAL</p>
          <p className="text-blue-300">STATUS: LOADING...</p>
        </div>

        {/* Badge */}
        <div className="mt-4">
          <span className="px-6 py-2 bg-blue-900/30 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold tracking-wider uppercase">
            Próxima Frontera
          </span>
        </div>
      </div>
    </section>
  );
}
