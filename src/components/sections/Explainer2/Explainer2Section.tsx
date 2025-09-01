import styles from "./Explainer2Section.module.scss";

export default function Explainer2Section() {
  return (
    <section id="for-defi" className={styles.section}>
      {/* Overlay for top half */}
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Side - Content */}
          <div className={styles.leftContent}>
            <span className={styles.badge}>FOR DEFI PROTOCOLS</span>

            <h2 className={styles.title}>
              The Reserve Asset DeFi Actually Needs
            </h2>

            <div className={styles.contentSection}>
              <div className={styles.challengeSection}>
                <h3 className={styles.sectionTitle}>THE CHALLENGE:</h3>
                <p className={styles.sectionText}>
                  Traditional stablecoins lack the stability and transparency
                  that DeFi protocols require. Single-point failures and opaque
                  operations put your users' funds at risk.
                </p>
              </div>

              <div className={styles.solutionSection}>
                <h3 className={styles.sectionTitle}>OUR SOLUTION:</h3>
                <p className={styles.sectionText}>
                  DiversiFi provides institutional-grade stability with complete
                  transparency. Our multi-collateral approach and automated risk
                  management ensure your protocol always has access to reliable
                  reserves.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className={styles.ctaButtons}>
              <button className={styles.primaryButton}>
                Start Integration
              </button>
              <button className={styles.secondaryButton}>Schedule Demo</button>
            </div>
          </div>

          {/* Right Side - Visual Element */}
          <div className={styles.rightSide}>
            <div className={styles.visualElement}>
              <div className={styles.visualContent}>
                <div className={styles.iconContainer}>
                  <svg
                    className={styles.icon}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className={styles.visualText}>DeFi Integration Ready</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
