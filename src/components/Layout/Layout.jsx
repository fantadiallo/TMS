import { Outlet } from "react-router-dom";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import styles from "./Layout.module.scss";

export default function Layout() {
  return (
    <div className={styles.layout}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
