import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-top mt-5">
      <div className="container py-5 row gy-4">
        <div className="col-md-6">
          <img src="/assets/images/logo.svg" alt="Archiva Logo" height="40" className="mb-3" />
          <address className="small text-muted mb-0">
            <div>✉ info@archiva.com</div>
            <div>📞 +237 600 000 000</div>
            <div>📍 Yaoundé, Douala/Cameroun</div>
          </address>
        </div>

        <div className="col-md-3">
          <h2 className="h6 fw-semibold">Accueil</h2>
          <ul className="list-unstyled small">
            <li><Link className="link-secondary link-underline-opacity-0" to="/cers">CERs</Link></li>
            <li><Link className="link-secondary link-underline-opacity-0" to="/favoris">Mes CERs favoris</Link></li>
            <li><Link className="link-secondary link-underline-opacity-0" to="/mes-cers">Gestion de CER</Link></li>
            <li><Link className="link-secondary link-underline-opacity-0" to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="col-md-3">
          <h2 className="h6 fw-semibold">Social Profiles</h2>
          <div className="d-flex gap-2">
            <a className="btn btn-sm btn-light rounded-circle" href="#" aria-label="Facebook">f</a>
            <a className="btn btn-sm btn-light rounded-circle" href="#" aria-label="Twitter">t</a>
            <a className="btn btn-sm btn-light rounded-circle" href="#" aria-label="LinkedIn">in</a>
          </div>
        </div>
      </div>
      <p className="text-center text-muted small border-top py-3 mb-0">
        © 2024 Archiva. All rights reserved.
      </p>
    </footer>
  );
}
