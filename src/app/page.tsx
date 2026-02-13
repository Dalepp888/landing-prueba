import CodePlayground from "../components/landing/CodePlayground";
import CTASection from "../components/landing/CTASection";
import FAQSection from "../components/landing/FAQSection";
import Footer from "../components/landing/Footer";
import Hero from "../components/landing/Hero";
import InternationalExpansion from "../components/landing/InternationalExpansion";
import Nav from "../components/landing/Nav";
import PricingSection from "../components/landing/PricingSection";
import Problem from "../components/landing/Problem";
import RadarSection from "../components/landing/RadarSection";
import RoadmapSection from "../components/landing/RoadmapSection";
import Security from "../components/landing/Security";
import Solutions from "../components/landing/Solutions";
import TestimonialsSection from "../components/landing/TestimonialsSection";


export default function Home() {
  return (
    <div className="min-h-screen m-auto w-[1000px] bg-zinc-50 font-sans dark:bg-black">
      <Nav />
      <main className="">
        <Hero/>
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
