import { useNoScroll } from "../lib/hooks/use_no_scroll";
import { ToastContainer } from "../lib/components/toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";
import { useLocalStorage } from "../lib/hooks/use_local_storage";
import { useEffect, useMemo, useState } from "react";
import { AuthContextProps, User } from "../lib/types";
import AuthContext from "../lib/context/auth_context";
import SessionLayout from "../lib/layouts/session_layout";

export default function MyApp({ Component, pageProps }) {
  // hook para obtener los datos de usuario en el local storage
  const { storedValue, setValue, removeValue } = useLocalStorage("userData");
  // estado del usuario en la app
  const [auth, setAuth] = useState(null);
  useNoScroll().set();

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
      <ToastContainer />
      <SessionLayout>
        <Component {...pageProps} />
      </SessionLayout>
    </AuthContext.Provider>
  );
}
