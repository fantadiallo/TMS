import { NavLink } from "react-router-dom";
import { products } from "../../../data/products.js";
import VehicleGrid from "../../VehicleGrid/VehicleGrid.jsx";
import styles from "./featured.module.scss";
export default function FeaturedVehicles() {
  const featured = products.slice(0, 6);

  return (
    <section className="section">
      <div className="container stack">
        <h2>Featured Vehicles</h2>
        <p className="lead">Popular options for projects, fleets, and institutional use.</p>
        <VehicleGrid items={featured} />
        <NavLink to="/vehicles" className={styles.Vbtn}>
          View All Vehicles
        </NavLink>
      </div>
    </section>
  );
}
