import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <NavLink to="/" className={styles.brand}>
            <span className={styles.logo}>TMS</span>
            <span className={styles.name}>General Enterprise</span>
          </NavLink>

          <nav className={styles.nav}>
            <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ""}>
              Home
            </NavLink>
            <NavLink to="/vehicles" className={({ isActive }) => isActive ? styles.active : ""}>
              Vehicles
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ""}>
              About
            </NavLink>
            <NavLink to="/contact" className={styles.cta}>
              Contact
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
