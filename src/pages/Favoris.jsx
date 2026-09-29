import { Link } from "react-router-dom";
import { useCers } from "../hooks/useCers.js";
import { useFavorites } from "../context/FavoritesContext.jsx";
import CerCard from "../components/CerCard.jsx";

export default function Favoris() {
  const { cers, isLoading, error } = useCers();
  const { favorites } = useFavorites();

  const favoriteCers = cers.filter((cer) => favorites.includes(cer.id));

  return (
    <section className="container py-5">
      <h1 className="h4 fw-bold">Mes CERs favoris</h1>
      <p className="text-muted" style={{ maxWidth: "60ch" }}>
        Retrouvez ici les CERs que vous avez ajoutés à vos favoris.
      </p>

      {isLoading && <p className="text-muted">Chargement…</p>}
      {error && <p className="text-danger">{error}</p>}

      {!isLoading && !error && favoriteCers.length === 0 && (
        <p className="text-muted">
          Vous n'avez pas encore de favoris. Ajoutez-en depuis la{" "}
          <Link to="/cers">liste des CERs</Link>.
        </p>
      )}

      {!isLoading && !error && favoriteCers.length > 0 && (
        <div className="row g-4">
          {favoriteCers.map((cer) => (
            <div className="col-12 col-sm-6 col-lg-4" key={cer.id}>
              <CerCard cer={cer} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
