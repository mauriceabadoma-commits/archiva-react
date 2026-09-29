import { useEffect, useState } from "react";

/**
 * Récupère la liste des CERs via fetch().
 *
 * Pour ce prosit, les données viennent d'un fichier JSON local
 * (public/data/cers.json), mais le code est écrit exactement comme un vrai
 * appel à une API backend : le jour où l'équipe backend expose une route
 * réelle (ex. https://api.archiva.com/cers), il suffira de changer l'URL
 * ci-dessous. Le reste de l'application n'a rien à changer.
 */
export function useCers() {
  const [cers, setCers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // évite de mettre à jour un composant déjà démonté

    fetch("/data/cers.json")
      .then((response) => {
        if (!response.ok) throw new Error("Impossible de charger les CERs.");
        return response.json();
      })
      .then((data) => {
        if (isMounted) setCers(data);
      })
      .catch((err) => {
        if (isMounted) setError(err.message);
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return { cers, isLoading, error };
}
