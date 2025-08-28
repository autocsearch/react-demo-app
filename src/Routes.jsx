import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Signin from "./pages/Signin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signin />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
