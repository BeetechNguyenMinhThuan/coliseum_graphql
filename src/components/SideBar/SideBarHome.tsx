import { NavLink } from "react-router-dom";

export function SidebarHome() {
  return (
    <div className="coli-sidebar flex flex-col py-4">
      <div className="flex">
        <span className="col-1 block font-semibold">
          豊後アリーナ 小
          <span className="block text-sm font-normal">説投稿サイトへ行く</span>
        </span>
        <a
          href=""
          className="bg-color2 col-1 flex items-center rounded-[6px] border-2 px-4 py-1"
        >
          今ららから
        </a>
      </div>
      <ul className="my-6">
        <li className="mt-6 border-2 rounded-[10px] py-3 px-4 hover:bg-color2 cursor-pointer ">Chi tiết giải đấu</li>
        <li className="mt-6 border-2 rounded-[10px] py-3 px-4 hover:bg-color2 cursor-pointer ">Danh sách người tham gia</li>
        <li className="mt-6 border-2 rounded-[10px] py-3 px-4 hover:bg-color2 cursor-pointer ">Tourament</li>
        <li className="mt-6 border-2 rounded-[10px] py-3 px-4 hover:bg-color2 cursor-pointer ">初心者向けガイ</li>
      </ul>
    </div>
  );
}
