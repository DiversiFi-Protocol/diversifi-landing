import Header from "@/components/Header/Header";
import HeroSection from "@/components/sections/HeroSection/HeroSection";
import Explainer1Section from "@/components/sections/Explainer1/Explainer1Section";
import CombinedSections from "@/components/sections/CombinedSections/CombinedSections";
import Explainer4Section from "@/components/sections/Explainer4/Explainer4Section";
import GovernanceSection from "@/components/sections/Governance/GovernanceSection";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />

      <HeroSection />
      <Explainer1Section />
      <CombinedSections />
      <Explainer4Section />
      <GovernanceSection />

      <Footer />
    </main>
  );
}
