'use client'
import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';
import { CyberCard } from '../ui/cyberCard';

const clients = [
  { name: "CriptoCuba", category: "Fintech", sms: "450k+" },
  { name: "TiendaHabana", category: "E-commerce", sms: "120k+" },
  { name: "PayFacil", category: "Fintech", sms: "890k+" },
  { name: "EduOnline", category: "Education", sms: "50k+" },
  { name: "SaludDigital", category: "Health", sms: "410k+" },
  { name: "CubaViajes", category: "Tourism", sms: "230k+" },
];

const testimonials = [
  {
    quote: "Pasamos de tener un 15% de fallos con proveedores internacionales a casi cero incidencias. El soporte local es un gran plus.",
    author: "Javier Díaz",
    role: "CTO, CriptoCuba",
    avatar: "JD"
  },
  {
    quote: "La integración fue ridículamente fácil. En una tarde ya teníamos todo el sistema de login migrado.",
    author: "Elena Roque",
    role: "Lead Dev, PayFacil",
    avatar: "ER"
  }
];

export default function SocialProof() {
  return (
    <section className="py-24 bg-[#0A0A0F] relative">
      <div className="container mx-auto px-4">
        
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Ellos ya protegen sus transacciones</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {clients.map((client, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-[#121218] border border-[#1A1A24] p-4 rounded-xl text-center group hover:border-[#00FF9D]/30 transition-colors"
              >
                <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center font-bold text-gray-500 group-hover:text-white transition-colors">
                  {client.name.substring(0, 1)}
                </div>
                <div className="font-bold text-gray-300 text-sm mb-1">{client.name}</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-2">{client.category}</div>
                <div className="text-xs text-[#00FF9D] font-mono">{client.sms} SMS</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00FF9D]/5 to-blue-500/5 blur-3xl rounded-full opacity-20" />
          
          <div className="grid md:grid-cols-2 gap-8 relative z-10">
            {testimonials.map((test, i) => (
              <CyberCard key={i} className="bg-[#0f0f16]/80">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-[#00FF9D]/10" />
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 text-yellow-500 fill-yellow-500" />)}
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6 italic">"{test.quote}"</p>
                <div className="flex items-center gap-4 border-t border-white/5 pt-4">
                  <div className="w-10 h-10 rounded-full bg-[#1A1A24] border border-[#2A2A35] flex items-center justify-center text-white font-bold">
                    {test.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-white">{test.author}</div>
                    <div className="text-xs text-[#00FF9D]">{test.role}</div>
                  </div>
                </div>
              </CyberCard>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}