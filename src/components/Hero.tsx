import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SmartphoneIcon from '@mui/icons-material/Smartphone';

export default function Hero() {
    return (
        <div
            className="bg-background-dark text-white font-display overflow-x-hidden min-h-screen">
            <div className="fixed inset-0 pointer-events-none overflow-hidden matrix-container opacity-40">
                <div className="absolute inset-0 grid grid-cols-12 gap-4 h-full">
                    <div className="animate-matrix-fall delay-75 w-1 h-32 bg-[#00FF9D] blur-sm rounded-full mx-auto"
                        style={{ animationDuration: '8s' }}></div>
                    <div className="animate-matrix-fall delay-300 w-1 h-24 bg-[#00FF9D] blur-md rounded-full mx-auto"
                        style={{ animationDuration: '12s' }}></div>
                    <div className="animate-matrix-fall delay-1000 w-1 h-40 bg-[#00FF9D] blur-sm rounded-full mx-auto"
                        style={{ animationDuration: '10s' }}></div>
                    <div className="animate-matrix-fall delay-500 w-1 h-16 bg-[#00FF9D] blur-lg rounded-full mx-auto"
                        style={{ animationDuration: '14s' }}></div>
                    <div className="animate-matrix-fall delay-[2s] w-1 h-28 bg-[#00FF9D] blur-sm rounded-full mx-auto"
                        style={{ animationDuration: '9s' }}></div>
                    <div className="animate-matrix-fall delay-0 w-1 h-36 bg-[#00FF9D] blur-md rounded-full mx-auto"
                        style={{ animationDuration: '11s' }}></div>
                    <div className="animate-matrix-fall delay-[1.5s] w-1 h-20 bg-[#00FF9D] blur-sm rounded-full mx-auto"
                        style={{ animationDuration: '13s' }}></div>
                    <div className="animate-matrix-fall delay-700 w-1 h-44 bg-[#00FF9D] blur-lg rounded-full mx-auto"
                        style={{ animationDuration: '10s' }}></div>
                    <div className="animate-matrix-fall delay-200 w-1 h-32 bg-[#00FF9D] blur-sm rounded-full mx-auto"
                        style={{ animationDuration: '15s' }}></div>
                    <div className="animate-matrix-fall delay-[3s] w-1 h-12 bg-[#00FF9D] blur-md rounded-full mx-auto"
                        style={{ animationDuration: '8s' }}></div>
                    <div className="animate-matrix-fall delay-400 w-1 h-24 bg-[#00FF9D] blur-sm rounded-full mx-auto"
                        style={{ animationDuration: '12s' }}></div>
                    <div className="animate-matrix-fall delay-[2.5s] w-1 h-30 bg-[#00FF9D] blur-lg rounded-full mx-auto"
                        style={{ animationDuration: '9s' }}></div>
                </div>
            </div>
            <div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-16 lg:pt-24 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="">
                        <div className="space-y-4">
                            <div className="bg-[#00FF9D] neon-glow text-black font-bold text-xs w-60 rounded-xl">
                                🛡️ SEGURIDAD AUTENICADA EN CUBA
                            </div>
                            <h2 className="text-6xl lg:text-6xl font-extrabold leading-[1.1] tracking-tighter">
                                Tu código,<br />
                                <span className="text-[#00FF9D] neon-glow">tu seguridad,</span><br />
                                nuestro<br />
                                compromiso
                            </h2>
                            <div className="pt-6 flex items-center gap-3">
                                <span className="text-[#00FF9D] font-mono text-sm animate-pulse">_</span>
                                <p className="text-sm font-mono text-[#00FF9D] tracking-tight flex items-center gap-2">
                                    <span className="text-sm text-[#00FF9D]">&gt;</span> API de OTP más rápida de Cuba <span
                                        className="text-sm text-white/20">|</span> 99.9% entregas
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-center">
                            <div className='bg-[#00FF9D] rounded-xl transition-all h-12 w-70'>
                                <button
                                    className="text-sm m-auto pt-1 transition-all text-black font-bold rounded-xl w-35 flex items-center shadow-[0_0_30px_rgba(0,255,157,0.3)]">
                                    <span className="material-symbols-outlined text-lg"><RocketLaunchIcon /></span>
                                    <h3>Obtener 5 SMS Gratis</h3>
                                </button>
                            </div>
                            <button
                                className="group flex items-center h-12 w-70 text-sm font-bold tracking-widest px-8 py-4 rounded-xl border border-[#00FF9D] transition-all hover:bg-[#00FF9D]">
                                <div
                                    className="w-8 h-8 rounded-full border border-black flex items-center justify-center hover:border-[#00FF9D] text-[#00FF9D]">
                                    <span className="material-symbols-outlined px-2 text-sm"><PlayArrowIcon /></span>
                                </div>
                                <h3 className='text-[#00FF9D] text-sm hover:text-black'>VER DEMO EN VIVO</h3>
                            </button>
                        </div>
                        <div className='flex gap-5 mt-10 py-4 pr-10 pl-3 bg-gray-900 rounded-xl'>
                            <h1 className='text-4xl font-bold'>2,457,321</h1>
                            <div>
                                <h3 className='text-sm'>SMS ENVIADOS
                                    <br/>
                                    <span className='text-[#00FF9D]'>83 NEGOCIOS ACTIVOS</span></h3>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex justify-center items-center h-[500px]">
                        <div className="absolute w-[400px] h-[400px] rounded-full animate-pulse-slow">
                        </div>
                        <div
                            className="relative z-20 w-48 h-48 border-2 border-[#00FF9D] lg:w-35 lg:h-35 glass-panel rounded-3xl flex items-center justify-center border-2 border-[#00FF9D] shadow-[0_0_50px_rgba(0,255,157,0.1)] group">
                            <div className="flex flex-col gap-2">
                                <div
                                    className="w-16 h-6 border-4 border-[#00FF9D] neon-glow rounded-md opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-end px-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] neon-glow shadow-[0_0_5px_#00FF9D]"></div>
                                </div>
                                <div
                                    className="w-16 h-6 border-4 border-[#00FF9D] neon-glow rounded-md opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-end px-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] neon-glow shadow-[0_0_5px_#00FF9D]"></div>
                                </div>
                            </div>
                            <div
                                className="absolute -top-12 -right-12 w-24 h-0.5 bg-gradient-to-r from-[#00FF9D] to-transparent rotate-[35deg]">
                            </div>
                            <div
                                className="absolute -bottom-12 -left-12 w-24 h-0.5 bg-gradient-to-l from-[#00FF9D] to-transparent rotate-[35deg]">
                            </div>
                        </div>
                        <div className="absolute top-10 right-10 lg:right-20 animate-float" style={{ animationDelay: '-1s' }}>
                            <div
                                className="w-14 h-14 glass-panel rounded-full flex items-center justify-center border border-white/10 group">
                                <span
                                    className="material-symbols-outlined text-gray-400 group-hover:text-[#00FF9D] transition-colors"><SmartphoneIcon /></span>
                            </div>
                        </div>
                        <div className="absolute bottom-10 left-10 lg:left-20 animate-float" style={{ animationDelay: '-3s' }}>
                            <div
                                className="w-14 h-14 glass-panel rounded-full flex items-center justify-center border border-white/10 group">
                                <span
                                    className="material-symbols-outlined text-gray-400 group-hover:text-[#00FF9D] transition-colors"><SmartphoneIcon /></span>
                            </div>
                        </div>
                        <div
                            className="absolute border-1 border-[#00FF9D] bottom-4 right-0 lg:right-4 glass-panel p-6 rounded-2xl shadow-2xl animate-float min-w-[240px] overflow-hidden">
                            <div className="scanline"></div>
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-[#00FF9D] shadow-[0_0_8px_#00FF9D]"></div>
                                    <span className="text-[10px] font-bold tracking-widest text-[#00FF9D] uppercase">Verificado</span>
                                </div>
                                <span className="material-symbols-outlined text-gray-600 text-lg"><SmartphoneIcon /></span>
                            </div>
                            <div>
                                <span className="text-4xl font-extrabold text-white">3.2s</span>
                                <p className="text-xs text-gray-500 mt-1">Tiempo promedio de entrega</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}