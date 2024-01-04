import Contact from "pages/Contact/Contact";
import NotFoundPage from "pages/Error/NotFoundPage";
import Home from "pages/Home/Home";
import Layout from "pages/Layout/Layout";
import { createBrowserRouter } from "react-router-dom";
export  const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement:<NotFoundPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
