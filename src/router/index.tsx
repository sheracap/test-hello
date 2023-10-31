import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { DefaultLayout } from "@/shared/layouts/DefaultLayout";
import { AuthLayout } from "@/shared/layouts/AuthLayout";

const Auth = React.lazy(() => import("../pages/auth/Auth"));
const Dashboard = React.lazy(() => import("../pages/dashboard"));


const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/auth",
        element: (
          <React.Suspense>
            <Auth />
          </React.Suspense>
        ),
      },
    ],
  },
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: (
          <React.Suspense>
            <Dashboard />
          </React.Suspense>
        ),
      },
    ],
  },
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/*",
        element: (
          <React.Suspense>
            Not found
          </React.Suspense>
        ),
      }
    ]
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
