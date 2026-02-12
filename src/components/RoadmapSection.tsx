"use client";

import React, { useState, useEffect, useRef } from "react";
import GppGoodIcon from "@mui/icons-material/GppGood";
import FlightIcon from "@mui/icons-material/Flight";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import GroupsIcon from "@mui/icons-material/Groups";

interface TimelineItem {
  id: string;
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  isActive?: boolean;
}

const timelineItems: TimelineItem[] = [
  {
    id: "1",
    year: "2024",
    title: "OTP Nacional Masivo",
    description: "Infraestructura robusta para todo Cuba",
    icon: <GppGoodIcon sx={{ fontSize: 32 }} />,
    isActive: true,
  },
  {
    id: "2",
    year: "2024 Q4",
    title: "OTP Internacional",
    description: "Conexión con gateway global",
    icon: <FlightIcon sx={{ fontSize: 32 }} />,
    isActive: false,
  },
  {
    id: "3",
    year: "2025",
    title: "Biometría + OTP",
    description: "Autenticación de doble factor híbrida",
    icon: <FingerprintIcon sx={{ fontSize: 32 }} />,
    isActive: false,
  },
  {
    id: "4",
    year: "2026",
    title: "Identidad Digital",
    description: "Ecosistema unificado de identidad cubana",
    icon: <GroupsIcon sx={{ fontSize: 32 }} />,
    isActive: false,
  },
];

export default function RoadmapSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedItems, setAnimatedItems] = useState<string[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          timelineItems.forEach((item, index) => {
            setTimeout(() => {
              setAnimatedItems((prev) => [...prev, item.id]);
            }, index * 200);
          });
        } else {
          setIsVisible(false);
          setAnimatedItems([]);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-20 px-4 bg-[#050505]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            El futuro de la autenticación
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            No solo enviamos SMS, construimos la confianza digital del mañana.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-[60px] left-0 right-0 h-0.5 z-0">
            <div className="absolute inset-0 bg-gray-800" />
            <div
              className={`absolute left-0 h-full bg-emerald-500 transition-all duration-1000 ease-out ${
                isVisible ? "w-[33%]" : "w-0"
              }`}
              style={{ transitionDelay: "0ms" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {timelineItems.map((item, index) => (
              <div
                key={item.id}
                className={`flex flex-col items-center text-center transition-all duration-500 transform ${
                  animatedItems.includes(item.id)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <div
                  className={`relative z-10 w-[120px] h-[120px] rounded-full flex items-center justify-center mb-6 transition-all duration-500 bg-[#050505] ${
                    item.isActive
                      ? "border-4 border-emerald-400 text-emerald-400"
                      : "border-4 border-gray-800 text-gray-600"
                  }`}
                  style={{
                    backgroundColor: item.isActive
                      ? "rgba(16, 185, 129, 0.1)"
                      : "transparent",
                  }}
                >
                  {item.icon}
                </div>

                <h3
                  className={`text-xl font-bold mb-2 ${
                    item.isActive ? "text-emerald-400" : "text-white"
                  }`}
                >
                  {item.year}
                </h3>

                <h4 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h4>

                <p className="text-gray-500 text-sm max-w-[200px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
