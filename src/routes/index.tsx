import {
  Route,
  Routes as _Routes,
} from "react-router-dom";
//Components
import { ProtectedRoute } from "src/Routes/ProtectedRoute";
//Pages
import { Login } from "src/pages/auth/Login";
import { Register } from "src/pages/auth/Register";
import { Board } from 'src/pages/Board';
//Types
import { ROUTES } from "src/constants";



export const Router = () => {
  return (
    <_Routes>
      {/* Public Routes */}
      <Route path={ROUTES.AUTH.LOGIN} element={<Login />} />
      <Route path={ROUTES.AUTH.REGISTER} element={<Register />} />

      {/* Authenticated Routes */}
      <Route path="/" element={<ProtectedRoute />}>
        <Route path={ROUTES.BOARD} element={<Board />} />
      </Route>

    </_Routes>
  );
}

export default Router;
