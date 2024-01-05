import NovelListUpload from "components/NovelUpload/NovelListUpload";
import { SideBarMyPage } from "components/SideBar/SideBarMyPage";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function MyPage() {
  const navigate = useNavigate();
  useEffect(() => {
    const tokenString = localStorage.getItem("token");
    if(tokenString){
        let {token, exprired_token} = JSON.parse(tokenString);
        console.log(token, exprired_token);
        
        if (!token || exprired_token) {
          navigate("/login");
        }
    }else{
        navigate("/login");
    }
}, []);

  return (
    <>
      <SideBarMyPage />
      <div className="content flex-1 ">
        {/* edit profile */}
        <div className="grid grid-cols-[2fr_3fr_1fr] gap-7 border-2 p-4">
          <div className="flex flex-col">
            <p>選歳ーだ平申ゅゆ</p>
            <p>増部1公</p>
          </div>
          <div className="flex items-center text-2xl">
            <p>日もん健滅ヨミ盗97百</p>
          </div>
          <div className="flex items-center">
            <NavLink
              className={"rounded-xl border-2 py-1"}
              to={"/edit-profile"}
            >
              ドーつ室芸
            </NavLink>
          </div>
        </div>
        <div className="grid grid-cols-[2fr_3fr_1fr] gap-7 border-b-2 border-l-2 border-r-2 p-4">
          <div className="flex flex-col">
            <p>選歳ーだ平申ゅゆ</p>
            <p>増部1公</p>
          </div>
          <div className="flex items-center text-2xl">
            <p>日もん健滅ヨミ盗97百</p>
          </div>
          <div className="flex items-center">
            <NavLink
              className={"rounded-xl border-2 py-1"}
              to={"/edit-profile"}
            >
              ドーつ室芸
            </NavLink>
          </div>
        </div>
        <div className="grid grid-cols-[2fr_3fr_1fr] gap-7 border-b-2 border-l-2 border-r-2 p-4">
          <div className="flex flex-col">
            <p>選歳ーだ平申ゅゆ</p>
            <p>増部1公</p>
          </div>
          <div className="flex items-center text-2xl">
            <p>日もん健滅ヨミ盗97百</p>
          </div>
          <div className="flex items-center">
            <NavLink
              className={"rounded-xl border-2 py-1"}
              to={"/edit-profile"}
            >
              ドーつ室芸
            </NavLink>
          </div>
        </div>
        {/*  */}
        <NovelListUpload />
      </div>
    </>
  );
}
