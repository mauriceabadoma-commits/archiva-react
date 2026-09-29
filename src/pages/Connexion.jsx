import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Connexion() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Pas de vrai backend d'authentification dans ce prosit : on simule.
    navigate("/");
  }

  return (
    <div className="auth-gradient d-flex align-items-center justify-content-center py-5">
      <div className="card border-0 shadow rounded-4 p-4 p-md-5" style={{ maxWidth: 480, width: "100%" }}>
        <h1 className="h3 fw-bold text-center mb-4">Se connecter</h1>

        <form className="d-grid gap-3" onSubmit={handleSubmit}>
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
            <label className="form-label" htmlFor="password">Mot de passe</label>
            <input
              className="form-control"
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Entrer votre mot de passe"
              autoComplete="current-password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary text-white btn-lg">
            Se connecter
          </button>

          <p className="text-center small mb-0">
            Vous n'avez pas de compte ?{" "}
            <Link to="/inscription" className="fw-semibold">Créez un nouveau compte</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
