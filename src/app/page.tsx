import CodePlayground from "../components/landing/CodePlayground";
import CTASection from "../components/landing/CTASection";
import FAQSection from "../components/landing/FAQSection";
import Footer from "../components/landing/Footer";
import Hero from "../components/landing/Hero";
import InternationalExpansion from "../components/landing/InternationalExpansion";
import PricingSection from "../components/landing/PricingSection";
import RadarSection from "../components/landing/RadarSection";
import RoadmapSection from "../components/landing/RoadmapSection";
import Security from "../components/landing/Security";
import Solutions from "../components/landing/ProblemSolutions";
import TestimonialsSection from "../components/landing/TestimonialsSection";


export default function Home() {
  return (
    <div className="bg-[#0A0A0F] min-h-screen font-sans selection:bg-[#00FF9D] selection:text-black overflow-x-hidden">
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0A0A0F]/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-[#00FF9D] rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(0,255,157,0.3)] group-hover:animate-pulse-neon transition-all">
              <span className="font-bold text-black text-xl">S</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white tracking-tight leading-none group-hover:text-[#00FF9D] transition-colors">SMSCuba</span>
              <span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">Cyber_Secure_OTP</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#" className="hover:text-[#00FF9D] transition-colors hover:shadow-[0_0_10px_#00FF9D] hover:shadow-cyan-500/50">Misión</a>
            <a href="#" className="hover:text-[#00FF9D] transition-colors">Niveles</a>
            <a href="#" className="hover:text-[#00FF9D] transition-colors">Mapa</a>
            <a href="#" className="hover:text-[#00FF9D] transition-colors">Laboratorio</a>
          </div>

          <div className="flex items-center gap-4">
            <button
              className="hidden md:block text-sm font-bold text-gray-300 hover:text-white uppercase tracking-wider"
            >
              Login
            </button>
            <button
              className="bg-[#1A1A24] text-[#00FF9D] border border-[#00FF9D]/30 px-6 py-2 rounded-lg text-sm font-bold hover:bg-[#00FF9D] hover:text-black transition-all duration-300 shadow-[0_0_0_rgba(0,255,157,0)] hover:shadow-[0_0_20px_rgba(0,255,157,0.4)]"
            >
              DASHBOARD
            </button>
          </div>
        </div>
      </nav>
      <main className="">
        <Hero />
        <Solutions />
        <Security />
        <PricingSection />
        <CodePlayground />
        <TestimonialsSection />
        <RadarSection />
        <InternationalExpansion />
        <RoadmapSection />
        <FAQSection />
        <CTASection />
        <Footer />
      </main>
    </div>
  );
}
