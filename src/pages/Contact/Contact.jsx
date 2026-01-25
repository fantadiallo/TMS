import { useMemo, useState } from "react";
import styles from "./ContactPage.module.scss";

const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
const phoneOk = (v) => {
  const digits = v.replace(/[^\d]/g, "");
  if (!digits) return true;
  return digits.length >= 7 && digits.length <= 15;
};

export default function ContactPage() {
  const whatsappNumbers = useMemo(
    () => [
      { label: "WhatsApp", display: "+220 307 4959", wa: "2203074959" },
      { label: "WhatsApp", display: "+220 750 0005", wa: "2207500005" }
    ],
    []
  );

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState({ type: "idle", msg: "" });

  const errors = useMemo(() => {
    const e = {};
    if (!values.name.trim()) e.name = "Please enter your name.";
    if (!values.email.trim()) e.email = "Please enter your email.";
    else if (!emailOk(values.email)) e.email = "Please enter a valid email.";

    if (!phoneOk(values.phone)) e.phone = "Use a valid phone number (7–15 digits).";

    if (values.subject.trim().length > 0 && values.subject.trim().length < 3) {
      e.subject = "Subject should be at least 3 characters (or leave blank).";
    }

    if (!values.message.trim()) e.message = "Please write your message.";
    else if (values.message.trim().length < 20) e.message = "Add a bit more detail (min 20 characters).";

    return e;
  }, [values]);

  const isValid = Object.keys(errors).length === 0;

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((s) => ({ ...s, [name]: value }));
  };

  const onBlur = (e) => {
    setTouched((s) => ({ ...s, [e.target.name]: true }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true, subject: true, message: true });

    if (!isValid) {
      setStatus({ type: "error", msg: "Please fix the highlighted fields." });
      return;
    }

    setStatus({ type: "loading", msg: "Sending…" });

    try {
      await new Promise((r) => setTimeout(r, 650));
      setStatus({ type: "success", msg: "Message received. We’ll get back to you shortly." });
      setValues({ name: "", email: "", phone: "", subject: "", message: "" });
      setTouched({});
    } catch {
      setStatus({ type: "error", msg: "Something went wrong. Please try again." });
    }
  };

  const fieldError = (key) => touched[key] && errors[key];

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <header className={styles.header}>
          <h1>Contact TMS</h1>
          <p>Tell us what you need — vehicles, supply requests, or partnerships. We’ll respond quickly.</p>
          <p className={styles.intro}>
            For faster processing, include vehicle model/year, quantity, destination, and timeline.
          </p>
        </header>

        <div className={styles.grid}>
          <form className={styles.form} onSubmit={onSubmit} noValidate>
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="name">Full name</label>
                <input
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholder="Your name"
                  aria-invalid={!!fieldError("name")}
                />
                {fieldError("name") && <div className={styles.err}>{errors.name}</div>}
              </div>

              <div className={styles.field}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholder="you@email.com"
                  inputMode="email"
                  aria-invalid={!!fieldError("email")}
                />
                {fieldError("email") && <div className={styles.err}>{errors.email}</div>}
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="phone">Phone (optional)</label>
                <input
                  id="phone"
                  name="phone"
                  value={values.phone}
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholder="+220 …"
                  inputMode="tel"
                  aria-invalid={!!fieldError("phone")}
                />
                {fieldError("phone") && <div className={styles.err}>{errors.phone}</div>}
              </div>

              <div className={styles.field}>
                <label htmlFor="subject">Subject (optional)</label>
                <input
                  id="subject"
                  name="subject"
                  value={values.subject}
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholder="Vehicle inquiry, quotation, partnership…"
                  aria-invalid={!!fieldError("subject")}
                />
                {fieldError("subject") && <div className={styles.err}>{errors.subject}</div>}
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={values.message}
                onChange={onChange}
                onBlur={onBlur}
                placeholder="Write your message (include model/year, quantity, destination, timeline)."
                rows={6}
                aria-invalid={!!fieldError("message")}
              />
              {fieldError("message") && <div className={styles.err}>{errors.message}</div>}
            </div>

            {status.type !== "idle" && (
              <div
                className={`${styles.status} ${
                  status.type === "success"
                    ? styles.ok
                    : status.type === "error"
                    ? styles.bad
                    : styles.wait
                }`}
                role="status"
              >
                {status.msg}
              </div>
            )}

            <button className={styles.btn} disabled={status.type === "loading"}>
              {status.type === "loading" ? "Sending…" : "Send message"}
            </button>

            <div className={styles.note}>
              Prefer WhatsApp? Use the contact panel for the fastest response.
            </div>
          </form>

          <aside className={styles.aside}>
            <div className={styles.card}>
              <div className={styles.cardTop}>
                <div>
                  <div className={styles.kicker}>Fastest response</div>
                  <h2>WhatsApp</h2>
                </div>
                <span className={styles.pill}>Online-friendly</span>
              </div>

              <div className={styles.stack}>
                {whatsappNumbers.map((n) => (
                  <a
                    key={n.wa}
                    className={styles.wa}
                    href={`https://wa.me/${n.wa}?text=${encodeURIComponent("Hi TMS, I’d like to inquire about…")}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className={styles.waTitle}>{n.label}</span>
                    <span className={styles.waNumber}>{n.display}</span>
                    <span className={styles.waHint}>Tap to chat</span>
                  </a>
                ))}
              </div>
            </div>

            <div className={styles.card}>
              <h3>Contact details</h3>

              <div className={styles.detail}>
                <span className={styles.dLabel}>Email</span>
                <a className={styles.dValue} href="mailto:tmsgeneralenterprise@gmail.com">
                  tmsgeneralenterprise@gmail.com
                </a>
              </div>

              <div className={styles.detail}>
                <span className={styles.dLabel}>Phone</span>
                <div className={styles.dValue}>
                  <a href="tel:+2203074959">+220 307 4959</a>
                  <span className={styles.sep}>•</span>
                  <a href="tel:+2207500005">+220 750 0005</a>
                </div>
              </div>

              <div className={styles.detail}>
                <span className={styles.dLabel}>Address</span>
                <div className={styles.dValue}>Bertil Harding Highway, Salagie</div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
