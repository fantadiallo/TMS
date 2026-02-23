import styles from "./AboutPage.module.scss";
import { Link } from "react-router-dom";

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
              <Link className={styles.primaryBtn} to="/contact">
                Contact us
              </Link>
              <Link className={styles.secondaryBtn} to="/vehicles">
                View vehicles
              </Link>
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
                src="/ToyotaLC_2023-2026.jpeg"
                alt="Vehicle showroom placeholder"
                loading="lazy"
                decoding="async"
              />
              <div className={styles.imageOverlay} />
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
            <h2>Our History</h2>
            <p>
              TMS General Enterprise has been in the supply of motor vehicles for over 25 years under our
              sub-company <strong>OSA Motors</strong>. We have supplied vehicles and equipment to institutions
              across The Gambia and the wider region.
            </p>
          </div>

          <div className={styles.featureGrid}>
            <article className={styles.feature}>
              <h3>Authorized dealership experience</h3>
              <p>
                We were once authorized dealers for Land Rover, Mercedes-Benz, and Massey Ferguson — supplying
                cars, trucks, and tractors to the Government and major projects within The Gambia.
              </p>
            </article>

            <article className={styles.feature}>
              <h3>Regional track record</h3>
              <p>
                Over the last 25 years, we’ve supplied over 1,000 vehicles mainly in The Gambia, and also in
                neighboring countries including Senegal and Guinea-Bissau.
              </p>
            </article>

            <article className={styles.feature}>
              <h3>Global partnerships</h3>
              <p>
                We have strong partners and suppliers within Europe and the Middle East, supporting reliable sourcing
                and competitive pricing across a wide range of makes and models.
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
                We build long-term trust through transparency, responsiveness, and consistent delivery. If something
                isn’t clear, we explain it — simply and directly.
              </p>

              <ul className={styles.list}>
                <li>Clear communication at every step</li>
                <li>Realistic timelines and updates</li>
                <li>Customer-first support</li>
              </ul>

              <div className={styles.ctaRow}>
                <Link className={styles.primaryBtn} to="/contact">
                  Request a quote
                </Link>
                <Link className={styles.secondaryBtn} to="/vehicles">
                  Browse vehicles
                </Link>
              </div>
            </div>

            <div className={styles.splitCardAlt}>
              <h2>Let’s talk</h2>
              <p>Have a vehicle in mind? Send an inquiry and we’ll come back with options and next steps.</p>

              <div className={styles.contactBox}>
                <div className={styles.contactRow}>
                  <span className={styles.contactLabel}>Email</span>
                  <span className={styles.contactValue}>tmsgeneralenterprise@gmail.com</span>
                </div>
                <div className={styles.contactRow}>
                  <span className={styles.contactLabel}>Phone</span>
                  <span className={styles.contactValue}>+220 307 4959 • +220 750 0005</span>
                </div>

                <Link to="/contact" className={styles.primaryBtn}>
                  Go to Contact page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}