import { useThemeContext } from "./ThemeContext";
import { useLanguageContext } from "./LanguageContext";
import { useFontSizeContext } from "./FontSizeContext";
import "./Component.css";

export function Component() {
  const { theme, toggleTheme } = useThemeContext();
  const { language, toggleLanguage } = useLanguageContext();
  const { fontSize, toggleFontSize } = useFontSizeContext();

  const title =
    language === "en"
      ? "Component Wrapped by Theme Provider"
      : "Componente envuelto por el proveedor de temas";

  const texto = language === "en" ? "Hello, World!" : "¡Hola, Mundo!";

  return (
    <div className={`font-${fontSize}`}>
      <div className={`app-${theme}`}>
        <h2>{title}</h2>
        <p>{texto}</p>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <button onClick={toggleLanguage}>Toggle Language</button>
        <button onClick={toggleFontSize}>Toggle Font Size</button>
      </div>
    </div>
  );
}
