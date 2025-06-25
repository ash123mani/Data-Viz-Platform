import { createBrowserRouter } from "react-router";

import HomePage from './pages/home'
import Layout from "./shared/layout";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import OnBoardingPageLayout from "./shared/onbarding-page-layout";

const router = createBrowserRouter([
  {
    path: "/", Component: Layout, children: [
      { index: true, Component: HomePage }
    ]
  },
  {
    path: "/login", Component: OnBoardingPageLayout, children: [
      { index: true, Component: LoginPage }
    ]
  },
  {
    path: "/register", Component: OnBoardingPageLayout, children: [
      { index: true, Component: RegisterPage }
    ]
  },
]);

export default router;
