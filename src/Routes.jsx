import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Signin from "./pages/Signin";

import Aboutus from "./components/Aboutus";
import Dashboard from "./components/Dashboard";
import OurWork from "./components/Work/OurWork";
import Teams from "./components/Teams";
import WorkDetails from "./components/Work/WorkDetails"; // ⬅️ add this

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
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/ourwork",
    element: <OurWork />,
  },
  {
    path: "/ourwork/:workDetails",
    element: <WorkDetails />,
  },
  {
    path: "/teams",
    element: <Teams />,
  },
  {
    path: "/aboutus",
    element: <Aboutus />,
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
