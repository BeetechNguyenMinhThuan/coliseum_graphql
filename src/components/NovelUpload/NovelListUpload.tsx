import { NavLink } from "react-router-dom";

export default function NovelListUpload() {
  return (
    <div className="border-l-2 border-r-2 border-b-2 border-black-500 border-solid min-h-[188px] p-2">
        <div className="border-2 border-black-500 border-solid min-h-[188px] p-2">
            <div className="text-center text-3xl p-3">
                <div>歳ーだ平申</div>
            </div>
            {/* Button add new novel */}
            <NavLink to={"/add-novel"}>
                <div className="text-center text-3xl border-2 p-3 rounded-xl">
                    <span className="">新しい作品を追加</span>
                </div>
            </NavLink>
            <div className="text-center text-3xl p-3">
                <div>歳ーだ平申</div>
            </div>
            <div>
                
            </div>
        </div>
    </div>
  )
}
