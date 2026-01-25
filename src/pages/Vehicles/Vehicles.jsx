import VehicleCard from "../../components/VehicleCard/VehicleCard";
import styles from "./Vehicles.module.scss";
import { products } from "../../data/products";

export default function VehiclesPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className="stack">
              <h1 className={styles.title}>Vehicles</h1>
              <p className={styles.lead}>
                Explore fleet-ready pickups and SUVs supplied across West Africa. Request a quote with your
                preferred model and year range.
              </p>

              <div className={styles.actions}>
                <a className="btn btn-primary" href="https://wa.me/2203074959" target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
                <a className="btn btn-outline" href="tel:+2203074959">
                  Call
                </a>
              </div>
            </div>

            <div className={styles.info}>
              <div className={styles.infoRow}>
                <span className={styles.pill}>Toyota</span>
                <span className={styles.pill}>Mitsubishi</span>
                <span className={styles.pill}>Other makes on request</span>
              </div>
              <div className={styles.note}>Serving The Gambia, Senegal, and Guinea-Bissau.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.toolbar}>
            <div>
              <div className={styles.count}>
                <span className={styles.countNum}>{products.length}</span> vehicles available
              </div>
              <div className={styles.countSub}>
                Fleet pricing available on request • Fast quotes via WhatsApp
              </div>
            </div>

            <div className={styles.filters}>
              <a className={styles.filter} href="#toyota">
                Toyota
              </a>
              <a className={styles.filter} href="#mitsubishi">
                Mitsubishi
              </a>
            </div>
          </div>

          <h2 id="toyota" className={styles.h2}>
            Toyota
          </h2>
          <div className={styles.grid}>
            {products
              .filter((p) => p.brand.toLowerCase() === "toyota")
              .map((p) => (
                <VehicleCard key={p.id} {...p} />
              ))}
          </div>

          <h2 id="mitsubishi" className={styles.h2}>
            Mitsubishi
          </h2>
          <div className={styles.grid}>
            {products
              .filter((p) => p.brand.toLowerCase() === "mitsubishi")
              .map((p) => (
                <VehicleCard key={p.id} {...p} />
              ))}
          </div>

          <div className={styles.bottomCta}>
            <div className={styles.ctaCard}>
              <div className="stack">
                <h3 className={styles.ctaTitle}>Need a quote?</h3>
                <p className={styles.ctaText}>
                  Send the model name and preferred year range. We’ll confirm availability and pricing.
                </p>
              </div>

              <div className={styles.ctaActions}>
                <a className="btn btn-primary" href="https://wa.me/2203074959" target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
                <a className="btn btn-outline" href="mailto:tmsgeneralenterprise@gmail.com">
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
