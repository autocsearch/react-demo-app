import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Dasboard from "./pages/Dashboard";
import Signin from "./pages/Signin";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dasboard />,
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
