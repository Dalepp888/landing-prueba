"use client";

import React from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import GroupsIcon from "@mui/icons-material/Groups";
import LanguageIcon from "@mui/icons-material/Language";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CheckIcon from "@mui/icons-material/Check";
import StarIcon from "@mui/icons-material/Star";

interface Plan {
  id: string;
  level: string;
  name: string;
  price: string;
  unitPrice: string;
  icon: React.ReactNode;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
  isFree?: boolean;
  isGuild?: boolean;
  isLegend?: boolean
}

const plans: Plan[] = [
  {
    id: "explorer",
    level: "Nivel 1",
    name: "Explorador",
    price: "GRATIS",
    unitPrice: "0 CUP",
    icon: <PersonOutlineIcon className="text-white" sx={{ fontSize: 28 }} />,
    features: [
      "5 SMS de Prueba",
      "API Básica",
      "Soporte Email",
      "Dashboard Lite",
    ],
    buttonText: "Comenzar Aventura",
    isFree: true,
  },
  {
    id: "squad",
    level: "Nivel 2",
    name: "Squad",
    price: "6,000 CUP",
    unitPrice: "6 CUP/sms",
    icon: <GroupsIcon className="text-emerald-400" sx={{ fontSize: 28 }} />,
    features: [
      "1,000 SMS",
      "API Full Access",
      "Soporte WhatsApp",
      "Analytics Básico",
      "3 Usuarios",
    ],
    buttonText: "Desbloquear",
    isPopular: true,
  },
  {
    id: "guild",
    level: "Nivel 3",
    name: "Guild",
    price: "27,500 CUP",
    unitPrice: "5.5 CUP/sms",
    icon: <LanguageIcon className="text-emerald-400" sx={{ fontSize: 28 }} />,
    features: [
      "5,000 SMS",
      "Webhooks",
      "Soporte Prioritario",
      "Exportación CSV",
      "Usuarios Ilimitados",
    ],
    buttonText: "Desbloquear",
    isGuild: true
  },
  {
    id: "legend",
    level: "Nivel 4",
    name: "Leyenda",
    price: "50,000 CUP",
    unitPrice: "5 CUP/sms",
    icon: <AutoAwesomeIcon className="text-emerald-400" sx={{ fontSize: 28 }} />,
    features: [
      "10,000 SMS",
      "IP Dedicada",
      "SLA Garantizado",
      "Account Manager",
      "Auditoría Log",
    ],
    buttonText: "Desbloquear",
    isLegend: true
  },
];

export default function PricingSection() {
  return (
    <section className="w-full py-20 px-4 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
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
                ? "border-gray-800 hover:bg-gray-900"
                : plan.isGuild
                ? "border-gray-800 hover:bg-[#162544]"
                : plan.isLegend
                ? "border-gray-800 hover:bg-[#3D1538]"
                : "border-gray-800 hover:border-gray-500"
                }`}
            >
              {plan.isPopular && (
                <div className="absolute top-[-3px] right-0">
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

              <p className="text-gray-400 text-sm font-medium mb-1">
                {plan.level}: {plan.name}
              </p>

              <div className="mb-2">
                <span className="text-3xl md:text-4xl font-bold text-white">
                  {plan.price}
                </span>
              </div>
              <p className="text-gray-500 text-sm mb-6">{plan.unitPrice}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckIcon
                      className="text-emerald-400 flex-shrink-0 mt-0.5"
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
