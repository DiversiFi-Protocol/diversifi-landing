import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import Explainer1Section from "@/components/sections/Explainer1Section";
import Explainer2Section from "@/components/sections/Explainer2Section";
import Explainer3Section from "@/components/sections/Explainer3Section";
import Explainer4Section from "@/components/sections/Explainer4Section";
import GovernanceSection from "@/components/sections/GovernanceSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      <HeroSection />
      <Explainer1Section />
      <Explainer2Section />
      <Explainer3Section />
      <Explainer4Section />
      <GovernanceSection />

      <Footer />
    </main>
  );
}
