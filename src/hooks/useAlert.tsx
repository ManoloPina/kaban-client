import { useContext } from "react";
import { AlertContext } from "src/context/AlertContext";
import { IAlert } from "src/context/AlertContext/types";
export const useAlert = () => {
  const { setAlerts, alerts } = useContext(AlertContext);

  const showAlert = (alert: IAlert) => {
    const alertsCopy = [...alerts];
    setAlerts([...alertsCopy, alert]);
  };

  return {
    showAlert,
  };
};
