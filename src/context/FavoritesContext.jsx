import { createContext, useContext, useEffect, useState } from "react";

// Context API : évite de faire descendre "favorites" et "toggleFavorite"
// manuellement de composant en composant (Header -> Page -> CerCard...).
// N'importe quel composant peut appeler useFavorites() pour y accéder directement.
const FavoritesContext = createContext(null);

const STORAGE_KEY = "archiva-favorites";

export function FavoritesProvider({ children }) {
  // Lazy initializer : on lit localStorage une seule fois, au premier rendu.
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // useEffect = équivalent moderne des anciennes méthodes de cycle de vie
  // (componentDidMount + componentDidUpdate) : ce code s'exécute à chaque
  // fois que "favorites" change, pour garder localStorage synchronisé.
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  function toggleFavorite(cerId) {
    setFavorites((prev) =>
      prev.includes(cerId) ? prev.filter((id) => id !== cerId) : [...prev, cerId]
    );
  }

  function isFavorite(cerId) {
    return favorites.includes(cerId);
  }

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

// Hook personnalisé : les composants font juste `const { isFavorite } = useFavorites()`
export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites doit être utilisé à l'intérieur de <FavoritesProvider>");
  }
  return context;
}
