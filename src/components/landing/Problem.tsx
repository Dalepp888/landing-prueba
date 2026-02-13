import WarningIcon from '@mui/icons-material/Warning';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import CancelIcon from '@mui/icons-material/Cancel';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function () {
    return (
        <main className="max-w-7xl mx-auto px-6 py-16 md:py-24 w-full">
            <div className="flex justify-center mb-20">
                <div
                    className="inline-flex items-center p-1 bg-[#18181B] rounded-full">
                    <button
                        className="px-8 py-2.5 rounded-full text-sm font-bold transition-all bg-[#EF4444] text-white shadow-lg shadow-primary/20">
                        Problema
                    </button>
                    <button
                        className="px-8 py-2.5 rounded-full text-sm font-semibold text-slate-400 hover:text-slate-200 transition-all">
                        Solución
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-500/10 border border-red-500/20">
                        <span className="material-symbols-outlined text-[#EF4444] text-sm"><WarningIcon /></span>
                        <span className="text-xs font-bold tracking-widest uppercase text-[#EF4444]">Riesgo Crítico</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
                        Los riesgos de <br />
                        <span className="text-[#EF4444]">no usar OTP</span> <br />
                        <span className="text-[#EF4444]">profesional</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed">
                        Depender de soluciones caseras o proveedores internacionales genéricos expone tu negocio a pérdidas financieras y de reputación irreparables.
                    </p>
                </div>
                <div className="space-y-6">
                    <div
                        className="group p-6 md:p-8 rounded-2xl bg-card-dark border border-[#121212] hover:border-#EF4444 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-#EF4444">
                        <div className="flex items-start justify-between">
                            <div className="flex gap-4">
                                <div
                                    className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-[#EF4444] group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-2xl"><TrendingDownIcon /></span>
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-xl font-bold text-white leading-tight">Pérdidas por
                                        Fraude</h3>
                                    <p className="text-sm text-slate-500 dark:text-[#EF4444] font-medium">Promedio en PyMEs
                                        cubanas sin 2FA</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="text-2xl md:text-3xl font-extrabold text-[#EF4444]">$12,450/año</span>
                            </div>
                        </div>
                    </div>
                    <div
                        className="group p-6 md:p-8 rounded-2xl bg-card-dark border border-[#121212] hover:border-#EF4444 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-#EF4444">
                        <div className="flex items-start justify-between">
                            <div className="flex gap-4">
                                <div
                                    className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-#EF4444 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-2xl"><CancelIcon /></span>
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-xl font-bold text-white leading-tight">Clientes
                                        Insatisfechos</h3>
                                    <p className="text-sm text-slate-500 text-[#EF4444] font-medium">Tasa de abandono por
                                        SMS no recibidos</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="text-2xl md:text-3xl font-extrabold text-[#EF4444]">34%</span>
                            </div>
                        </div>
                    </div>
                    <div
                        className="group p-6 md:p-8 rounded-2xl bg-card-dark border border-[#121212] hover:border-#EF4444 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-#EF4444">
                        <div className="flex items-start justify-between">
                            <div className="flex gap-4">
                                <div
                                    className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-#EF4444 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-2xl"><AccessTimeIcon /></span>
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-xl font-bold text-white leading-tight">Integración Dolorosa</h3>
                                    <p className="text-sm text-slate-500 text-[#EF4444] font-medium">Tiempo perdido configurando gateways</p>
                                </div>
                            </div>
                            <div className="">
                                <span className="text-2xl md:text-3xl font-extrabold text-[#EF4444]">3 semanas</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}