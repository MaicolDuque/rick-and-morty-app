import { createBrowserRouter } from "react-router-dom";
import { Detail } from "../pages/Detail";
import { Home } from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
]);
