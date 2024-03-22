import userPool from "@/constants/userPool";
import { ACCESS_TOKEN } from "@/utils/localStorageHepler";
import { redirect } from "react-router-dom";

export async function action() {
  try {
    const user = await userPool.getCurrentUser();
    if (user) {
      user.signOut();
      return redirect("/login");
    }
  } catch (error) {
    console.log(error);
  }
}
