"use client";

import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import StarIcon from "@mui/icons-material/Star";
import { plans } from "../constants/pircing";

export default function PricingSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-6 text-[10px] font-extrabold tracking-wider text-black uppercase bg-[#00FF9D] rounded-full shadow-[0_0_5px_rgba(0,255,157,1),0_0_10px_rgba(0,255,157,0.8)]">
            Select Your Plan
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Elige tu ruta al éxito
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Escala niveles a medida que crece tu operación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-[#121218] rounded-2xl p-6 border transition-all duration-300 hover:scale-[1.02] ${plan.isPopular
                ? "border-[#00FF9D] border-2 shadow-lg shadow-emerald-500/10 hover:bg-[#00FF9D]/20"
                : plan.isFree
                ? "border-gray-800 hover:bg-gray-800"
                : plan.isGuild
                ? "border-gray-800 hover:bg-[#18294A]"
                : plan.isLegend
                ? "border-gray-800 hover:bg-[#390f33]"
                : "border-gray-800 hover:border-gray-500"
                }`}
            >
              {plan.isPopular && (
                <div className="absolute top-[-4px] right-0">
                  <span className="px-3 py-1 text-[10px] font-semibold text-black bg-[#00FF9D] rounded-bl-xl rounded-tr-xl">
                    MÁS POPULAR
                  </span>
                </div>
              )}

              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${plan.isPopular
                  ? "bg-[#00FF9D]"
                  : "bg-[#1A1A24]"
                  }`}
              >
                {React.cloneElement(plan.icon, {
                  className: plan.isPopular
                    ? "text-black"
                    : "text-white"
                })}
              </div>

              <p className="text-white text-lg font-bold mb-1">
                {plan.level}: {plan.name}
              </p>

              <div className="mb-2">
                <span className="text-2xl md:text-3xl font-bold text-white">
                  {plan.price}
                </span>
              </div>
              <p className="text-gray-500 text-sm font-mono mb-5">{plan.unitPrice}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckIcon
                      className={plan.isPopular
                        ? "text-emerald-400 flex-shrink-0 mt-0.5"
                        : "text-gray-500 flex-shrink-0 mt-0.5"
                      }
                      sx={{ fontSize: 18 }}
                    />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 ${plan.isPopular
                  ? "px-3 py-1 mb-6 text-lg font-extrabold text-black bg-[#00FF9D] rounded-full shadow-[0_0_2px_rgba(0,255,157,1),0_0_4px_rgba(0,255,157,0.8)]"
                  : "bg-transparent text-emerald-400 border border-emerald-500 hover:bg-emerald-500/10"
                  }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto group cursor-pointer">
          <div className="relative bg-gradient-to-r from-purple-950/20 via-gray-900/40 to-purple-950/20 border border-purple-500/20 rounded-2xl p-6 text-center transition-all duration-300 group-hover:from-purple-950/30 group-hover:via-gray-900/45 group-hover:to-purple-950/30 group-hover:border-purple-500/30 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.12)]">
            <div className="flex items-center justify-center gap-2 mb-3">
              <StarIcon className="text-yellow-600/50 group-hover:text-yellow-500 transition-colors duration-300" sx={{ fontSize: 20 }} />
              <h3 className="text-xl font-bold text-white/70 group-hover:text-white transition-colors duration-300">
                Nivel Secreto: Personalizado
              </h3>
              <StarIcon className="text-yellow-600/50 group-hover:text-yellow-500 transition-colors duration-300" sx={{ fontSize: 20 }} />
            </div>
            <p className="text-gray-500/70 group-hover:text-gray-300 transition-colors duration-300">
              ¿Necesitas millones de envíos? Desbloquea tarifas mayoristas y soporte dedicado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
