import styles from "./Footer.module.scss";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.top}>
          <div className={styles.brandBlock}>
            <div className={styles.brand}>TMS General Enterprise</div>
            <p className={styles.desc}>
              Reliable vehicle supply for West Africa — trusted sourcing, clear communication, smooth delivery.
            </p>
          </div>

          <div className={styles.block}>
            <div className={styles.title}>Contact</div>

            <div className={styles.line}>
              <span className={styles.label}>Address</span>
              <span className={styles.value}>Bertil Harding Highway, Salagie</span>
            </div>

            <div className={styles.line}>
              <span className={styles.label}>Email</span>
              <a className={styles.valueLink} href="mailto:tmsgeneralenterprise@gmail.com">
                tmsgeneralenterprise@gmail.com
              </a>
            </div>

            <div className={styles.line}>
              <span className={styles.label}>Phone</span>
              <span className={styles.value}>
                +220 307 4959 <span className={styles.sep}>•</span> +220 750 0005
              </span>
            </div>

            <div className={styles.actions}>
              <a className={styles.actionLink} href="tel:+2203074959">
                Call
              </a>
              <a
                className={`${styles.actionLink} ${styles.whatsapp}`}
                href="https://wa.me/2203074959"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className={styles.block}>
            <div className={styles.title}>Quick links</div>
            <nav className={styles.links}>
              <a href="/" className={styles.link}>
                Home
              </a>
              <a href="/vehicles" className={styles.link}>
                Vehicles
              </a>
              <a href="/about" className={styles.link}>
                About
              </a>
              <a href="/contact" className={styles.link}>
                Contact
              </a>
            </nav>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {year} TMS General Enterprise</span>
          <span className={styles.credit}>Built by FatoMbodj</span>
        </div>
      </div>
    </footer>
  );
}
