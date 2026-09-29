import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Inscription() {
  const [form, setForm] = useState({ nom: "", email: "", niveau: "X1", password: "" });
  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/connexion");
  }

  return (
    <div className="auth-gradient d-flex align-items-center justify-content-center py-5">
      <div className="card border-0 shadow rounded-4 p-4 p-md-5" style={{ maxWidth: 480, width: "100%" }}>
        <h1 className="h3 fw-bold text-center mb-4">Créer un compte</h1>

        <form className="d-grid gap-3" onSubmit={handleSubmit}>
          <div>
            <label className="form-label" htmlFor="nom">Nom complet</label>
            <input
              className="form-control"
              id="nom"
              name="nom"
              value={form.nom}
              onChange={handleChange}
              placeholder="Nom complet"
              autoComplete="name"
              required
            />
          </div>

          <div>
            <label className="form-label" htmlFor="email">Email</label>
            <input
              className="form-control"
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Entrer votre email"
              autoComplete="email"
              required
            />
          </div>

          <div>
            <label className="form-label" htmlFor="niveau">Niveaux</label>
            <select
              className="form-select"
              id="niveau"
              name="niveau"
              value={form.niveau}
              onChange={handleChange}
            >
              <option value="X1">X1</option>
              <option value="X2">X2</option>
              <option value="X3">X3</option>
            </select>
          </div>

          <div>
            <label className="form-label" htmlFor="password">Mot de passe</label>
            <input
              className="form-control"
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Entrer votre mot de passe"
              autoComplete="new-password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary text-white btn-lg">
            Créer un compte
          </button>

          <p className="text-center small mb-0">
            Vous avez déjà un compte ?{" "}
            <Link to="/connexion" className="fw-semibold">Connectez-vous</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
