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
import Nav from "../components/landing/Nav";


export default function Home() {
  return (
    <div className="bg-[#0A0A0F] min-h-screen font-sans selection:bg-[#00FF9D] selection:text-black overflow-x-hidden">
      <Nav />
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
