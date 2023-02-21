// Crea un componente de contexto que almacene el tamaño de la fuente de la aplicación.
// Utiliza este componente de contexto para pasar el tamaño de la fuente a componentes
// de nivel inferior en la aplicación y permitir que estos componentes cambien el tamaño de
// la fuente.
import { useState, createContext, useContext } from "react";

const FontSizeContext = createContext();

export function useFontSizeContext() {
  return useContext(FontSizeContext);
}

export function FontSizeProvider({ children }) {
  const [fontSize, setFontSize] = useState(16);

  const toggleFontSize = () => {
    setFontSize(fontSize === 16 ? 24 : 16);
  };

  return (
    <FontSizeContext.Provider value={{ fontSize, toggleFontSize }}>
      {children}
    </FontSizeContext.Provider>
  );
}
