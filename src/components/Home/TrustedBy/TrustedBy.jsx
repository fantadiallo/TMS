export default function TrustedBy() {
  const clients = [
    "MRC",
    "Ministry of Agriculture",
    "Ministry of Health",
    "EU Commission",
    "Gambia Government"
  ];

  return (
    <section className="section">
      <div className="container stack">
        <h2>Trusted by Institutions</h2>
        <p className="lead">We supply vehicles to institutions and businesses across the region.</p>

        <div className="grid-3">
          {clients.map((c) => (
            <div key={c} className="card">
              <h3>{c}</h3>
            </div>
          ))}
        </div>

        <div className="card">
          <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <div>
              <h3 style={{ margin: 0 }}>Need a quote?</h3>
              <p style={{ marginTop: 6 }}>Tell us the model and year range — we’ll confirm availability.</p>
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a className="btn btn-primary" href="/contact">Contact</a>
              <a className="btn btn-outline" href="https://wa.me/2203074959" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
