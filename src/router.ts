import { createBrowserRouter } from "react-router";

import Home from './pages/home'
import Layout from "./shared/layout";

const router = createBrowserRouter([
  {
    path: "/", Component: Layout, children: [
      { index: true, Component: Home }
    ]
  },
]);

export default router;
