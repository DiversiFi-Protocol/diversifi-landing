"use client";

import AuditShield from "@/components/icons/AuditShield";
import InstitutionalShield from "@/components/icons/InstitutionalShield";
import styles from "./HeroSection.module.scss";
import { DOC_LINK } from "@/constants/links";
import { NavigateOutDialog } from "@/components/Dialogs/NavigateOutDialog";

export default function HeroSection() {
  return (
    <section id="hero" className={styles.section}>
      <video autoPlay loop muted playsInline className={styles.videoBackground}>
        <source src="/videos/hero-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.leftContent}>
            <div className={styles.labels}>
              <span className={styles.label}>DFIUSD</span>
              <span className={styles.badge}>
                <AuditShield className={styles.badgeIcon} />
                Security Audited
              </span>
              <span className={styles.badge}>
                <InstitutionalShield className={styles.badgeIcon} />
                Institutional-Grade Risk Management
              </span>
            </div>

            <h1 className={styles.title}>
              Structured
              <br />
              <span className={styles.primaryText}>Stability</span>
            </h1>

            <p className={styles.subtitle}>
              The engineered stablecoin that DeFi protocols trust as their
              preferred reserve asset.
            </p>

            <div className={styles.ctaButtons}>
              <button className={styles.primaryButton}>
                Integrate DiversiFi
              </button>
              <NavigateOutDialog href={DOC_LINK}>
                <button className={styles.secondaryButton}>
                  View Documentation
                </button>
              </NavigateOutDialog>
            </div>

            <p className={styles.additionalInfo}>
              DiversiFi reduces single-asset risk by backing each DFiUSD token
              1:1 with a diversified basket of USD-pegged stablecoins. This
              multi-collateral approach creates a more resilient reserve
              designed to minimize depegging risks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
