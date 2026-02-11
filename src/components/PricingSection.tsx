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
  },
];

export default function PricingSection() {
  return (
    <section className="w-full py-20 px-4 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-emerald-400 uppercase bg-emerald-400/10 rounded-full border border-emerald-400/20">
            Select Your Plan
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Elige tu ruta al éxito
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Escala niveles a medida que crece tu operación.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-6 border transition-all duration-300 hover:scale-[1.02] ${
                plan.isPopular
                  ? "bg-emerald-950/20 border-emerald-500/50 shadow-lg shadow-emerald-500/10"
                  : "bg-[#141414] border-gray-800 hover:border-gray-700"
              }`}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 text-xs font-semibold text-white bg-emerald-500 rounded-full">
                    MÁS POPULAR
                  </span>
                </div>
              )}

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                  plan.isPopular
                    ? "bg-emerald-500/20"
                    : "bg-gray-800"
                }`}
              >
                {plan.icon}
              </div>

              {/* Level & Name */}
              <p className="text-gray-400 text-sm font-medium mb-1">
                {plan.level}: {plan.name}
              </p>

              {/* Price */}
              <div className="mb-2">
                <span className="text-3xl md:text-4xl font-bold text-white">
                  {plan.price}
                </span>
              </div>
              <p className="text-gray-500 text-sm mb-6">{plan.unitPrice}</p>

              {/* Features */}
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

              {/* Button */}
              <button
                className={`w-full py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 ${
                  plan.isPopular
                    ? "bg-emerald-500 text-white hover:bg-emerald-600"
                    : "bg-transparent text-emerald-400 border border-emerald-500 hover:bg-emerald-500/10"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Secret Level */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-950/30 via-gray-900/50 to-emerald-950/30 border border-emerald-500/20 rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <StarIcon className="text-yellow-500" sx={{ fontSize: 20 }} />
              <h3 className="text-xl font-bold text-white">
                Nivel Secreto: Personalizado
              </h3>
              <StarIcon className="text-yellow-500" sx={{ fontSize: 20 }} />
            </div>
            <p className="text-gray-400">
              ¿Necesitas millones de envíos? Desbloquea tarifas mayoristas y soporte dedicado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
