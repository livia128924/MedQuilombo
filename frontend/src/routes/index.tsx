import { createBrowserRouter } from "react-router-dom";

import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MenuBar from "../components/MenuBar";

const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "reset-password/:token",
    element: <Login />,
  },
  {
    path: "cms",
    element: <MenuBar />,
    children: [
      {
        path: "home",

        element: <Home />,
      },
    ],
  },
]);

export default router;
