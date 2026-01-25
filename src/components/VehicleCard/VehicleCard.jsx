import styles from "./VehicleCard.module.scss";

export default function VehicleCard({ brand, name, years, type, image }) {
  return (
<div className={styles.card}>

      <div className={styles.imageWrap}>
        <img
          src={image}
          alt={`${brand} ${name}`}
          loading="lazy"
        />
      </div>

      <div className={styles.body}>
        <div className={styles.top}>
          <span className="badge">{brand}</span>
          <span className={styles.type}>{type}</span>
        </div>

        <h3 className={styles.title}>{name}</h3>
        <p className={styles.meta}>{years}</p>
      </div>
    </div>
  );
}
