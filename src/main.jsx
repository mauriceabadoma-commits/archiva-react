import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Bootstrap : le CSS d'abord, puis le bundle JS (menu burger, etc.), sans jQuery.
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Notre surcouche : quelques variables pour retrouver les couleurs d'Archiva.
import "./index.css";

import { FavoritesProvider } from "./context/FavoritesContext.jsx";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* BrowserRouter active la navigation par URL (React Router DOM) */}
    <BrowserRouter>
      {/* FavoritesProvider rend les favoris disponibles à toute l'application (Context API) */}
      <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
