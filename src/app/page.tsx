import CodePlayground from "../components/CodePlayground";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import PricingSection from "../components/PricingSection";
import Problem from "../components/Problem";
import Security from "../components/Security";
import Solutions from "../components/Solutions";


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
      </main>
    </div>
  );
}
