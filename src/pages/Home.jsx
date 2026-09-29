import { Link } from "react-router-dom";
import { useCers } from "../hooks/useCers.js";
import CerCard from "../components/CerCard.jsx";
import WelcomeBanner from "../components/WelcomeBanner.jsx";

export default function Home() {
  const { cers, isLoading, error } = useCers();

  return (
    <>
      <WelcomeBanner />

      <section className="text-center py-5 bg-light">
        <div className="container">
          <form
            className="mx-auto mb-4"
            style={{ maxWidth: 520 }}
            role="search"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              className="form-control form-control-lg"
              type="search"
              placeholder="Rechercher un CER"
              aria-label="Rechercher un CER"
            />
          </form>

          <div className="d-inline-block bg-white rounded px-4 py-2 shadow-sm mb-3">
            <h1 className="h4 fw-bold mb-0">Bienvenue sur Archiva, votre espace</h1>
          </div>
          <p className="h5 fw-medium">Espace d'archivage d'anciens CERs</p>
          <p className="text-muted">L'homme n'est rien sans son bord</p>

          <div className="d-flex justify-content-center gap-2 flex-wrap">
            <Link className="btn btn-primary text-white" to="/cers">Explorer plus de CER</Link>
            <Link className="btn btn-outline-secondary" to="/cers">Tous les CERs</Link>
          </div>
        </div>
      </section>

      <section className="container py-5">
        <div className="d-flex justify-content-between align-items-end mb-4">
          <div>
            <h2 className="h4 fw-bold">Les meilleurs CERs du moment</h2>
            <p className="text-muted small mb-0" style={{ maxWidth: "60ch" }}>
              Découvrez ci-dessous les CERs les plus appréciés par notre communauté d'utilisateurs.
            </p>
          </div>
          <Link className="btn btn-outline-secondary" to="/cers">Voir tout</Link>
        </div>

        {/* Rendu conditionnel selon l'état de la requête fetch */}
        {isLoading && <p className="text-muted">Chargement des CERs…</p>}
        {error && <p className="text-danger">{error}</p>}

        {!isLoading && !error && (
          <div className="row g-4">
            {cers.slice(0, 6).map((cer) => (
              <div className="col-12 col-sm-6 col-lg-4" key={cer.id}>
                <CerCard cer={cer} />
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
