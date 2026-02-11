import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';
import CodeIcon from '@mui/icons-material/Code';

export default function () {
    return (
        <main className="max-w-7xl mx-auto px-6 py-16 md:py-24 w-full">
            <div className="flex justify-center mb-20">
                <div
                    className="inline-flex items-center p-1 bg-[#18181B] rounded-full">
                    <button
                        className="px-8 py-2.5 rounded-full text-sm font-bold transition-all text-slate-400 shadow-lg shadow-primary/20">
                        Problema
                    </button>
                    <button
                        className="px-8 py-2.5 rounded-full text-sm font-semibold bg-[#00FF9D] text-black hover:text-slate-200 transition-all">
                        Solución
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-green-800 border border-red-500/20">
                        <span className="material-symbols-outlined text-[#00FF9D] text-sm"><CheckCircleOutlineIcon /></span>
                        <span className="text-xs font-bold tracking-widest uppercase text-[#00FF9D]">Riesgo Crítico</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
                        Tu ventaja con<br />
                        <span className="text-[#00FF9D]">SMSCuba</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed">
                        Infraestructura local optimizada para la máxima entrega y seguridad. Deja que nosotros manejemos la complejidad.
                    </p>
                </div>
                <div className="space-y-6">
                    <div
                        className="group p-6 md:p-8 rounded-2xl border border-[#00FF9D] hover:border-[#EF4444] transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-#EF4444">
                        <div className="flex items-start justify-between">
                            <div className="flex gap-4">
                                <div
                                    className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-[#EF4444] group-hover:scale-110 transition-transform">
                                    <span className="text-2xl text-[#00FF9D]"><ElectricBoltIcon /></span>
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-xl font-bold text-white leading-tight">Entrega Instantánea</h3>
                                    <p className="text-sm text-[#00FF9D] font-medium">Rutas directas con operadores locales</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="text-2xl md:text-3xl font-extrabold text-[#00FF9D]">3.2s</span>
                            </div>
                        </div>
                    </div>
                    <div
                        className="group p-6 md:p-8 rounded-2xl bg-card-dark border border-[#121212] hover:border-#EF4444 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-#EF4444">
                        <div className="flex items-start justify-between">
                            <div className="flex gap-4">
                                <div
                                    className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-#EF4444 group-hover:scale-110 transition-transform">
                                    <span className="text-2xl text-[#00FF9D]"><GppMaybeIcon /></span>
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-xl font-bold text-white leading-tight">Fiabilidad Total</h3>
                                    <p className="text-sm text-[#00FF9D] font-medium">SLA garantizado por contrato</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="text-2xl md:text-3xl font-extrabold text-[#00FF9D]">99.9%</span>
                            </div>
                        </div>
                    </div>
                    <div
                        className="group p-6 md:p-8 rounded-2xl bg-card-dark border border-[#121212] hover:border-#EF4444 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-#EF4444">
                        <div className="flex items-start justify-between">
                            <div className="flex gap-4">
                                <div
                                    className="flex-shrink-0 w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-#EF4444 group-hover:scale-110 transition-transform">
                                    <span className="text-2xl text-[#00FF9D]"><CodeIcon /></span>
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-xl font-bold text-white leading-tight">Integración Flash</h3>
                                    <p className="text-sm text-[#00FF9D] font-medium">SDKs listos para copiar y pegar</p>
                                </div>
                            </div>
                            <div className="">
                                <span className="text-2xl md:text-3xl font-extrabold text-[#00FF9D]">5 min</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}