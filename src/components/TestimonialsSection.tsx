"use client";

import React from "react";
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
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Ellos ya protegen sus transacciones
        </h2>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {clients.map((client) => (
            <div
              key={client.id}
              className="bg-[#141414] border border-gray-800 rounded-xl p-6 text-center hover:border-gray-700 transition-all duration-300"
            >
              {/* Logo Circle */}
              <div className="w-12 h-12 rounded-full bg-[#1a1a1a] border border-gray-700 flex items-center justify-center mx-auto mb-4">
                <span className="text-gray-400 font-semibold text-lg">
                  {client.initial}
                </span>
              </div>

              {/* Company Name */}
              <h3 className="text-white font-semibold mb-1">{client.name}</h3>

              {/* Category */}
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-3">
                {client.category}
              </p>

              {/* SMS Count */}
              <p className="text-[#00FF9D] font-semibold text-sm">{client.smsCount} SMS</p>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#141414] border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-all duration-300 relative"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className="text-yellow-500"
                    sx={{ fontSize: 20 }}
                  />
                ))}
              </div>

              {/* Quote */}
              <div className="relative mb-8">
                {/* Decorative Quote Icon */}
                <FormatQuoteIcon
                  className="text-emerald-500/20 absolute -top-2 -right-2 transform rotate-180"
                  sx={{ fontSize: 48 }}
                />
                
                <p className="text-gray-300 text-lg leading-relaxed relative z-10">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-800">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-[#1a1a1a] border border-gray-700 flex items-center justify-center">
                  <span className="text-gray-400 font-semibold">
                    {testimonial.initials}
                  </span>
                </div>

                {/* Name & Role */}
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
