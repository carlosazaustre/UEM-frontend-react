// Crea un componente de contexto que almacene el tema de la aplicación (luz u oscuro).
// Utiliza este componente de contexto para pasar el tema a componentes de nivel inferior
// en la aplicación y permitir que estos componentes cambien el tema.
import { useState, createContext, useContext } from "react";

const ThemeContext = createContext();

export function useThemeContext() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
