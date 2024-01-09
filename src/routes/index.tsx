import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
//Components
import { ProtectedRoute } from "src/routes/ProtectedRoute";
//Pages
import { Login } from "src/pages/auth/Login";
import { Register } from "src/pages/auth/Register";
//Types
import { ROUTES } from "src/constants";

const Routes = () => {
  const publicRoutes: RouteObject[] = [
    {
      path: ROUTES.AUTH.LOGIN,
      element: <Login />,
    },
    {
      path: ROUTES.AUTH.REGISTER,
      element: <Register />,
    },
  ];

  const authenticatedRoutes: RouteObject[] = [
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: ROUTES.HOME,
          element: <h1>Home Page</h1>,
        },
      ],
    },
  ];

  const router = createBrowserRouter([...publicRoutes, ...authenticatedRoutes]);

  return <RouterProvider router={router} />;
};

export default Routes;
