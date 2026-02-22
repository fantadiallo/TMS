import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <NavLink to="/" className={styles.brand} aria-label="TMS General Enterprise home">
            <img
              src="/TMS1.png"
              alt="TMS General Enterprise logo"
              className={styles.logo}
            />
            <span className={styles.brandText}>
              <span className={styles.brandTitle}>TMS</span>
              <span className={styles.brandSub}>General Enterprise</span>
            </span>
          </NavLink>

          <nav className={styles.nav} aria-label="Primary">
         <NavLink
  to="/"
  end
  className={styles.link}
>
  Home
</NavLink>

            <NavLink to="/vehicles" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}>
              Vehicles
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}>
              About
            </NavLink>
            <NavLink to="/contact" className={`${styles.link} ${styles.cta}`}>
              Contact
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
