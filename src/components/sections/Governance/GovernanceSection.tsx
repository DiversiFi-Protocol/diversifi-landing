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

            <p className={styles.subtitle}>
              DFI token holders participate in treasury management and protocol
              decisions.
            </p>

            <p className={styles.disclaimer}>
              *DFI tokens provide governance rights only - not for investment or
              speculation.
            </p>

            <div>
              <button className={styles.ctaButton}>
                Subscribe for Updates
              </button>
            </div>
          </div>

          <div className={styles.rightContent}>
            <div className="space-y-6">
              <div>
                <h3 className={styles.listTitle}>VOTE ON</h3>
              </div>

              <div>
                <h3 className={styles.listTitle}>VOTE VIA</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
