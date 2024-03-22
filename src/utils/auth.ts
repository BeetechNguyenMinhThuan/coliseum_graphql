import { redirect } from "react-router-dom";
import {
  ACCESS_TOKEN,
  getItemStorage,
  getUserInfo,
} from "./localStorageHepler";
import userPool from "@/constants/userPool";

export function getAuthToken() {
  return getItemStorage(ACCESS_TOKEN);
}

export function checkAuthLoader() {
  const user = userPool.getCurrentUser();
  if (!user) {
    return redirect("/login");
  }
  return null;
}


export function checkAuthLoginLoader() {
  const haveToken = !!getAuthToken();
  const user = getUserInfo();

  if (haveToken && Object.keys(user).length > 0) {
    return redirect("/");
  }
  return null;
}
