import React, { createContext, useState, useEffect } from "react";
//Types
import { IAlert } from "./types";



interface IAlertContext {
  alerts: IAlert[];
  setAlerts: (alerts: IAlert[]) => void;
}

export const AlertContext = createContext<IAlertContext>({
  alerts: [],
  setAlerts: (_alerts: IAlert[]) => { },
});

export const AlertProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [alerts, setAlerts] = useState<IAlert[]>([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setAlerts((prevAlerts) => prevAlerts.slice(1));
    }, 5000);

    return () => clearTimeout(timerId);
  }, [alerts]);




  return (
    <AlertContext.Provider
      value={{
        alerts,
        setAlerts,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};
