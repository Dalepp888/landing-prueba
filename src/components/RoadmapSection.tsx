"use client";
import { motion } from 'motion/react';
import { timeline } from '../constants/roadmap';

export default function VisionSection() {
  return (
    <section className="py-24 bg-[#050508] border-t border-[#1A1A24]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">El futuro de la autenticación</h2>
          <p className="text-gray-400">No solo enviamos SMS, construimos la confianza digital del mañana.</p>
        </div>

        <div className="relative">
          <div className="absolute top-12 left-0 w-full h-0.5 bg-[#1A1A24] hidden md:block">
            <div className="h-full bg-gradient-to-r from-[#00FF9D] to-transparent w-1/3" />
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {timeline.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className={`group ${item.active ? 'opacity-100' : 'opacity-50 hover:opacity-100 transition-opacity'}`}
              >
                <div className={`w-24 h-24 mx-auto mb-6 rounded-full border-4 flex items-center justify-center bg-[#050508] transition-colors relative ${item.active ? 'border-[#00FF9D] text-[#00FF9D]' : 'border-[#1A1A24] text-gray-600 group-hover:border-gray-500'}`}>
                  {item.active && <div className="absolute inset-0 bg-[#00FF9D]/20 rounded-full animate-ping" />}
                  <item.icon className="w-8 h-8" />
                </div>
                
                <div className="text-center">
                  <div className={`text-xl font-bold mb-2 ${item.active ? 'text-[#00FF9D]' : 'text-white'}`}>{item.year}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}