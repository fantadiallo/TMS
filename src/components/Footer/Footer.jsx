import styles from "./Footer.module.scss";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <div className={styles.brand}>TMS General Enterprise</div>
            <div className={styles.meta}>
              Bertil Harding Highway, Salagie ·{" "}
              <a href="mailto:tmsgeneralenterprise@gmail.com">tmsgeneralenterprise@gmail.com</a>
            </div>
          </div>

          <div className={styles.right}>
            <a href="tel:+2203074959" className={styles.link}>Call</a>
            <a href="https://wa.me/2203074959" className={styles.link} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a href="tel:+2207500005" className={styles.link}>Alt</a>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {year} TMS General Enterprise</span>
      <span className={styles.credit}>© {year} · Built by FatoMbodj</span>

        </div>
      </div>
    </footer>
  );
}
