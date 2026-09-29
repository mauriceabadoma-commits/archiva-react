import { Link } from "react-router-dom";
import { useMyCers } from "../context/MyCersContext.jsx";
import CerCard from "../components/CerCard.jsx";

export default function MesCers() {
  const { myCers, deleteCer } = useMyCers();

  return (
    <section className="container py-5">
      <div className="d-flex justify-content-between align-items-end mb-4">
        <div>
          <h1 className="h4 fw-bold">Tous mes CERs</h1>
          <p className="text-muted mb-0" style={{ maxWidth: "60ch" }}>
            Gérez les CERs que vous avez publiés.
          </p>
        </div>
        <Link className="btn btn-primary text-white" to="/ajouter-cer">
          Ajouter un CER
        </Link>
      </div>

      {myCers.length === 0 ? (
        <p className="text-muted">
          Vous n'avez encore ajouté aucun CER.{" "}
          <Link to="/ajouter-cer">Ajoutez le premier</Link>.
        </p>
      ) : (
        <div className="row g-4">
          {myCers.map((cer) => (
            <div className="col-12 col-sm-6 col-lg-4" key={cer.id}>
              <CerCard cer={cer} showActions onDelete={deleteCer} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
