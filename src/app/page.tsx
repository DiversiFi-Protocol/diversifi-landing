import Header from "@/components/Header/Header";
import HeroSection from "@/components/sections/HeroSection/HeroSection";
import Explainer1Section from "@/components/sections/Explainer1/Explainer1Section";
import GovernanceSection from "@/components/sections/Governance/GovernanceSection";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.scss";
import Explainer2Section from "@/components/sections/Explainer2/Explainer2Section";
import Explainer3Section from "@/components/sections/Explainer3/Explainer3Section";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />

      <HeroSection />
      <Explainer1Section />
      <Explainer2Section />
      <Explainer3Section />
      <GovernanceSection />

      <Footer />
    </main>
  );
}
