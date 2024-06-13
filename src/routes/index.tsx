import { useContext } from "react";
import {
  Route,
  Routes as _Routes,
} from "react-router-dom";
import { ThemeContext } from "src/context/ThemeContext";
import { ThemeProvider } from "styled-components";
//Styles
import * as theme from 'src/styles/theme';
//Components
import { ProtectedRoute } from "src/Routes/ProtectedRoute";
//Pages
import { Login } from "src/pages/auth/Login";
import { Register } from "src/pages/auth/Register";
import { Board } from 'src/pages/Board';
//Types
import { ROUTES } from "src/constants";
import { Alert } from "src/components/Alert";




export const Router = () => {
  const { theme: themeType } = useContext(ThemeContext)
  return (
    <ThemeProvider theme={theme[themeType]}>
      <_Routes>
        {/* Public Routes */}
        <Route path={ROUTES.AUTH.LOGIN} element={<Login />} />
        <Route path={ROUTES.AUTH.REGISTER} element={<Register />} />

        {/* Authenticated Routes */}
        <Route path="/" element={<ProtectedRoute />}>
          <Route path={ROUTES.BOARD} element={<Board />} />
        </Route>

      </_Routes>
      <Alert />
    </ThemeProvider>
  );
}

export default Router;
