"use client";

import React, { useState } from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: "1",
    question: "¿Es necesario tener tarjeta en USD?",
    answer: "No. Aceptamos transferencias en CUP, MLC y criptomonedas (USDT). Pensado para la economía cubana.",
  },
  {
    id: "2",
    question: "¿Qué pasa si el SMS no llega?",
    answer: "Contamos con un sistema de reintentos automáticos. Si después de 3 intentos no se entrega, no se te cobra ese SMS y puedes ver el estado en tiempo real desde tu dashboard.",
  },
  {
    id: "3",
    question: "¿Puedo personalizar el Sender ID?",
    answer: "Sí, en los planes Guild y Leyenda puedes configurar tu propio nombre de remitente. En planes inferiores usamos nuestro ID genérico por defecto.",
  },
  {
    id: "4",
    question: "¿Tienen plugin para WordPress/WooCommerce?",
    answer: "Sí, tenemos plugins oficiales para WordPress y WooCommerce. También disponemos de integraciones con Shopify, PrestaShop y API REST para desarrolladores.",
  },
];

export default function FAQSection() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    // Si ya está abierta, la cerramos. Si no, la abrimos (y cierra las demás)
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="w-full py-20 px-4 bg-[#050505]">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          {/* Question Icon */}
          <div className="w-12 h-12 rounded-full border-2 border-emerald-500 flex items-center justify-center mx-auto mb-6">
            <HelpOutlineIcon className="text-emerald-400" sx={{ fontSize: 24 }} />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Banco de Preguntas
          </h2>
          <p className="text-gray-400 text-lg">
            Desbloquea conocimiento sobre nuestra plataforma.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item) => {
            const isOpen = activeId === item.id;

            return (
              <div
                key={item.id}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-emerald-500/50 bg-[#0a0a0a]"
                    : "border-gray-800 bg-[#0f0f0f] hover:border-gray-700"
                }`}
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span
                    className={`font-semibold text-lg transition-colors duration-300 ${
                      isOpen ? "text-emerald-400" : "text-white"
                    }`}
                  >
                    {item.question}
                  </span>
                  <ExpandMoreIcon
                    className={`text-gray-400 transition-transform duration-300 flex-shrink-0 ml-4 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    sx={{ fontSize: 24 }}
                  />
                </button>

                {/* Answer Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-400 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
