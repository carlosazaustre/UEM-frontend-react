// Crea un componente de contexto que almacene la configuración de la aplicación (como
// el tiempo de sesión máximo o la configuración de privacidad). Utiliza este componente
// de contexto para pasar la configuración a componentes de nivel inferior en la aplicación
// y permitir que estos componentes cambien la configuración.

import { useState, useContext, createContext } from "react";

const ConfigContext = createContext();

export function useConfigContext() {
  return useContext(ConfigContext);
}

export function ConfigProvider({ children }) {
  const [config, setConfig] = useState({
    sessionTime: 30,
    privacy: "public",
  });

  const updateSession = (session) => {
    setConfig({ ...config, sessionTime: session });
  };

  const updatePrivacy = (privacy) => {
    setConfig({ ...config, privacy });
  };

  return (
    <ConfigContext.Provider value={{ config, updateSession, updatePrivacy }}>
      {children}
    </ConfigContext.Provider>
  );
}
