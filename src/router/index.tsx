import { createBrowserRouter } from "react-router-dom";
import Layout from "@/pages/Layout/Layout.tsx";
import NotFoundPage from "@/pages/Error/NotFoundPage.tsx";
import Home from "@/pages/Home/Home.tsx";
import { Coliseum } from "@/pages/Coliseum/Coliseum.tsx";
import { Tournament } from "@/pages/Tournament/Tournament.tsx";
import { Author } from "@/pages/Author/Author.tsx";
import MyPage from "@/pages/MyPage/MyPage.tsx";
import NewNovel from "@/pages/NewNovel/NewNovel.tsx";
import AuthLayout from "@/pages/Authentication/Layout/AuthLayout.tsx";
import Login from "@/pages/Authentication/Login/Login.tsx";
import { TournamentBoard } from "@/pages/TournamentBoard/TournamentBoard.tsx";
import { Test } from "@/pages/Test/Test.tsx";

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
      {
        path: "/tournament-board",
        element: <TournamentBoard />,
      },
      {
        path: "/test-coli",
        element: <Test />,
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
