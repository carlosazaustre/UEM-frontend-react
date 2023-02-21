// Crea un componente de contexto que almacene la información del usuario autenticado
// (como el nombre de usuario y el ID). Utiliza este componente de contexto para pasar la
// información del usuario a componentes de nivel inferior en la aplicación y permitir que
// estos  componentes  cambien  la  información  del  usuario  (por  ejemplo,  al  actualizar  el
// nombre de usuario).
import { useState, createContext, useContext } from "react";

const AuthContext = createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState({
    username: "John",
    id: 1,
  });

  const updateUsername = (username) => {
    setAuth({ ...auth, username });
  };

  return (
    <AuthContext.Provider value={{ auth, updateUsername }}>
      {children}
    </AuthContext.Provider>
  );
}
