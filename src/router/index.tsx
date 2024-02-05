import {createBrowserRouter} from "react-router-dom";
import Layout from "@/pages/Layout/Layout.tsx";
import NotFoundPage from "@/pages/Error/NotFoundPage.tsx";
import Home from "@/pages/Home/Home.tsx";
import {Coliseum} from "@/pages/Coliseum/Coliseum.tsx";
import {Tournament} from "@/pages/Tournament/Tournament.tsx";
import {Author} from "@/pages/Author/Author.tsx";
import MyPage from "@/pages/MyPage/MyPage.tsx";
import NewNovel from "@/pages/NewNovel/NewNovel.tsx";
import {TournamentBoard} from "@/pages/TournamentBoard/TournamentBoard.tsx";
import {Test} from "@/pages/Test/Test.tsx";
import Test2 from "@/pages/Test/Test2.tsx";
import Test3 from "@/pages/Test/Test3.tsx";
import Test4 from "@/pages/Test/Test4.tsx";
import {lazy} from "react";
import {AuthorJoinTourament} from "@/pages/AuthorJoinTourament/AuthorJoinTourament";
import {ResultTourament} from "@/pages/ResultTourament/ResultTourament";
import {HallTourament} from "@/pages/HallTourament/HallTourament";
import {FanPage} from "@/pages/fanPage/FanPage";
import {UserManual} from "@/pages/userManual/UserManual";
import {TopComment} from "@/pages/topComment/TopComment";
import {Comment} from "@/pages/comment/Comment";
import {Recruitment} from "@/pages/recruitment/Recruitment";
import {TopTourament} from "@/pages/topTourament/TopTourament";

export const Login = lazy(() => import("@/pages/login/Login.tsx"));
export const Register = lazy(() => import("@/pages/register/Register.tsx"));

export const router = createBrowserRouter([
    {
        element: <Layout/>,
        errorElement: <NotFoundPage/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/coliseum",
                element: <Coliseum/>,
            },
            {
                path: "/tournament",
                element: <Tournament/>,
            },
            {
                path: "/author",
                element: <Author/>,
            },
            {
                path: "/mypage",
                element: <MyPage/>,
            },
            {
                path: "/newnovel",
                element: <NewNovel/>,
            },
            {
                path: "/tournament-board",
                element: <TournamentBoard/>,
            },
            {
                path: "/test-coli",
                element: <Test/>,
            },
            {
                path: "/test-coli2",
                element: <Test2/>,
            },
            {
                path: "/test-coli3",
                element: <Test3/>,
            },
            {
                path: "/test-coli4",
                element: <Test4/>,
            },
            {
                path: "/author-join-tourament",
                element: <AuthorJoinTourament/>,
            },
            {
                path: "/result-tourament",
                element: <ResultTourament/>,
            },
            {
                path: "hall-tourament",
                element: <HallTourament/>
            },
            {
                path: "/fan-page",
                element: <FanPage/>
            },
            {
                path: "/user-manual",
                element: <UserManual/>
            },
            {
                path: "/top-comment",
                element: <TopComment/>
            },
            {
                path: "/comment",
                element: <Comment/>
            },
            {
                path: "/recruitment",
                element: <Recruitment/>
            },
            {
                path: "/top-tourament",
                element: <TopTourament/>
            },
            {
                path: "/login",
                element: <Login/>,
            },
            {
                path: "/register",
                element: <Register/>,
            },
        ],
    },
]);
