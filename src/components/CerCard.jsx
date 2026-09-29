import { useFavorites } from "../context/FavoritesContext.jsx";

/**
 * Carte de présentation d'un CER.
 * `cer` est reçu en props (donnée), le favori vient du Context (état partagé).
 * `showActions`, optionnel, affiche Modifier/Supprimer pour la page de gestion.
 */
export default function CerCard({ cer, showActions = false, onDelete }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(cer.id);

  return (
    <article className="card h-100 shadow-sm border-0">
      <img
        src={`/assets/images/${cer.image}`}
        className="card-img-top cer-card-img"
        alt={cer.title}
      />
      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center mb-2">
          {!showActions && (
            <button
              type="button"
              className="fav-btn"
              onClick={() => toggleFavorite(cer.id)}
              aria-pressed={favorite}
              aria-label={`Ajouter aux favoris : ${cer.title}`}
            >
              {/* Rendu conditionnel : le cœur change selon l'état favori */}
              {favorite ? "❤️" : "🤍"}
            </button>
          )}
          <span className="small fw-medium text-muted">par {cer.author}</span>
        </div>

        <h3 className="h6 fw-bold">{cer.title}</h3>
        <p className="small text-muted text-clamp-4">{cer.description}</p>

        <a href="#" className="btn btn-outline-secondary btn-sm mt-auto">
          Consulter le CER
        </a>

        {showActions && (
          <div className="d-grid gap-2 mt-2" style={{ gridTemplateColumns: "1fr 1fr" }}>
            <div className="d-flex gap-2">
              <button type="button" className="btn btn-sm btn-outline-secondary flex-fill">
                Modifier
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-danger flex-fill"
                onClick={() => onDelete?.(cer.id)}
              >
                Supprimer
              </button>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
