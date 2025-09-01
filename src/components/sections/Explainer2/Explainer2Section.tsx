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
                DeFi protocols require. Single-point failures and opaque
                operations put your users' funds at risk.
              </p>
            </div>
          </div>
          <div className={styles.bottomContent}>
            <div className={styles.contentSection}>
              <div className={styles.solutionSection}>
                <h3 className={styles.sectionTitle}>OUR SOLUTION:</h3>
                <p className={styles.sectionText}>
                  We reduce risk with real-tie monitoring, improve efficiency
                  through automated rebalancing, and scale seamlessly with
                  multichain integration.
                </p>
                <div className={styles.additionalSolutionContnet}>
                  <div className={styles.borderLeft}>
                    <p>
                      We bring together risk reduction, professional management,
                      and DeFi-native design to deliver a resilient and
                      efficient system.
                    </p>

                    <p>
                      Our approach combines downside protection, automated
                      rebalancing with stress testing, and API-first
                      architecture to ensure long-term stability and seamless
                      interoperability.
                    </p>
                  </div>

                  <div className={styles.ctaButtons}>
                    <button className={styles.primaryButton}>
                      Start Integration
                    </button>
                    <button className={styles.secondaryButton}>
                      Schedule Demo
                    </button>
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
