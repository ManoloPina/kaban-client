import { createContext, useEffect, useMemo, useState } from "react";
import { http } from "src/utils";

interface IAuthContext {
  token: string | null;
  setToken: (token: string | null) => void;
}

export const AuthContext = createContext<IAuthContext>({
  token: null,
  setToken: () => {}, // Remove the unused variable
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  //handlers
  const _setToken = (token: string | null) => setToken(token);

  const contextValue = useMemo(
    () => ({
      token,
      setToken: _setToken,
    }),
    [token]
  );

  //lifecycle hooks
  useEffect(() => {
    if (token) {
      http.defaults.headers.common["Authorization"] = "Bearer " + token;
      localStorage.setItem("token", token);
    } else {
      delete http.defaults.headers.common["Authorization"];
      localStorage.removeItem("token");
    }
  }, [token]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
