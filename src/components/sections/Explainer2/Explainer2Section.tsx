import { SCHEDULE_DEMO_LINK } from "@/constants/links";
import styles from "./Explainer2Section.module.scss";

export default function Explainer2Section() {
  return (
    <section id="for-defi" className={styles.section}>
      {/* Overlay for top half */}
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.topContent}>
            <h2 className={styles.title}>
              The Reserve Asset
              <br /> DeFi Actually Needs
            </h2>

            <div className={styles.challengeSection}>
              <h3 className={styles.sectionTitle}>THE CHALLENGE:</h3>
              <p className={styles.sectionText}>
                Traditional stablecoins lack the stability and transparency that
                DeFi protocols require, single-point failures and opaque
                operations put users' funds at risk.
              </p>
            </div>
          </div>
          <div className={styles.bottomContent}>
            <div className={styles.contentSection}>
              <div className={styles.solutionSection}>
                <h3 className={styles.sectionTitle}>THE SOLUTION:</h3>
                <p className={styles.sectionText}>
                  DiversiFi is an innovative stablecoin protocol designed to achieve risk reduction via 
                  real-time monitoring, improve efficiency
                  through automated rebalancing, and scale seamlessly with
                  multichain integration.
                </p>
                <div className={styles.additionalSolutionContnet}>

                  <div className={styles.ctaButtons}>
                    <a
                      href={SCHEDULE_DEMO_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className={styles.secondaryButton}>
                        Schedule Demo
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.badge}>
        <h3 className={styles.badgeText}>FOR DEFI PROTOCOLS</h3>
      </div>
    </section>
  );
}
