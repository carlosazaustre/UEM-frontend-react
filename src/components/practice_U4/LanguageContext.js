// Crea un componente de contexto que almacene el idioma de la aplicación. Utiliza este
// componente  de  contexto  para  pasar  el  idioma  a  componentes  de  nivel  inferior  en  la
// aplicación y permitir que estos componentes cambien el idioma.
import { useState, createContext, useContext } from "react";

const LanguageContext = createContext();

export function useLanguageContext() {
  return useContext(LanguageContext);
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
