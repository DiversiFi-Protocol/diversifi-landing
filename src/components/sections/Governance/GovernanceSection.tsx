import { MERKL_LINK } from "@/constants/links";
import styles from "./GovernanceSection.module.scss";

export default function GovernanceSection() {
  return (
    <section id="governance" className={styles.section}>
      <div className={styles.overlay} />
      <div className={styles.badge}>
        <h3 className={styles.badgeText}>GOVERNANCE</h3>
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.leftContent}>
            <h2 className={styles.title}>
              Community-Driven Protocol Governance
            </h2>

            <div className={styles.subtitleContainer}>
              <p className={styles.subtitle}>
                DFI token holders participate in treasury management and
                protocol decisions.
              </p>

              <p className={styles.disclaimer}>
                *DFI tokens provide governance rights only - not for investment
                or speculation.
              </p>
            </div>

            <div>
              <button className={styles.ctaButton}>
                Subscribe for Updates
              </button>
              <a
                href={MERKL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.incentivesLink}
              >
                View incentives →
              </a>
            </div>
          </div>

          <div className={styles.rightContent}>
            <div className="space-y-6">
              <div className={styles.listContainer}>
                <h3 className={styles.listTitle}>VOTE ON:</h3>
                <ul>
                  <li>Reserve composition strategies</li>
                  <li>Protocol parameters</li>
                  <li>Administrative decisions</li>
                </ul>
              </div>

              <div className={styles.listContainer}>
                <h3 className={styles.listTitle}>VOTE VIA:</h3>
                <ul>
                  <li>Direct voting</li>
                  <li>Delegation to community members</li>
                  <li>On-chain proposal process</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
