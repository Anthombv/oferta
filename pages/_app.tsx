import "devextreme/dist/css/dx.light.css";
import "react-toastify/dist/ReactToastify.css";
import { useLocalStorage } from "../lib/hooks/use_local_storage";
import { useEffect, useMemo, useState } from "react";
import { AuthContextProps, User } from "../lib/types";
import SessionLayout from "../lib/layouts/session_layout";
import { ToastContainer } from "../lib/components/toastify";
import { useNoScroll } from "../lib/hooks/use_no_scroll";
import "../styles/globals.css";
import AuthContext from "../lib/context/auth_context";


// configuracion general de la app
export default function App({ Component, pageProps }) {
  // hook para obtener los datos de usuario en el local storage
  const { storedValue, setValue, removeValue } = useLocalStorage("userData");
  // estado del usuario en la app
  const [auth, setAuth] = useState(null);

  useNoScroll().set();

  // revisa y configura si hay un usuario guardado
  useEffect(() => {
    (() => {
      storedValue &&
        setAuth({ ...storedValue, role: parseInt(storedValue.role) });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // permite iniciar sesion
  const login = (userData: User) => {
    setValue(userData);
    setAuth(userData);
  };

  // permite cerrar sesion
  const logout = () => {
    if (auth) {
      setAuth(null);
      removeValue();
    }
  };

  // guarda y actualiza las variables del contexto
  const authData = useMemo<AuthContextProps>(
    () => ({ auth, login, logout }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [auth]
  );

  return (
    <AuthContext.Provider value={authData}>
      {/* muestra alertas */}
      <ToastContainer />
      <SessionLayout>
        {/* ruta actual renderizada */}
        <Component {...pageProps} />
      </SessionLayout>
    </AuthContext.Provider>
  );
}
