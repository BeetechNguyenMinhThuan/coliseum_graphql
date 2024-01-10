import { useTranslation } from "react-i18next";

import { NavLink } from "react-router-dom";
import { Advertisement } from "components/Advertisement";
import { SideBarTournamentBoard } from "@/components/SideBar/SideBarTournamentBoard.tsx";

export function TournamentBoard() {
  const { t } = useTranslation();
  const arrAds = [
    "s-l1200.webp",
    "coke-print-ad.jpg",
    "7_Up_-_You_like_it,_it_likes_you,_1948.jpg",
  ];

  return (
    <>
      <SideBarTournamentBoard />
      <div className="content flex-1">
        <div className="bread-crumbs">
          <ul className="flex">
            <li className="">
              <a className="">1st港需チ緒動</a>
            </li>
            <li className="">
              <a className="">1st港需チ緒動</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
