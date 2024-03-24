import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "@/pages/Error/NotFoundPage.tsx";
import Home from "@/pages/Home/Home.tsx";
import { Tournament } from "@/pages/Tournament/Tournament.tsx";
import { Author } from "@/pages/Author/Author.tsx";
import NewNovel from "@/pages/NewNovel/NewNovel.tsx";
import { Test } from "@/pages/Test/Test.tsx";
import AddNovel from "@/pages/addNovel/AddNovel.tsx";
import AddChapter from "@/pages/AddChapter/AddChapter.tsx";
import Test5 from "@/pages/Test/test5";
import { action as logoutAction } from "@/pages/auth/logout/Logout";
import { Login, MyPage, Register } from "@/router/pages";
import { checkAuthLoader, checkAuthLoginLoader } from "@/utils/auth";
import RootLayout from "@/pages/layout/RootLayout";
import { SearchNovel } from "@/pages/searchNovel/SearchNovel.tsx";
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
  ROUTE_CONTACT_FORM,
  ROUTE_HOME,
  ROUTE_LOGIN,
  ROUTE_LOGOUT,
  ROUTE_MYPAGE,
  ROUTE_NEW_NOVEL,
  ROUTE_NOVEL_DETAIL,
  ROUTE_READ_NOVEL,
  ROUTE_REGISTER,
  ROUTE_SEARCH_NOVEL,
  ROUTE_TOURAMENT,
  ROUTE_TOURAMENT_BOARD,
} from "@/constants/nameRoute";
import UploadFile from "@/pages/UploadFile";

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
        path: ROUTE_TOURAMENT,
        element: <Tournament />,
      },

      {
        path: ROUTE_AUTHOR,
        element: <Author />,
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
        path: "/upload-file",
        element: <UploadFile />,
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
        path: ROUTE_CONTACT_FORM,
        element: <ContactForm />,
      },
      {
        path: ROUTE_READ_NOVEL,
        element: <ReaderNovel />,
      },
      {
        path: ROUTE_TOURAMENT_BOARD,
        element: <TournamentBoard />,
      },
    ],
  },
]);
