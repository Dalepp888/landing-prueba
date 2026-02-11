"use client";

import React, { useState } from "react";
import RocketIcon from "@mui/icons-material/Rocket";

const features = [
  "Soporte Cubano",
  "API Documentada",
  "Setup Instantáneo",
];

export default function CTASection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Creating account with email:", email);
  };

  return (
    <section className="w-full py-20 px-4 bg-black">
      <div className="max-w-2xl mx-auto text-center">
        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span className="text-white">Tu primera línea de</span>
          <br />
          <span className="text-[#00FF9D]">defensa digital</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-lg md:text-xl mb-2">
          Comienza con 5 SMS gratis. Sin tarjeta de crédito. Sin compromisos.
        </p>

        {/* Limited Time Offer */}
        <p className="text-[#00FF9D] font-semibold text-lg mb-10">
          Oferta de lanzamiento por tiempo limitado.
        </p>

        {/* Email Form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
          <div className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@empresa.com"
              className="w-full px-6 py-4 bg-[#141414] border border-gray-800 rounded-xl text-white placeholder-gray-500 outline-none focus:border-gray-700 transition-colors"
              required
            />
            
            <button
              type="submit"
              className="w-full py-4 px-6 bg-[#00FF9D] hover:bg-[#00e68d] text-black font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
              style={{
                boxShadow: "0 0 20px rgba(0, 255, 157, 0.3)"
              }}
            >
              <RocketIcon sx={{ fontSize: 20 }} />
              Crear Cuenta Gratis
            </button>
          </div>
        </form>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#00FF9D] rounded-full"></span>
              <span className="text-gray-400 text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
