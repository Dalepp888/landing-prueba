export default function Security() {
    return (
        <div
            className="bg-background-dark text-slate-100 min-h-screen flex items-center justify-center p-6 md:p-12 overflow-x-hidden">
            <div className="fixed inset-0 grid-pattern pointer-events-none"></div>
            <main className="relative z-10 max-w-7xl w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5 space-y-8">
                        <div className="flex items-center space-x-3">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF9D] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00FF9D]"></span>
                            </span>
                            <span className="text-[#00FF9D] text-xs font-bold tracking-[0.2em] uppercase">
                                Live Network Status
                            </span>
                        </div>
                        <div className="space-y-2">
                            <h1 className="!text-3xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                                Seguridad en <br />
                                <span className="text-[#00FF9D]">Movimiento</span>
                            </h1>
                        </div>
                        <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                            Monitorea el flujo de autenticaciones en tiempo real a través de nuestra red distribuida en toda la isla.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <div
                                className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-6 min-w-[160px] flex-1 shadow-sm">
                                <div className="text-2xl font-bold text-white">145ms</div>
                                <div className="text-slate-500 text-sm mt-1">Latencia Habana</div>
                            </div>
                            <div
                                className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-6 min-w-[160px] flex-1 shadow-sm">
                                <div className="text-2xl font-bold text-white">99.9%</div>
                                <div className="text-slate-500 text-sm mt-1">Uptime Nacional</div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-7">
                        <div
                            className="relative bg-[#0A0A0A] border border-white/5 rounded-large p-8 md:p-12 aspect-[4/3] flex items-center justify-center overflow-hidden shadow-2xl">
                            <svg className="w-full h-full opacity-90" viewBox="0 0 600 400">
                                <path className="text-[#00FF9D]/20 line-glow" d="M 50 250 Q 150 150 250 220 T 450 300 T 550 350" fill="none"
                                    stroke="currentColor" stroke-width="2"></path>
                                <path className="text-[#00FF9D]/10" d="M 50 250 Q 100 200 200 250 T 400 350 T 550 350" fill="none"
                                    stroke="currentColor" stroke-width="2"></path>
                                <line className="text-[#00FF9D]/30" stroke="currentColor" stroke-dasharray="8 6" stroke-width="1.5" x1="250"
                                    x2="500" y1="220" y2="380"></line>
                                <circle className="fill-[#00FF9D] glow-dot" cx="60" cy="210" r="4"></circle>
                                <circle className="fill-[#00FF9D] glow-dot" cx="100" cy="245" r="4"></circle>
                                <circle className="fill-[#00FF9D] glow-dot" cx="130" cy="190" r="4"></circle>
                                <circle className="fill-[#00FF9D] glow-dot" cx="160" cy="200" r="4"></circle>
                                <circle className="fill-[#00FF9D] glow-dot" cx="190" cy="225" r="4"></circle>
                                <circle className="fill-[#00FF9D] glow-dot" cx="230" cy="255" r="4"></circle>
                                <circle className="fill-[#00FF9D] glow-dot" cx="280" cy="290" r="4"></circle>
                                <circle className="fill-[#00FF9D] glow-dot" cx="290" cy="225" r="4"></circle>
                                <circle className="fill-[#00FF9D] glow-dot" cx="360" cy="250" r="4"></circle>
                                <circle className="fill-[#00FF9D] glow-dot" cx="390" cy="340" r="4"></circle>
                                <circle className="fill-[#00FF9D] glow-dot" cx="430" cy="290" r="4"></circle>
                                <circle className="fill-[#00FF9D] glow-dot" cx="435" cy="370" r="4"></circle>
                                <circle className="fill-[#00FF9D] glow-dot" cx="475" cy="310" r="4"></circle>
                            </svg>
                            <div className="absolute bottom-6 left-8 md:bottom-8 md:left-12">
                                <span
                                    className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-xs font-medium text-slate-400">
                                    Live Traffic Map v2.1
                                </span>
                            </div>
                            <div className="absolute bottom-6 right-8 md:bottom-8 md:right-12 flex items-end space-x-1.5 opacity-80">
                                <div className="w-1.5 h-6 bg-[#00FF9D] rounded-full"></div>
                                <div className="w-1.5 h-10 bg-[#00FF9D] rounded-full"></div>
                                <div className="w-1.5 h-4 bg-[#00FF9D] rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}