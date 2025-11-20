"use client";

import { useState } from "react";
import styles from "./Header.module.scss";
import { APP_LINK, DOC_LINK, MERKL_LINK } from "@/constants/links";
import Link from "next/link";
import { NavigateOutDialog } from "../Dialogs/NavigateOutDialog/NavigateOutDialog";

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
              <Link href="/">
                <img
                  src="/brand/logo-text.svg"
                  alt="DiversiFi"
                  className={styles.logo}
                />
              </Link>
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
              <NavigateOutDialog href={APP_LINK}>
                <button className={styles.ctaButton}>Launch App</button>
              </NavigateOutDialog>
            </div>
            {/* Merkl link */}
            <div>
              <NavigateOutDialog href={MERKL_LINK}>
                <button className={styles.ctaButton}>Incentives</button>
              </NavigateOutDialog>            
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
                <NavigateOutDialog href={APP_LINK}>
                  <button className={styles.mobileCtaButton}>Launch App</button>
                </NavigateOutDialog>
              </div>
              <div className={styles.mobileCtaContainer}>
                <NavigateOutDialog href={DOC_LINK}>
                  <button className={styles.mobileCtaButton}>Docs</button>
                </NavigateOutDialog>
              </div>
              <div className={styles.mobileCtaContainer}>
                <NavigateOutDialog href={MERKL_LINK}>
                  <button className={styles.mobileCtaButton}>Incentives</button>
                </NavigateOutDialog>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
