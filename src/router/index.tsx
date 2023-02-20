import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../components/ErrorPage/ErrorPage";
import { Layout } from "../components/Layout/Layout";
import { Detail } from "../pages/Detail/Detail";
import { Home } from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/detail/:id",
        element: <Detail />,
      },
    ]
  },
]);
