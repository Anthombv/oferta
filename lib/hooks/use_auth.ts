import { useContext } from "react";
import AuthContext from "../context/auth_context";
import { AuthContextProps } from "../types";

// nos permite llamar a las variables del contexto
export const useAuth = (): AuthContextProps => useContext(AuthContext);