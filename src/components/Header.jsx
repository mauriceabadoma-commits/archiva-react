import { NavLink } from "react-router-dom";

// NavLink (au lieu de Link) applique automatiquement une classe quand le lien
// correspond à la page actuelle : ça remplace la logique manuelle
// "nav__link--active" qu'on écrivait à la main en HTML pur.
const navLinkClass = ({ isActive }) => `nav-link${isActive ? " active fw-semibold" : ""}`;

export default function Header() {
  return (
    <header className="navbar navbar-expand-md navbar-light bg-white border-bottom sticky-top">
      <nav className="container">
        <NavLink className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img src="/assets/images/logo.svg" alt="Archiva Logo" height="40" />
        </NavLink>

        {/* data-bs-toggle : composant Bootstrap natif, aucun useState nécessaire ici */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-controls="main-nav"
          aria-label="Ouvrir le menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="main-nav">
          <ul className="navbar-nav mx-auto text-center gap-1 my-2 my-md-0">
            <li className="nav-item">
              <NavLink className={navLinkClass} to="/" end>Accueil</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={navLinkClass} to="/cers">CERs</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={navLinkClass} to="/favoris">Mes CER Favoris</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={navLinkClass} to="/mes-cers">Gestion de CER</NavLink>
            </li>
          </ul>
          <NavLink className="btn btn-primary text-white" to="/connexion">
            Connexion
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
