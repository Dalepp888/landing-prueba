'use client'
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Smartphone, Server } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { GlitchText } from '../ui/glitchText';
import { CyberCard } from '../ui/cyberCard';

// Particle Canvas Component
const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: { x: number; y: number; speed: number; char: string; opacity: number }[] = [];
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const colCount = Math.floor(canvas.width / 20);
      for (let i = 0; i < colCount; i++) {
        particles.push({
          x: i * 20,
          y: Math.random() * canvas.height,
          speed: Math.random() * 2 + 1,
          char: Math.random() > 0.5 ? '1' : '0',
          opacity: Math.random() * 0.5 + 0.1
        });
      }
    };

    const draw = () => {
      ctx.fillStyle = 'rgba(10, 10, 15, 0.3)'; // Trail effect
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.font = '14px monospace';
      
      particles.forEach(p => {
        ctx.fillStyle = `rgba(0, 255, 157, ${p.opacity})`;
        ctx.fillText(p.char, p.x, p.y);
        
        p.y += p.speed;
        if (p.y > canvas.height) {
          p.y = 0;
          p.char = Math.random() > 0.5 ? '1' : '0';
        }
        
        // Randomly change char
        if (Math.random() > 0.95) {
          p.char = Math.random() > 0.5 ? '1' : '0';
        }
      });
      
      requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    draw();

    return () => window.removeEventListener('resize', resize);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-40 pointer-events-none" />;
};

export default function Hero() {
  const [showDemo, setShowDemo] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = "> API de OTP más rápida de Cuba | 99.9% entregas";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <ParticleBackground />
      
      {/* Vignette & Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-[#0A0A0F] z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0A0A0F_100%)] z-0" />

      <div className="container mx-auto px-4 z-10 grid lg:grid-cols-2 gap-12 items-center relative">
        {/* Left Content */}
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="cyber" className="mb-6 animate-pulse-neon">
              🛡️ Seguridad Autenticada en Cuba
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] text-white mb-6">
              Tu código, <br />
              <GlitchText text="tu seguridad," className="text-[#00FF9D]" /> <br />
              nuestro compromiso
            </h1>
            
            <div className="h-8 font-mono text-[#00FF9D]/80 mb-8 flex items-center gap-2">
              <span className="animate-pulse">_</span> {typedText}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button size="lg" variant="primary" glow className="group relative overflow-hidden">
                <span className="relative z-10">🚀 Obtener 5 SMS Gratis</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-lg"></div>
              </Button>
              <Button size="lg" variant="cyber" onClick={() => setShowDemo(true)}>
                <Play className="w-4 h-4 mr-2" /> Ver Demo en Vivo
              </Button>
            </div>

            <div className="flex items-center gap-6 p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm max-w-md">
              <div className="text-3xl font-bold text-white tabular-nums">
                2,457,321
              </div>
              <div className="text-xs text-gray-400 uppercase tracking-widest">
                SMS Enviados <br />
                <span className="text-[#00FF9D]">83 Negocios Activos</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Content - 3D Visual */}
        <div className="relative h-[500px] hidden lg:block perspective-1000">
          <motion.div 
            className="w-full h-full relative"
            animate={{ rotateY: [0, 5, 0, -5, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformStyle: 'preserve-3d' }}
          >
             {/* Central Server Node */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#1A1A24] rounded-xl border border-[#00FF9D] shadow-[0_0_50px_rgba(0,255,157,0.2)] flex items-center justify-center z-20">
               <Server className="w-16 h-16 text-[#00FF9D]" />
               <div className="absolute inset-0 border border-[#00FF9D] rounded-xl animate-ping opacity-20"></div>
             </div>

             {/* Satellite Nodes */}
             {[0, 1, 2].map((i) => (
               <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 w-12 h-12 bg-[#0f0f16] rounded-full border border-gray-700 flex items-center justify-center z-10"
                animate={{ 
                  x: Math.cos(i * 2 + Date.now() / 1000) * 150,
                  y: Math.sin(i * 2 + Date.now() / 1000) * 150,
                }}
                transition={{ duration: 0 }} // Managed by animate prop updates or external tick if needed, simplifying here for CSS approx
                style={{
                  transform: `translate(-50%, -50%) rotate(${i * 120}deg) translateX(180px)`
                }}
               >
                 <Smartphone className="w-5 h-5 text-gray-400" />
               </motion.div>
             ))}

             {/* Connection Lines (Simulated) */}
             <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
               <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="#00FF9D" strokeWidth="1" strokeOpacity="0.2" />
               <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="#00FF9D" strokeWidth="1" strokeOpacity="0.2" />
               <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="#00FF9D" strokeWidth="1" strokeOpacity="0.2" />
               
               {/* Animated Packet */}
               <motion.circle 
                 cx="50%" cy="50%" r="4" fill="#00FF9D"
                 animate={{ cx: ["50%", "80%"], cy: ["50%", "20%"], opacity: [1, 0] }}
                 transition={{ duration: 1.5, repeat: Infinity }}
               />
               <motion.circle 
                 cx="50%" cy="50%" r="4" fill="#00FF9D"
                 animate={{ cx: ["50%", "20%"], cy: ["50%", "20%"], opacity: [1, 0] }}
                 transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
               />
             </svg>

              {/* Floating Card */}
              <motion.div 
                className="absolute bottom-10 right-0 w-64"
                animate={{ y: [0, -20, -20, 0] }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  times: [0, 0.45, 0.55, 1]
                }}
              >
                <CyberCard>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 bg-[#00FF9D] rounded-full animate-pulse"></div>
                    <span className="text-xs text-[#00FF9D] uppercase">Verificado</span>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">3.2s</div>
                  <div className="text-xs text-gray-500">Tiempo promedio de entrega</div>
                </CyberCard>
              </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Demo Modal (Placeholder) */}
      <AnimatePresence>
        {showDemo && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setShowDemo(false)}
          >
            <motion.div 
              initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              className="bg-[#121218] p-8 rounded-2xl max-w-lg w-full border border-[#00FF9D]/30"
              onClick={e => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Demo Interactiva</h3>
              <p className="text-gray-400 mb-6">Simulación de envío de SMS en tiempo real.</p>
              {/* Demo content would go here */}
              <Button onClick={() => setShowDemo(false)} className="w-full">Cerrar</Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </section>
  );
}
