"use client";
import LanguageIcon from "@mui/icons-material/Language";

export default function RadarSection() {
  return (
    <section className="w-full min-h-screen bg-[#050505] relative overflow-hidden flex items-center justify-center">
      {/* Stars Background */}
      <div className="absolute inset-0">
        {/* Generar estrellas aleatorias */}
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Main Container */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Radar Circles Container */}
        <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px] flex items-center justify-center">
          {/* Outer rotating circle */}
          <div 
            className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/30"
            style={{
              animation: 'spin-slow 20s linear infinite'
            }}
          />
          
          {/* Inner rotating circle (opposite direction) */}
          <div 
            className="absolute inset-4 rounded-full border-2 border-dashed border-blue-400/20"
            style={{
              animation: 'spin-reverse 15s linear infinite'
            }}
          />

          {/* Central glowing orb */}
          <div 
            className="absolute w-64 h-64 rounded-full flex flex-col items-center justify-center"
            style={{
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 70%)',
              animation: 'pulse-glow 3s ease-in-out infinite'
            }}
          >
            {/* Globe Icon */}
            <LanguageIcon 
              className="text-blue-400 mb-4"
              sx={{ fontSize: 80 }}
            />
            
            {/* System Text */}
            <div className="text-center font-mono text-sm">
              <p className="text-blue-300 mb-1">SYSTEM: INTERNATIONAL</p>
              <p className="text-blue-300">STATUS: LOADING...</p>
            </div>
          </div>

          {/* Glow effect behind */}
          <div 
            className="absolute w-96 h-96 rounded-full -z-10"
            style={{
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
              filter: 'blur(40px)',
              animation: 'pulse-glow 3s ease-in-out infinite'
            }}
          />
        </div>

        {/* Bottom Badge */}
        <div className="mt-12">
          <span className="px-6 py-2 bg-blue-900/30 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold tracking-wider uppercase">
            Próxima Frontera
          </span>
        </div>
      </div>

      {/* CSS Animations */}
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
    </section>
  );
}
