import CodePlayground from "../components/CodePlayground";
import CTASection from "../components/CTASection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import InternationalExpansion from "../components/InternationalExpansion";
import PricingSection from "../components/PricingSection";
import RadarSection from "../components/RadarSection";
import RoadmapSection from "../components/RoadmapSection";
import Security from "../components/Security";
import Solutions from "../components/ProblemSolutions";
import TestimonialsSection from "../components/TestimonialsSection";
import Nav from "../components/Nav";


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
