import { DOC_LINK, SOCIAL_LINKS } from "@/constants/links";
import DiscordIcon from "../icons/DiscordIcon";
import TwitterIcon from "../icons/TwitterIcon";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Logo and Description */}
          <div className={styles.logoSection}>
            <img
              src="/brand/logo-text.svg"
              alt="DiversiFi"
              className={styles.logo}
            />
          </div>

          {/* Navigation Links */}
          <div className={styles.navSection}>
            <h4 className={styles.sectionTitle}>Resources</h4>
            <ul className={styles.navList}>
              <li>
                <a href={DOC_LINK} className={styles.navLink}>
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className={styles.navLink}>
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className={styles.socialSection}>
            <h4 className={styles.sectionTitle}>Connect</h4>
            <div className={styles.socialLinks}>
              <a href={SOCIAL_LINKS.discord} className={styles.socialLink}>
                <DiscordIcon className={styles.socialIcon} />
              </a>
              <a href={SOCIAL_LINKS.twitter} className={styles.socialLink}>
                <TwitterIcon className={styles.socialIcon} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © 2025 DiversiFi. All rights reserved.
          </p>
          <div className={styles.bottomLinks}>
            <a href="#" className={styles.bottomLink}>
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
