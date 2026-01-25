export default function Services() {
  const services = [
    { title: "Vehicle Supply", text: "Pickups and SUVs for business, institutional, and project use." },
    { title: "Fleet & Project Support", text: "Support for bulk supply and project delivery requirements." },
    { title: "Trusted Sourcing", text: "Strong supplier networks to support reliable sourcing and delivery." }
  ];

  return (
    <section className="section">
      <div className="container stack">
        <h2>What We Do</h2>
        <div className="grid-3">
          {services.map((s) => (
            <div key={s.title} className="card">
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
