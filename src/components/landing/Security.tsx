'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Card } from '../ui/card';

const locations = [
    { id: 1, x: 20, y: 40, name: "Pinar del Río", volume: "Low" },
    { id: 2, x: 30, y: 35, name: "La Habana", volume: "High" },
    { id: 3, x: 35, y: 38, name: "Matanzas", volume: "Med" },
    { id: 4, x: 45, y: 45, name: "Santa Clara", volume: "Med" },
    { id: 5, x: 55, y: 50, name: "Camagüey", volume: "Low" },
    { id: 6, x: 70, y: 60, name: "Holguín", volume: "Med" },
    { id: 7, x: 75, y: 65, name: "Santiago", volume: "High" },
];

export default function MapSection() {
    const [activePulse, setActivePulse] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActivePulse(prev => (prev + 1) % locations.length);
        }, 800);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-24 bg-[#050508] relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,157,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,157,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-12 items-center">

                <div className="lg:col-span-1 space-y-8">
                    <div className="inline-flex items-center gap-2 text-[#00FF9D] font-mono text-xs uppercase tracking-widest animate-pulse">
                        <span className="w-2 h-2 bg-[#00FF9D] rounded-full" />
                        Live Network Status
                    </div>
                    <h2 className="text-4xl font-bold text-white">
                        Seguridad en <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF9D] to-emerald-600">Movimiento</span>
                    </h2>
                    <p className="text-gray-400">
                        Monitorea el flujo de autenticaciones en tiempo real a través de nuestra red distribuida en toda la isla.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                        <Card className="bg-[#121218]/50 border-white/5">
                            <div className="text-2xl font-bold text-white mb-1">145ms</div>
                            <div className="text-xs text-gray-500">Latencia Habana</div>
                        </Card>
                        <Card className="bg-[#121218]/50 border-white/5">
                            <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                            <div className="text-xs text-gray-500">Uptime Nacional</div>
                        </Card>
                    </div>
                </div>

                <div className="lg:col-span-2 relative h-[400px] bg-[#0A0A0F] rounded-2xl border border-[#1A1A24] overflow-hidden shadow-2xl group">
                    <div className="absolute inset-0 bg-[radial-gradient(#1A1A24_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />

                    <svg viewBox="0 0 100 80" className="w-full h-full absolute inset-0 pointer-events-none drop-shadow-[0_0_10px_rgba(0,255,157,0.2)]">
                        <path
                            d="M10,45 Q20,30 30,35 T45,45 T60,50 T80,65 T90,70 L85,75 Q70,70 60,60 T40,55 T20,50 Z"
                            fill="none"
                            stroke="#00FF9D"
                            strokeWidth="0.5"
                            strokeOpacity="0.3"
                            fillOpacity="0.05"
                        />

                        <path d="M30,35 L45,45 L75,65" stroke="#00FF9D" strokeWidth="0.2" strokeDasharray="1 1" opacity="0.4" />
                        <path d="M30,35 L35,38 L55,50" stroke="#00FF9D" strokeWidth="0.2" strokeDasharray="1 1" opacity="0.4" />

                        {locations.map((loc, i) => (
                            <g key={loc.id}>
                                <circle cx={loc.x} cy={loc.y} r="1" fill="#00FF9D" />
                                {activePulse === i && (
                                    <circle cx={loc.x} cy={loc.y} r="1" stroke="#00FF9D" strokeWidth="0.2" fill="none">
                                        <animate attributeName="r" from="1" to="6" dur="1.5s" begin="0s" repeatCount="1" />
                                        <animate attributeName="opacity" from="1" to="0" dur="1.5s" begin="0s" repeatCount="1" />
                                    </circle>
                                )}
                            </g>
                        ))}
                    </svg>

                    {locations.map((loc, i) => (
                        <motion.div
                            key={loc.id}
                            className="absolute w-auto"
                            style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: i * 0.2 }}
                        >
                            <div className="relative group/marker">
                                <div className={`absolute -top-8 left-1/2 -translate-x-1/2 bg-[#00FF9D] text-black text-[10px] font-bold px-2 py-0.5 rounded opacity-0 group-hover/marker:opacity-100 transition-opacity whitespace-nowrap pointer-events-auto`}>
                                    {loc.name}
                                </div>
                                <div className="w-2 h-2 bg-[#00FF9D] rounded-full shadow-[0_0_10px_#00FF9D] cursor-pointer hover:scale-150 transition-transform" />
                            </div>
                        </motion.div>
                    ))}

                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end pointer-events-none">
                        <div className="bg-black/50 backdrop-blur px-3 py-1 rounded border border-white/10 text-xs text-gray-400">
                            Live Traffic Map v2.1
                        </div>
                        <div className="flex gap-2">
                            <div className="w-2 h-8 bg-green-500 rounded-sm animate-pulse" style={{ animationDelay: '0ms' }} />
                            <div className="w-2 h-12 bg-green-500 rounded-sm animate-pulse" style={{ animationDelay: '100ms' }} />
                            <div className="w-2 h-6 bg-green-500 rounded-sm animate-pulse" style={{ animationDelay: '200ms' }} />
                            <div className="w-2 h-10 bg-green-500 rounded-sm animate-pulse" style={{ animationDelay: '300ms' }} />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
