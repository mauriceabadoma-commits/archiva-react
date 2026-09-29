import { useMemo, useState } from "react";
import { useCers } from "../hooks/useCers.js";
import CerCard from "../components/CerCard.jsx";

export default function Cers() {
  const { cers, isLoading, error } = useCers();

  // Champs de formulaire contrôlés : React est la "source de vérité" de leur valeur.
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState("");
  const [showAll, setShowAll] = useState(false);

  // useMemo évite de refiltrer la liste à chaque rendu si rien n'a changé.
  const filtered = useMemo(() => {
    return cers.filter((cer) => {
      const matchesQuery = cer.title.toLowerCase().includes(query.toLowerCase());
      const matchesLevel = level === "" || cer.level === level;
      return matchesQuery && matchesLevel;
    });
  }, [cers, query, level]);

  const visibleCers = showAll ? filtered : filtered.slice(0, 6);
  const hasMore = filtered.length > 6;

  return (
    <section className="container py-5">
      <h1 className="h4 fw-bold">Tous les CERs</h1>
      <p className="text-muted" style={{ maxWidth: "60ch" }}>
        Parcourez les comptes rendus d'anciens prosits archivés par la communauté.
      </p>

      <form className="row g-2 mb-4" onSubmit={(e) => e.preventDefault()}>
        <div className="col-12 col-md-6">
          <input
            className="form-control"
            type="search"
            placeholder="Rechercher un CER"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Rechercher un CER"
          />
        </div>
        <div className="col-8 col-md-4">
          <select
            className="form-select"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            aria-label="Filtrer par niveau"
          >
            <option value="">Tous les niveaux</option>
            <option value="X1">X1</option>
            <option value="X2">X2</option>
            <option value="X3">X3</option>
          </select>
        </div>
      </form>

      {isLoading && <p className="text-muted">Chargement des CERs…</p>}
      {error && <p className="text-danger">{error}</p>}

      {!isLoading && !error && filtered.length === 0 && (
        <p className="text-muted">Aucun CER ne correspond à votre recherche.</p>
      )}

      {!isLoading && !error && filtered.length > 0 && (
        <>
          <div className="row g-4">
            {visibleCers.map((cer) => (
              <div className="col-12 col-sm-6 col-lg-4" key={cer.id}>
                <CerCard cer={cer} />
              </div>
            ))}
          </div>

          {hasMore && (
            <div className="text-center mt-4">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setShowAll((prev) => !prev)}
              >
                {showAll ? "Voir moins" : "Voir plus"}
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
