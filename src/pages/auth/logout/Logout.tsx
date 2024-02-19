import { ACCESS_TOKEN } from "@/utils/localStorageHepler";
import { redirect } from "react-router-dom";

export function action(){
    localStorage.removeItem(ACCESS_TOKEN)
    return redirect('/')
}