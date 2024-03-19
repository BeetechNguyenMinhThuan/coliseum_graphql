import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "@/pages/Error/NotFoundPage.tsx";
import Home from "@/pages/home/Home.tsx";
import { Coliseum } from "@/pages/Coliseum/Coliseum.tsx";
import { Tournament } from "@/pages/Tournament/Tournament.tsx";
import { Author } from "@/pages/Author/Author.tsx";
import NewNovel from "@/pages/NewNovel/NewNovel.tsx";
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
import { SearchNovel } from "@/pages/searchNovel/searchNovel.tsx";
import NovelDetail from "@/pages/novelDetail/NovelDetail";
import SlideBanner from "@/components/Content/SlideBanner";
import { ContactForm } from "@/pages/ContactForm/ContactForm";
import { ReaderNovel } from "@/pages/ReaderNovel/ReaderNovel";
import { TournamentBoard } from "@/pages/Tournament/TouramentBoard";
import {
  ROUTE_ADD_CHAPTER,
  ROUTE_ADD_NOVEL,
  ROUTE_ADS,
  ROUTE_AUTHOR,
  ROUTE_AUTHOR_JOIN_TOURAMENT,
  ROUTE_COLISEUM,
  ROUTE_COMMENT,
  ROUTE_CONTACT_FORM,
  ROUTE_FANPAGE,
  ROUTE_HALL_TOURAMENT,
  ROUTE_HOME,
  ROUTE_LOGIN,
  ROUTE_LOGOUT,
  ROUTE_MYPAGE,
  ROUTE_NEW_NOVEL,
  ROUTE_NOVEL_DETAIL,
  ROUTE_PROTECTION_POLIcy,
  ROUTE_READ_NOVEL,
  ROUTE_RECRUITMENT,
  ROUTE_REGISTER,
  ROUTE_RESULT_TOURAMENT,
  ROUTE_SEARCH_NOVEL,
  ROUTE_TOP_COMMENT,
  ROUTE_TOP_TOURAMENT,
  ROUTE_TOURAMENT,
  ROUTE_TOURAMENT_BOARD,
  ROUTE_USE_REGISTRATION,
  ROUTE_USER_MANUAL,
} from "@/constants/nameRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        path: ROUTE_HOME,
        element: <Home />,
      },
      {
        path: ROUTE_COLISEUM,
        element: <Coliseum />,
      },
      {
        path: ROUTE_TOURAMENT,
        element: <Tournament />,
      },

      {
        path: ROUTE_AUTHOR,
        element: <Author />,
      },
      {
        path: "author/rule",
        element: <Test4 />,
      },
      {
        path: ROUTE_MYPAGE,
        element: <MyPage />,
        loader: checkAuthLoader,
      },
      {
        path: ROUTE_ADD_NOVEL,
        element: <AddNovel />,
      },
      {
        path: ROUTE_NEW_NOVEL,
        element: <NewNovel />,
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
        path: ROUTE_AUTHOR_JOIN_TOURAMENT,
        element: <AuthorJoinTourament />,
      },
      {
        path: ROUTE_RESULT_TOURAMENT,
        element: <ResultTourament />,
      },
      {
        path: ROUTE_HALL_TOURAMENT,
        element: <HallTourament />,
      },
      {
        path: ROUTE_FANPAGE,
        element: <FanPage />,
      },
      {
        path: ROUTE_USER_MANUAL,
        element: <UserManual />,
      },
      {
        path: ROUTE_TOP_COMMENT,
        element: <TopComment />,
      },
      {
        path: ROUTE_COMMENT,
        element: <Comment />,
      },
      {
        path: ROUTE_RECRUITMENT,
        element: <Recruitment />,
      },
      {
        path: ROUTE_TOP_TOURAMENT,
        element: <TopTourament />,
      },
      {
        path: ROUTE_LOGIN,
        element: <Login />,
        loader: checkAuthLoginLoader,
      },
      {
        path: ROUTE_REGISTER,
        element: <Register />,
        loader: checkAuthLoginLoader,
      },
      {
        path: "/test5",
        element: <Test5 />,
      },
      {
        path: ROUTE_USE_REGISTRATION,
        element: <UseRegulations />,
      },
      {
        path: ROUTE_PROTECTION_POLIcy,
        element: <ProtectionPolicy />,
      },
      {
        path: "add-novel",
        element: <AddNovel />,
      },
      {
        path: ROUTE_ADD_CHAPTER,
        element: <AddChapter />,
      },
      {
        path: ROUTE_LOGOUT,
        action: logoutAction,
      },
      {
        path: ROUTE_SEARCH_NOVEL,
        element: <SearchNovel />,
      },
      {
        path: ROUTE_NOVEL_DETAIL,
        element: <NovelDetail />,
      },
      {
        path: ROUTE_ADS,
        element: <SlideBanner />,
      },
      {
        path: "testQC",
        element: <SlideBanner />,
      },
      {
        path: ROUTE_CONTACT_FORM,
        element: <ContactForm />,
      },
      {
        path: ROUTE_READ_NOVEL,
        element: <ReaderNovel />,
      },
      {
        path: "/tourament",
        element: <Tournament />,
      },
      {
        path: ROUTE_TOURAMENT_BOARD,
        element: <TournamentBoard />,
      },
    ],
  },
]);
