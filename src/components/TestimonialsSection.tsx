"use client";

import StarIcon from "@mui/icons-material/Star";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

interface Client {
  id: string;
  name: string;
  category: string;
  smsCount: string;
  initial: string;
}

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  initials: string;
}

const clients: Client[] = [
  { id: "1", name: "CriptoCuba", category: "FINTECH", smsCount: "450k+", initial: "C" },
  { id: "2", name: "TiendaHavana", category: "E-COMMERCE", smsCount: "120k+", initial: "T" },
  { id: "3", name: "PayFacil", category: "FINTECH", smsCount: "890k+", initial: "P" },
  { id: "4", name: "EduOnline", category: "EDUCATION", smsCount: "50k+", initial: "E" },
  { id: "5", name: "SaludDigital", category: "HEALTH", smsCount: "410k+", initial: "S" },
  { id: "6", name: "CubaViajes", category: "TOURISM", smsCount: "230k+", initial: "C" },
];

const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "Pasamos de tener un 15% de fallos con proveedores internacionales a casi cero incidencias. El soporte local es un gran plus.",
    author: "Javier Díaz",
    role: "CTO",
    company: "CriptoCuba",
    initials: "JD",
  },
  {
    id: "2",
    quote: "La integración fue ridículamente fácil. En una tarde ya teníamos todo el sistema de login migrado.",
    author: "Elena Roque",
    role: "Lead Dev",
    company: "PayFacil",
    initials: "ER",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full py-20 px-4 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Ellos ya protegen sus transacciones
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {clients.map((client) => (
            <div
              key={client.id}
              className="bg-[#111111] border border-gray-900 rounded-xl p-4 text-center hover:border-[#00FF9D]/30 hover:-translate-y-2 hover:shadow-lg transition-all duration-150"
            >
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{
                  background: 'radial-gradient(circle at 30% 30%, #2a2a3a 0%, #0a0a0f 50%, #050505 100%)',
                  boxShadow: 'inset -2px -2px 6px rgba(0,0,0,0.8), inset 2px 2px 6px rgba(255,255,255,0.05), 0 2px 4px rgba(0,0,0,0.5)'
                }}
              >
                <span className="text-gray-400 font-semibold text-lg">
                  {client.initial}
                </span>
              </div>

              <h3 className="text-white font-semibold mb-1">{client.name}</h3>

              <p className="text-gray-500 text-xs uppercase tracking-wider mb-3">
                {client.category}
              </p>

              <p className="text-[#00FF9D] font-semibold text-sm">{client.smsCount} SMS</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#050505] border-[0.1px] border-[#00FF9D]/30 rounded-xl p-8 hover:border-[#00FF9D]/50 transition-all duration-300 relative overflow-hidden"
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 4px, rgba(0, 255, 157, 0.05) 4px, rgba(0, 255, 157, 0.05) 5px)',
              }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className="text-yellow-500"
                    sx={{ fontSize: 20 }}
                  />
                ))}
              </div>

              <div className="relative mb-8">
                <FormatQuoteIcon
                  className="text-emerald-500/20 absolute -top-2 -right-2 transform rotate-180"
                  sx={{ fontSize: 48 }}
                />
                
                <p className="text-gray-300 text-base leading-relaxed relative z-10">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-800">
                <div className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-gray-700 flex items-center justify-center">
                  <span className="text-gray-400 font-semibold">
                    {testimonial.initials}
                  </span>
                </div>

                <div>
                  <h4 className="text-white font-semibold">{testimonial.author}</h4>
                  <p className="text-[#00FF9D] text-sm">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
