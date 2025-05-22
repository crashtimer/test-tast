import React from "react";
import { observer } from "mobx-react-lite";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
// views
import LoginView from "@/pages/Auth/Login.page";
import BooksView from "@/pages/Books/Books.page";
// containers
import AuthLayout from "./containers/AuthLayout/AuthLayout.container";
import AppLayout from "./containers/AppLayout/App.container";
// modules
import AuthModule from "@/modules/Auth/Auth.module";
// config
import { ROUTES, ROUTES_AUTH } from "./config/routes";

const ProtectedRoute = observer(
  ({ children, auth = false }: ProtectedRouteProps) => {
    const { isLoggedIn } = AuthModule;

    if (auth) {
      return !isLoggedIn ? children : <Navigate to={ROUTES.ROOT} />;
    }

    return isLoggedIn ? children : <Navigate to={ROUTES_AUTH.ROOT} />;
  }
);

const AUTH_ROUTER = [
  {
    path: ROUTES_AUTH.ROOT,
    element: (
      <ProtectedRoute auth>
        <AuthLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to={ROUTES_AUTH.LOGIN} />,
      },
      {
        path: ROUTES_AUTH.LOGIN,
        element: <LoginView />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={ROUTES_AUTH.LOGIN} />,
  },
];

const ROUTER = [
  {
    path: ROUTES.ROOT,
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to={ROUTES.BOOKS} />,
      },
      {
        path: ROUTES.BOOKS,
        element: <BooksView />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={ROUTES.ROOT} />,
  },
];

function Router() {
  const router = createBrowserRouter([...AUTH_ROUTER, ...ROUTER]);

  return <RouterProvider router={router} />;
}

export default observer(Router);
