import React, { createContext, useState, useEffect } from "react";
//Styles
import styled from "styled-components";
//Components
import { Alert } from "src/components/Alert";
//Types
import { IAlert } from "./types";

const AlertWrapper = styled.div`
  padding: 2rem 0;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  right: 0;

  & > div {
    animation: bounceInDown;
    animation-duration: 1s;
    margin: 0 auto;
    &:not(:first-child) {
      margin-top: 1rem;
    }
  }
`;

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
      {alerts.length > 0 && (
        <AlertWrapper>
          {alerts.map((alert, i) => (
            <Alert key={i} {...alert} />
          ))}
        </AlertWrapper>
      )}
    </AlertContext.Provider>
  );
};
