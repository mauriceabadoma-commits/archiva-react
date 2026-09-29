import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { MyCersProvider } from "./context/MyCersContext.jsx";

// Code splitting : chaque page est chargée seulement quand on la visite,
// au lieu d'être toute incluse dans le fichier JS initial. Sur un vrai
// déploiement, cela réduit le temps de chargement de la première page.
const Home = lazy(() => import("./pages/Home.jsx"));
const Cers = lazy(() => import("./pages/Cers.jsx"));
const Favoris = lazy(() => import("./pages/Favoris.jsx"));
const MesCers = lazy(() => import("./pages/MesCers.jsx"));
const AjouterCer = lazy(() => import("./pages/AjouterCer.jsx"));
const Connexion = lazy(() => import("./pages/Connexion.jsx"));
const Inscription = lazy(() => import("./pages/Inscription.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));

// Pages sans en-tête ni pied de page (connexion / inscription)
function AuthLayout({ children }) {
  return children;
}

// Pages normales, avec en-tête et pied de page communs
function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <MyCersProvider>
      {/* Suspense affiche "fallback" pendant le chargement du code de la page (lazy) */}
      <Suspense fallback={<div className="text-center py-5">Chargement…</div>}>
        <Routes>
          <Route path="/" element={<MainLayout><Home /></MainLayout>} />
          <Route path="/cers" element={<MainLayout><Cers /></MainLayout>} />
          <Route path="/favoris" element={<MainLayout><Favoris /></MainLayout>} />
          <Route path="/mes-cers" element={<MainLayout><MesCers /></MainLayout>} />
          <Route path="/ajouter-cer" element={<MainLayout><AjouterCer /></MainLayout>} />
          <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
          <Route path="/connexion" element={<AuthLayout><Connexion /></AuthLayout>} />
          <Route path="/inscription" element={<AuthLayout><Inscription /></AuthLayout>} />
        </Routes>
      </Suspense>
    </MyCersProvider>
  );
}
