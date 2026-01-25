import { NavLink } from "react-router-dom";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <img
        src="/heroimage.jpg"
        alt="Fleet of Toyota and Mitsubishi vehicles supplied across West Africa"
        className={styles.heroImage}
        loading="eager"
        fetchpriority="high"
      />

      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.accentGlow} aria-hidden="true" />

      <div className={`${styles.content} container`}>
        <div className={styles.grid}>
          <div className={`${styles.left} stack`}>
            <h1 id="hero-title" className={styles.title}>
              Vehicle Supply for Institutions & Businesses in Africa
            </h1>

            <p className={styles.lead}>
              Trusted vehicle sourcing and supply across West Africa with long-standing experience in
              the industry.
            </p>

            <div className={styles.actions}>
              <NavLink to="/contact" className={`btn ${styles.primaryBtn}`}>
                Request a Quote
              </NavLink>
              <NavLink to="/vehicles" className={`btn ${styles.outlineBtn}`}>
                View Vehicles
              </NavLink>
            </div>

            <div className={styles.trust} aria-label="Company highlights">
              <span className={styles.trustItem}>25+ years</span>
              <span className={styles.dot} aria-hidden="true" />
              <span className={styles.trustItem}>1000+ vehicles</span>
              <span className={styles.dot} aria-hidden="true" />
              <span className={styles.trustItem}>West Africa coverage</span>
            </div>
          </div>

          <div className={styles.card}>
            <span className={styles.badge}>Government & Business Supply</span>
            <h2 className={styles.cardTitle}>Toyota & Mitsubishi</h2>
            <p className={styles.cardText}>
              Fleet-ready pickups and SUVs, with other makes available on request.
            </p>

            <div className={styles.cardActions}>
              <a
                className={styles.whatsapp}
                href="https://wa.me/2203074959"
                target="_blank"
                rel="noreferrer"
                aria-label="Chat on WhatsApp"
              >
                WhatsApp
              </a>

              <NavLink to="/contact" className={styles.link}>
                Get a quote →
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
