import { useState } from "react";

const STORAGE_KEY = "archiva-welcome-seen";

export default function WelcomeBanner() {
  // Lazy initializer : on lit sessionStorage une seule fois, pas à chaque rendu.
  const [visible, setVisible] = useState(() => !sessionStorage.getItem(STORAGE_KEY));

  if (!visible) return null; // rendu conditionnel : rien n'est affiché une fois fermé

  function handleClose() {
    setVisible(false);
    sessionStorage.setItem(STORAGE_KEY, "1");
  }

  return (
    <div className="alert alert-warning d-flex justify-content-center align-items-center gap-3 text-center rounded-0 mb-0">
      <p className="mb-0 small">Bienvenue sur Archiva ! Explorez la banque de CERs de la promotion.</p>
      <button
        type="button"
        className="btn-close"
        aria-label="Fermer ce message"
        onClick={handleClose}
      ></button>
    </div>
  );
}
