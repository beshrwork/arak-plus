import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import TermsOfServicePage from "../Pages/TermsOfServicePage/TermsOfServicePage";
const Layout = React.lazy(() => import("../Layout/Layout"));
const HomePage = React.lazy(() => import("../Pages/Home/HomePage"));
const PrivacyPolicyPage = React.lazy(
  () => import("../Pages/PrivacyPolicyPage/PrivacyPolicyPage")
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<></>}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<></>}>
            <PrivacyPolicyPage />
          </Suspense>
        ),
      },
      {
        path: "/terms",
        element: (
          <Suspense fallback={<></>}>
            <TermsOfServicePage />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<></>}>
            <>Not Found</>
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
