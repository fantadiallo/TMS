import { useEffect, useRef } from "react";
import styles from "./Stats.module.scss";

export default function Stats() {
  const items = [
    { icon: "trophy", big: "25+", small: "Years supplying vehicles" },
    { icon: "vehicle", big: "1000+", small: "Vehicles supplied" },
    { icon: "map", big: "West Africa", small: "Regional coverage" }
  ];

  const wrapRef = useRef(null);

  useEffect(() => {
    const root = wrapRef.current;
    if (!root) return;

    const cards = Array.from(root.querySelectorAll(`.${styles.card}`));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      cards.forEach((c) => c.classList.add(styles.in));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add(styles.in);
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  return (
    <section className={`section ${styles.section}`} aria-label="Company statistics">
      <div className="container" ref={wrapRef}>
        <div className={styles.grid}>
          {items.map((s, idx) => (
            <div key={s.small} className={styles.card} style={{ ["--d"]: `${idx * 80}ms` }}>
              <div className={styles.icon} aria-hidden="true">
                <StatIcon name={s.icon} />
              </div>

              <div className={styles.big}>{s.big}</div>
              <div className={styles.small}>{s.small}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatIcon({ name }) {
  if (name === "trophy") {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18">
        <path
          fill="currentColor"
          d="M7 4h10v2h3v3c0 2.2-1.8 4-4 4h-.2A5 5 0 0 1 13 15.7V18h3v2H8v-2h3v-2.3A5 5 0 0 1 8.2 13H8c-2.2 0-4-1.8-4-4V6h3V4Zm-1 4v1c0 1.1.9 2 2 2h.1A5 5 0 0 1 8 8H6Zm12 0a5 5 0 0 1-.1 3H16c1.1 0 2-.9 2-2V8h1Z"
        />
      </svg>
    );
  }

  if (name === "vehicle") {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18">
        <path
          fill="currentColor"
          d="M3 7h12l2 4h3a2 2 0 0 1 2 2v3h-2a2.5 2.5 0 0 1-5 0H9a2.5 2.5 0 0 1-5 0H2V9a2 2 0 0 1 1-2Zm2 2v5h1.1A2.5 2.5 0 0 1 9 12.2V9H5Zm6 0v2.2c.6.3 1.1.8 1.4 1.4H17v-1l-1-2h-5Zm-4 8a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Zm12.5 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" width="18" height="18">
      <path
        fill="currentColor"
        d="M12 2a9 9 0 1 0 0 18a9 9 0 0 0 0-18Zm0 2c1.7 0 3.2.6 4.4 1.6L14 8H10L7.6 5.6A6.9 6.9 0 0 1 12 4Zm-6 8c0-1.6.6-3.1 1.6-4.2L10 10v4l-2.4 2.4A6.9 6.9 0 0 1 6 12Zm6 6a6.9 6.9 0 0 1-4.4-1.6L10 14h4l2.4 2.4A6.9 6.9 0 0 1 12 18Zm4.4-3.6L14 14v-4l2.4-2.4A6.9 6.9 0 0 1 18 12c0 1.6-.6 3.1-1.6 4.4Z"
      />
    </svg>
  );
}
