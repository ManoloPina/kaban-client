import { useContext, useMemo } from "react";
import { AuthContext } from "../context/AuthContext";
export const useAuth = () => {
  const authCtx = useContext(AuthContext);
  const isLogged = useMemo(() => !!authCtx.token, [authCtx.token]);
  return { ...authCtx, isLogged };
};
