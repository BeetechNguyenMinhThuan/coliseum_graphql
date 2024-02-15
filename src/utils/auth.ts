import { redirect } from "react-router-dom";
import {
  ACCESS_TOKEN,
  getItemStorage,
  getUserInfo,
} from "./localStorageHepler";

export function getAuthToken() {
  return getItemStorage(ACCESS_TOKEN);
}

export function checkAuthLoader() {
  const haveToken = !!getAuthToken();
  const user = getUserInfo();

  if (haveToken && Object.keys(user).length > 0) {
    return null;
  }
  return redirect("/login");
}

export function checkAuthLoginLoader() {
  const haveToken = !!getAuthToken();
  const user = getUserInfo();

  if (haveToken && Object.keys(user).length > 0) {
    return redirect("/");
  }
  return null;
}
