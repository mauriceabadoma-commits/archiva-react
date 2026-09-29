import { useState } from "react";

const EMPTY_FORM = { name: "", email: "", message: "" };

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // efface l'erreur pendant la correction
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = {
      email: isValidEmail(form.email) ? "" : "Veuillez saisir une adresse email valide.",
      message: form.message.trim() === "" ? "Le message ne peut pas être vide." : "",
    };
    setErrors(nextErrors);

    const hasError = Object.values(nextErrors).some(Boolean);
    if (!hasError) {
      setSent(true); // rendu conditionnel : bascule vers le message de succès
    }
  }

  return (
    <section className="container py-5">
      <h1 className="h4 fw-bold">Contactez-nous</h1>
      <p className="text-muted" style={{ maxWidth: "60ch" }}>
        Une question, une suggestion, un CER à proposer ? Écrivez-nous.
      </p>

      <div className="card border-0 shadow-sm mx-auto" style={{ maxWidth: 720 }}>
        <div className="card-body p-4">
          {sent ? (
            <p className="alert alert-success mb-0" role="status">
              Merci ! Votre message a bien été pris en compte.
            </p>
          ) : (
            <form className="d-grid gap-3" onSubmit={handleSubmit} noValidate>
              <div>
                <label className="form-label" htmlFor="name">Nom complet</label>
                <input
                  className="form-control"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  autoComplete="name"
                  required
                />
              </div>

              <div>
                <label className="form-label" htmlFor="email">Email</label>
                <input
                  className={`form-control${errors.email ? " is-invalid" : ""}`}
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Entrer votre email"
                  autoComplete="email"
                  required
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>

              <div>
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  className={`form-control${errors.message ? " is-invalid" : ""}`}
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Votre message"
                  required
                />
                {errors.message && <div className="invalid-feedback">{errors.message}</div>}
              </div>

              <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-primary text-white">
                  Envoyer le message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
