import NovelListUpload from "components/NovelUpload/NovelListUpload";
import { SideBarMyPage } from "components/SideBar/SideBarMyPage";
import {NavLink} from "react-router-dom";

export default function MyPage() {
  return (
    <>
    <SideBarMyPage/>
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
                <NavLink className={"rounded-xl border-2 py-1"} to={"/edit-profile"}>ドーつ室芸</NavLink>
            </div>
        </div>
        <div className="grid grid-cols-[2fr_3fr_1fr] gap-7 border-b-2 border-r-2 border-l-2 p-4">
            <div className="flex flex-col">
                <p>選歳ーだ平申ゅゆ</p>
                <p>増部1公</p>
            </div>
            <div className="flex items-center text-2xl">
                <p>日もん健滅ヨミ盗97百</p>
            </div>
            <div className="flex items-center">
                <NavLink className={"rounded-xl border-2 py-1"} to={"/edit-profile"}>ドーつ室芸</NavLink>
            </div>
        </div>
        <div className="grid grid-cols-[2fr_3fr_1fr] gap-7 border-b-2 border-r-2 border-l-2 p-4">
            <div className="flex flex-col">
                <p>選歳ーだ平申ゅゆ</p>
                <p>増部1公</p>
            </div>
            <div className="flex items-center text-2xl">
                <p>日もん健滅ヨミ盗97百</p>
            </div>
            <div className="flex items-center">
                <NavLink className={"rounded-xl border-2 py-1"} to={"/edit-profile"}>ドーつ室芸</NavLink>
            </div>
        </div>
        {/*  */}
        <NovelListUpload />
    </div>
</>
  )
}
