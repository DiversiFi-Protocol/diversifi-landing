"use client";

import { useState } from "react";
import styles from "./Header.module.scss";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NAV_ITEMS = [
    {
      label: "How it works",
      href: "#how-it-works",
    },
    {
      label: "For DeFi Protocols",
      href: "#for-defi",
    },
    {
      label: "For Institutions",
      href: "#for-institutions",
    },
    {
      label: "Governance",
      href: "#governance",
    },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.navContainer}>
          {/* Logo */}
          <div className={styles.logoContainer}>
            <div className={styles.logoWrapper}>
              <a href="/">
                <img
                  src="/brand/logo-text.svg"
                  alt="DiversiFi"
                  className={styles.logo}
                />
              </a>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav}>
            {NAV_ITEMS.map((item, idx) => (
              <a key={idx} href={item.href} className={styles.navLink}>
                {item.label}
              </a>
            ))}

            {/* CTA Button */}
            <div>
              <button className={styles.ctaButton}>Integrate DiversiFi</button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className={styles.mobileMenuButton}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={styles.menuButton}
            >
              <svg
                className={styles.menuIcon}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={styles.mobileNav}>
            <div className={styles.mobileNavContent}>
              <a href="#how-it-works" className={styles.mobileNavLink}>
                How it works
              </a>
              <a href="#for-defi" className={styles.mobileNavLink}>
                For DeFi Protocols
              </a>
              <a href="#for-institutions" className={styles.mobileNavLink}>
                For Institutions
              </a>
              <a href="#governance" className={styles.mobileNavLink}>
                Governance
              </a>
              <div className={styles.mobileCtaContainer}>
                <button className={styles.mobileCtaButton}>
                  Launch App
                </button>
              </div>
              <div className={styles.mobileCtaContainer}>
                <button className={styles.mobileCtaButton}>
                  Docs
                </button>
              </div>
              <div className={styles.mobileCtaContainer}>
                <button className={styles.mobileCtaButton}>
                  Incentives 
                  {/* link to: https://app.merkl.xyz/?search=DFiUSD&sort=tvl-desc&tokenType=all */}
                </button>
              </div>
              
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
