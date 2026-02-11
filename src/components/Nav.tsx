import Link from "next/link"

export default function Nav() {
    return (
        <header
            className="sticky top-0 m-auto z-50 text-white bg-black backdrop-blur-md px-10 py-3"
        >
            <div
                className="mx-auto flex items-center justify-between whitespace-nowrap"
            >
                <div className="flex items-center gap-3">
                    <div className="flex rounded-lg w-10 h-10 items-center bg-green-500 size-8 text-black">
                        <span className="mx-auto font-bold text-lg">
                            S
                        </span>
                    </div>
                    <h2
                        className="text-white text-lg font-bold leading-tight tracking-tight h2-nav"
                    >
                        SMSCuba
                        <br />
                        <span className="text-[10px] text-gray-400 font-normal">CYBER_SECURE_OTP</span>
                    </h2>
                </div>
                <div className="hidden md:flex items-center gap-10">
                    <nav className="flex items-center gap-8">
                        <Link
                            className="text-white text-sm font-medium hover:text-green-500 hover:shadow hover:shadow-[0_-2px_10px_rgba(56,189,248,0.6)] transition-colors"
                            href="/">Misión</Link>
                        <Link
                            className="text-white text-sm font-medium hover:text-green-500 transition-colors"
                            href="/solutions">Niveles</Link>
                        <Link
                            className="text-white text-sm font-medium hover:text-green-500 transition-colors"
                            href="/tools">Mapas</Link>
                        <Link
                            className="text-white text-sm font-medium hover:text-green-500 transition-colors"
                            href="/tools">Laboratorio</Link>
                    </nav>
                </div>
                <div className="hidden md:flex items-center gap-10">
                    <button className="font-bold text-sm text-gray-300 hover:text-white">
                        LOGIN
                    </button>
                    <button className="font-bold text-sm text-green-500 border border-green-500 rounded-lg px-5 py-2 bg-gray-900">
                        DASHBOARD
                    </button>
                </div>
            </div>
        </header>
    )
}