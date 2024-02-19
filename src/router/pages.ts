import { lazy } from "react";

export const Login = lazy(() => import("@/pages/auth/login/Login"));
export const MyPage = lazy(() => import("@/pages/MyPage/MyPage.tsx"));
export const Register = lazy(() => import("@/pages/register/Register.tsx"));
