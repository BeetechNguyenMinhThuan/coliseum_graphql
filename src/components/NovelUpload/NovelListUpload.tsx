import { NavLink } from "react-router-dom";

export default function NovelListUpload() {
  return (
    <div className="border-black-500 min-h-[188px] border-b-2 border-l-2 border-r-2 border-solid p-2">
      <div className="border-black-500 min-h-[188px] border-2 border-solid p-2">
        <div className="p-3 text-center text-3xl">
          <div>歳ーだ平申</div>
        </div>
        {/* Button add new novel */}
        <NavLink to={"add-novel"}>
          <div className="rounded-xl border-2 p-3 text-center text-3xl">
            <span className="">新しい作品を追加</span>
          </div>
        </NavLink>
        <div className="p-3 text-center text-3xl">
          <div>歳ーだ平申</div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
