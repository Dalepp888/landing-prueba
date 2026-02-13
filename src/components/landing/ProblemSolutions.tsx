'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertTriangle, TrendingDown, Clock, CheckCircle, Zap, Code, ShieldAlert, XCircle } from 'lucide-react';
import { Card } from '../ui/card';
import { CyberCard } from '../ui/cyberCard';

export default function ProblemSolution() {
    const [view, setView] = useState<'problem' | 'solution'>('problem');

    return (
        <section className="py-32 bg-[#050508] relative overflow-hidden">
            {/* Background Toggle Effect */}
            <motion.div
                className="absolute inset-0 z-0 transition-colors duration-1000"
                animate={{
                    background: view === 'problem'
                        ? 'radial-gradient(circle at 20% 50%, rgba(220, 38, 38, 0.15) 0%, rgba(5, 5, 8, 1) 70%)'
                        : 'radial-gradient(circle at 80% 50%, rgba(0, 255, 157, 0.15) 0%, rgba(5, 5, 8, 1) 70%)'
                }}
            />

            <div className="container mx-auto px-4 relative z-10">

                {/* Toggle Switch */}
                <div className="flex justify-center mb-16">
                    <div className="bg-[#1A1A24] p-1 rounded-full flex relative">
                        <motion.div
                            className="absolute inset-y-1 rounded-full shadow-lg"
                            layoutId="toggle"
                            initial={false}
                            animate={{
                                left: view === 'problem' ? 4 : '50%',
                                width: 'calc(50% - 4px)',
                                backgroundColor: view === 'problem' ? '#EF4444' : '#00FF9D'
                            }}
                        />
                        <button
                            onClick={() => setView('problem')}
                            className={`relative z-10 px-8 py-3 rounded-full text-sm font-bold transition-colors ${view === 'problem' ? 'text-white' : 'text-gray-400'}`}
                        >
                            Problema
                        </button>
                        <button
                            onClick={() => setView('solution')}
                            className={`relative z-10 px-8 py-3 rounded-full text-sm font-bold transition-colors ${view === 'solution' ? 'text-black' : 'text-gray-400'}`}
                        >
                            Solución
                        </button>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
                    <AnimatePresence mode="wait">
                        {view === 'problem' ? (
                            <motion.div
                                key="problem-left"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                className="col-span-2 grid lg:grid-cols-2 gap-12"
                            >
                                <div className="space-y-6">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-500/10 text-red-500 text-xs font-bold uppercase tracking-wider">
                                        <AlertTriangle className="w-4 h-4" /> Riesgo Crítico
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                                        Los riesgos de <br />
                                        <span className="text-red-500">no usar OTP profesional</span>
                                    </h2>
                                    <p className="text-gray-400 text-lg leading-relaxed">
                                        Depender de soluciones caseras o proveedores internacionales genéricos expone tu negocio a pérdidas financieras y de reputación irreparables.
                                    </p>
                                </div>

                                <div className="grid gap-4">
                                    {[
                                        { title: "Pérdidas por Fraude", value: "$12,450/año", icon: TrendingDown, desc: "Promedio en PyMEs cubanas sin 2FA" },
                                        { title: "Clientes Insatisfechos", value: "34%", icon: XCircle, desc: "Tasa de abandono por SMS no recibidos" },
                                        { title: "Integración Dolorosa", value: "3 semanas", icon: Clock, desc: "Tiempo perdido configurando gateways" }
                                    ].map((item, i) => (
                                        <Card key={i} className="bg-red-950/10 border-red-500/20 hover:bg-red-900/20 transition-colors group cursor-crosshair">
                                            <div className="flex items-start justify-between">
                                                <div className="flex gap-4">
                                                    <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                                                        <item.icon className="w-6 h-6" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                                                        <p className="text-red-400 text-sm">{item.desc}</p>
                                                    </div>
                                                </div>
                                                <span className="text-2xl font-mono font-bold text-red-500 opacity-50 group-hover:opacity-100">{item.value}</span>
                                            </div>
                                        </Card>
                                    ))}
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="solution-right"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 50 }}
                                className="col-span-2 grid lg:grid-cols-2 gap-12"
                            >
                                <div className="space-y-6">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#00FF9D]/10 text-[#00FF9D] text-xs font-bold uppercase tracking-wider">
                                        <CheckCircle className="w-4 h-4" /> Ventaja Competitiva
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                                        Tu ventaja con <br />
                                        <span className="text-[#00FF9D]">SMSCuba</span>
                                    </h2>
                                    <p className="text-gray-400 text-lg leading-relaxed">
                                        Infraestructura local optimizada para la máxima entrega y seguridad. Deja que nosotros manejemos la complejidad.
                                    </p>
                                </div>

                                <div className="grid gap-4">
                                    {[
                                        { title: "Entrega Instantánea", value: "3.2s", icon: Zap, desc: "Rutas directas con operadores locales" },
                                        { title: "Fiabilidad Total", value: "99.9%", icon: ShieldAlert, desc: "SLA garantizado por contrato" },
                                        { title: "Integración Flash", value: "5 min", icon: Code, desc: "SDKs listos para copiar y pegar" }
                                    ].map((item, i) => (
                                        <CyberCard key={i} className="cursor-default">
                                            <div className="flex items-start justify-between">
                                                <div className="flex gap-4">
                                                    <div className="w-12 h-12 rounded-lg bg-[#00FF9D]/10 flex items-center justify-center text-[#00FF9D]">
                                                        <item.icon className="w-6 h-6" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                                                        <p className="text-[#00FF9D]/70 text-sm">{item.desc}</p>
                                                    </div>
                                                </div>
                                                <span className="text-3xl font-mono font-bold text-[#00FF9D] text-shadow-neon">{item.value}</span>
                                            </div>
                                        </CyberCard>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}