import Animated48a from "@/components/icons/48a";
import styles from "./Explainer1Section.module.scss";

export default function Explainer1Section() {
  return (
    <section id="how-it-works" className={styles.section}>
      <div className={styles.innerContainer}>
        <div className={styles.container}>
          <div className={styles.leftColumn}>
            <div className={styles.animationContainer}>
              <Animated48a className={styles.animation} />
            </div>

            <h2 className={styles.title}>
              Designed for
              <br />
              Enhanced Stability
            </h2>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.featureList}>
              <div className={styles.featureItem}>
                <div className={styles.featureContent}>
                  <h4 className={styles.featureTitle}>
                    Multi-Collateral Diversification
                  </h4>
                  <ul className={styles.list}>
                    <li>
                      Spreads reserves across multiple high-quality stablecoins,
                      reducing the impact of a failure of a single reserve asset.
                    </li>
                  </ul>
                </div>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.featureContent}>
                  <h4 className={styles.featureTitle}>
                    Transparent Infrastructure
                  </h4>
                  <ul className={styles.list}>
                    <li>
                      All operations are visible on-chain with real-time
                      reporting and regular audits ensuring complete
                      transparency.
                    </li>
                  </ul>
                </div>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.featureContent}>
                  <h4 className={styles.featureTitle}>Designed for resiliency</h4>
                  <ul className={styles.list}>
                    <li>Continuous minting and redemption</li>
                    <li>Emergency rebalancing protocols</li>
                    <li>Protocol embedded overcollateralization (105% target)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.badge}>
            <h3 className={styles.badgeText}>HOW IT WORKS</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
