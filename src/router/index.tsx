import NotFoundPage from "pages/Error/NotFoundPage";
import Home from "pages/Home/Home";
import Layout from "pages/Layout/Layout";
import { createBrowserRouter } from "react-router-dom";
import { Coliseum } from "../pages/Coliseum/Coliseum.tsx";
import { Tournament } from "../pages/Tournament/Tournament.tsx";
import { Author } from "../pages/Author/Author.tsx";
import MyPage from "pages/MyPage/MyPage.tsx";
import Login from "../pages/Authentication/Login/Login.tsx";
import AuthLayout from "../pages/Authentication/Layout/AuthLayout.tsx";
import NewNovel from "pages/NewNovel/NewNovel.tsx";
export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/coliseum",
        element: <Coliseum />,
      },
      {
        path: "/tournament",
        element: <Tournament />,
      },
      {
        path: "/author",
        element: <Author />,
      },
      {
        path: "/mypage",
        element: <MyPage />,
      },
      {
        path: "/newnovel",
        element: <NewNovel />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
