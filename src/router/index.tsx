import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "@/pages/Error/NotFoundPage.tsx";
import Home from "@/pages/home/Home";
import { Coliseum } from "@/pages/Coliseum/Coliseum.tsx";
import { Tournament } from "@/pages/Tournament/Tournament.tsx";
import { Author } from "@/pages/Author/Author.tsx";
import NewNovel from "@/pages/NewNovel/NewNovel.tsx";
import { TournamentBoard } from "@/pages/TournamentBoard/TournamentBoard.tsx";
import { Test } from "@/pages/Test/Test.tsx";
import Test2 from "@/pages/Test/Test2.tsx";
import Test3 from "@/pages/Test/Test3.tsx";
import Test4 from "@/pages/Test/Test4.tsx";
import { AuthorJoinTourament } from "@/pages/AuthorJoinTourament/AuthorJoinTourament";
import { ResultTourament } from "@/pages/ResultTourament/ResultTourament";
import { HallTourament } from "@/pages/HallTourament/HallTourament";
import { FanPage } from "@/pages/fanPage/FanPage";
import { TopComment } from "@/pages/topComment/TopComment";
import { Comment } from "@/pages/comment/Comment";
import { Recruitment } from "@/pages/recruitment/Recruitment";
import { TopTourament } from "@/pages/topTourament/TopTourament";
import AddNovel from "@/pages/addNovel/AddNovel.tsx";
import AddChapter from "@/pages/AddChapter/AddChapter.tsx";
import Test5 from "@/pages/Test/test5";
import { UseRegulations } from "@/pages/useRegulations/UseRegulations";
import { ProtectionPolicy } from "@/pages/protectionPolicy/ProtectionPolicy";
import { action as logoutAction } from "@/pages/auth/logout/Logout";
import { Login, MyPage, Register } from "@/router/pages";
import { checkAuthLoader, checkAuthLoginLoader } from "@/utils/auth";
import UserManual from "@/pages/userManual/UserManual";
import RootLayout from "@/pages/layout/RootLayout";
import Test6 from "@/pages/Test/test6";
import { SearchNovel } from "@/pages/searchNovel/searchNovel";
import NovelDetail from "@/pages/novelDetail/NovelDetail";
import SlideBanner from "@/components/Content/SlideBanner";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "coliseum",
        element: <Coliseum />,
      },
      {
        path: "tournament",
        element: <Tournament />,
      },

      {
        path: "author/:userId",
        element: <Author />,
      },
      {
        path: "author/rule",
        element: <Test4 />,
      },
      {
        path: "mypage",
        element: <MyPage />,
        loader: checkAuthLoader,
      },
      {
        path: "mypage/add-novel",
        element: <AddNovel />,
      },
      {
        path: "newnovel",
        element: <NewNovel />,
      },
      {
        path: "tournament-board",
        element: <TournamentBoard />,
      },
      {
        path: "test-coli",
        element: <Test />,
      },
      {
        path: "test-coli2",
        element: <Test2 />,
      },
      {
        path: "test-coli3",
        element: <Test3 />,
      },
      {
        path: "test-coli4",
        element: <Test4 />,
      },
      {
        path: "author-join-tourament",
        element: <AuthorJoinTourament />,
      },
      {
        path: "result-tourament",
        element: <ResultTourament />,
      },
      {
        path: "hall-tourament",
        element: <HallTourament />,
      },
      {
        path: "fan-page",
        element: <FanPage />,
      },
      {
        path: "user-manual",
        element: <UserManual />,
      },
      {
        path: "top-comment",
        element: <TopComment />,
      },
      {
        path: "comment",
        element: <Comment />,
      },
      {
        path: "recruitment",
        element: <Recruitment />,
      },
      {
        path: "top-tourament",
        element: <TopTourament />,
      },
      {
        path: "login",
        element: <Login />,
        loader: checkAuthLoginLoader,
      },
      {
        path: "register",
        element: <Register />,
        loader: checkAuthLoginLoader,
      },
      {
        path: "/test5",
        element: <Test5 />,
      },
      {
        path: "/use-regulations",
        element: <UseRegulations />,
      },
      {
        path: "/protection-policy",
        element: <ProtectionPolicy />,
      },
      {
        path: "add-novel",
        element: <AddNovel />,
      },
      {
        path: "add-chapter",
        element: <AddChapter />,
      },
      {
        path: "logout",
        action: logoutAction,
      },
      {
        path: "/test6",
        element: <Test6 />,
      },
      {
        path: "/search-novel",
        element: <SearchNovel />,
      },
      {
        path: "novel/:novelId",
        element: <NovelDetail />,
      },
      {
        path: "testQC",
        element: <SlideBanner />,
      },
    ],
  },
]);
