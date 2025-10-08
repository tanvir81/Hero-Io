import { createBrowserRouter } from "react-router";

import Home from "../Pages/Home";
import AllApps from "../Pages/AllApps";
import MainLayOut from "../LayOuts/MainLayOut";
import Installation from "../Pages/Installation";
import InstalledApps from "../Pages/InstalledApps";
import AppDetails from "../Pages/AppDetails";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/allapps",
        Component: AllApps,
      },
      {
        path: "/installation",
        Component: Installation,
      },
      {
        path: "/installedApps",
        Component: InstalledApps,
      },
      { path: "/apps/:id", Component: AppDetails },
    ],
  },
]);

export default router;
