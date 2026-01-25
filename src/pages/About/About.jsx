import styles from "./AboutPage.module.scss";

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.copy}>
            <span className={styles.kicker}>About TMS</span>
            <h1 className={styles.title}>Reliable Vehicle Supply for West Africa</h1>
            <p className={styles.lead}>
              We help individuals and businesses source quality vehicles with clarity, speed, and trust.
              From inquiry to delivery, our process is built to keep things simple and reliable.
            </p>

            <div className={styles.ctaRow}>
              <a className={styles.primaryBtn} href="/contact">
                Contact us
              </a>
              <a className={styles.secondaryBtn} href="/vehicles">
                View vehicles
              </a>
            </div>

            <div className={styles.quickGrid}>
              <div className={styles.quickCard}>
                <div className={styles.quickBig}>25+</div>
                <div className={styles.quickSmall}>Years experience</div>
              </div>
              <div className={styles.quickCard}>
                <div className={styles.quickBig}>1000+</div>
                <div className={styles.quickSmall}>Vehicles supplied</div>
              </div>
              <div className={styles.quickCard}>
                <div className={styles.quickBig}>West Africa</div>
                <div className={styles.quickSmall}>Regional coverage</div>
              </div>
            </div>
          </div>

          <div className={styles.media}>
            <div className={styles.imageFrame} aria-label="Company image placeholder">
              <img
                className={styles.image}
                src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1400&q=70"
                alt="Vehicle showroom placeholder"
                loading="lazy"
                decoding="async"
              />
              <div className={styles.imageOverlay} />
              <div className={styles.imageBadge}>Placeholder image</div>
            </div>

            <div className={styles.miniCards}>
              <div className={styles.miniCard}>
                <div className={styles.miniTitle}>Fast quotes</div>
                <div className={styles.miniText}>Clear pricing and timelines.</div>
              </div>
              <div className={styles.miniCard}>
                <div className={styles.miniTitle}>Trusted sourcing</div>
                <div className={styles.miniText}>Verified suppliers and checks.</div>
              </div>
              <div className={styles.miniCard}>
                <div className={styles.miniTitle}>Smooth delivery</div>
                <div className={styles.miniText}>We guide the full process.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionTitle}>
            <h2>What we do</h2>
            <p>
              We supply vehicles for personal use, businesses, and fleet needs — with support across selection,
              documentation, and delivery coordination.
            </p>
          </div>

          <div className={styles.featureGrid}>
            <article className={styles.feature}>
              <h3>Vehicle sourcing</h3>
              <p>
                Tell us your budget and requirements. We recommend options and help you choose the right fit.
              </p>
            </article>
            <article className={styles.feature}>
              <h3>Inspection & assurance</h3>
              <p>
                We prioritize quality checks and clear communication so you know exactly what you’re getting.
              </p>
            </article>
            <article className={styles.feature}>
              <h3>Delivery support</h3>
              <p>
                From planning to handover, we help coordinate the process for a smooth, reliable delivery.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.split}`}>
        <div className={styles.sectionInner}>
          <div className={styles.splitGrid}>
            <div className={styles.splitCard}>
              <h2>Our promise</h2>
              <p>
                We build long-term trust through transparency, responsiveness, and consistent delivery.
                If something isn’t clear, we explain it — simply and directly.
              </p>

              <ul className={styles.list}>
                <li>Clear communication at every step</li>
                <li>Realistic timelines and updates</li>
                <li>Customer-first support</li>
              </ul>
            </div>

            <div className={styles.splitCardAlt}>
              <h2>Let’s talk</h2>
              <p>
                Have a vehicle in mind? Send an inquiry and we’ll come back with options and next steps.
              </p>

              <div className={styles.contactBox}>
                <div className={styles.contactRow}>
                  <span className={styles.contactLabel}>Email</span>
                  <span className={styles.contactValue}>tmsgeneralenterprise@gmail.com</span>
                </div>
                <div className={styles.contactRow}>
                  <span className={styles.contactLabel}>Phone</span>
                  <span className={styles.contactValue}>+220 307 4959 • +220 750 0005</span>
                </div>
                <a className={styles.primaryBtn} href="/contact">
                  Go to Contact page
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
