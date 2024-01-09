import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "src/hooks";
import { ROUTES } from "src/constants";

export const ProtectedRoute: React.FC = () => {
  const { token } = useAuth();
  if (!token) {
    return <Navigate to={ROUTES.AUTH.LOGIN} />;
  }
  return <Outlet />;
};
