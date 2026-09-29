import { createContext, useContext, useEffect, useState } from "react";

const MyCersContext = createContext(null);
const STORAGE_KEY = "archiva-my-cers";

export function MyCersProvider({ children }) {
  const [myCers, setMyCers] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(myCers));
  }, [myCers]);

  function addCer(cer) {
    setMyCers((prev) => [...prev, { ...cer, id: crypto.randomUUID(), image: "web-intro.svg" }]);
  }

  function deleteCer(id) {
    setMyCers((prev) => prev.filter((cer) => cer.id !== id));
  }

  return (
    <MyCersContext.Provider value={{ myCers, addCer, deleteCer }}>
      {children}
    </MyCersContext.Provider>
  );
}

export function useMyCers() {
  const context = useContext(MyCersContext);
  if (!context) {
    throw new Error("useMyCers doit être utilisé à l'intérieur de <MyCersProvider>");
  }
  return context;
}
