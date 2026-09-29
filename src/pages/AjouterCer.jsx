import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMyCers } from "../context/MyCersContext.jsx";

const EMPTY_FORM = { title: "", level: "X1", description: "" };

export default function AjouterCer() {
  const { addCer } = useMyCers();
  const navigate = useNavigate();

  // Un seul objet d'état pour tout le formulaire : un formulaire "contrôlé".
  const [form, setForm] = useState(EMPTY_FORM);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    addCer({ title: form.title, level: form.level, description: form.description, author: "Vous" });
    navigate("/mes-cers"); // redirection après l'ajout (React Router)
  }

  return (
    <section className="container py-5">
      <h1 className="h4 fw-bold mb-4">Ajouter un CER</h1>

      <div className="card border-0 shadow-sm mx-auto" style={{ maxWidth: 720 }}>
        <form className="card-body p-4 d-grid gap-3" onSubmit={handleSubmit}>
          <div>
            <label className="form-label" htmlFor="title">Titre du CER</label>
            <input
              className="form-control"
              id="title"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Ex : Prosit 4.1 Développement avancé"
              required
            />
          </div>

          <div>
            <label className="form-label" htmlFor="level">Niveau</label>
            <select
              className="form-select"
              id="level"
              name="level"
              value={form.level}
              onChange={handleChange}
            >
              <option value="X1">X1</option>
              <option value="X2">X2</option>
              <option value="X3">X3</option>
            </select>
          </div>

          <div>
            <label className="form-label" htmlFor="description">Description</label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              rows={4}
              value={form.description}
              onChange={handleChange}
              placeholder="Résumez le contenu de ce CER"
              required
            />
          </div>

          <div className="d-flex justify-content-end gap-2">
            <button type="submit" className="btn btn-primary text-white">
              Ajouter le CER
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
