import PieChartIcon from "@/components/icons/PieChartIcon";
import styles from "./Explainer3Section.module.scss";
import Animated48b from "@/components/icons/48b";
import UserIcon from "@/components/icons/UserIcon";
import CogIcon from "@/components/icons/CogIcon";
import CapitalEfficientIcon from "@/components/icons/CapitalEfficientIcon";

export default function Explainer3Section() {
  const renderCoreBenefits = () => {
    return [
      {
        icon: <PieChartIcon />,
        label: "Risk Management",
        description:
          "Portfolio-based reserves with continuous monitoring.",
      },
      {
        icon: <UserIcon />,
        label: "Compliance Ready",
        description:
          "Transparent reserves, third-party attestations, protocol native enforcement capability.",
      },
      {
        icon: <CogIcon />,
        label: "Robust Infrastructure",
        description:
          "Non-custodial architecture, embedded redundancy, comprehensive audit trails.",
      }
    ].map(({ icon, label, description }) => (
      <div key={label} className={styles.coreBenefitContainer}>
        {icon}
        <div>
          <span>{label}</span>
          <p>{description}</p>
        </div>
      </div>
    ));
  };

  return (
    <section id="for-institutions" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.topRow}>
            <div>
              <h3 className={styles.title}>
                Institutional-Grade Structured Stability
                <span className={styles.super}>™</span>
              </h3>
            </div>

            <div className={styles.metricContainer}>
              <Animated48b className={styles.metricAnimation} />
              <div>
                <span className={styles.metricTitle}>KEY METRICS</span>
                <ul className={styles.metricList}>
                  <li>VaR monitoring (95th/99th percentile)</li>
                  <li>99.999% uptime target</li>
                  <li>T+0 redemption capability</li>
                  <li>Monthly attestations</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.coreBenefits}>
            <span className={styles.coreBenefitsTitle}>CORE BENEFITS:</span>
            {renderCoreBenefits()}
          </div>
        </div>

        <div className={styles.badge}>
          <span className={styles.badgeText}>FOR INSTITUTIONS</span>
        </div>
      </div>
    </section>
  );
}
