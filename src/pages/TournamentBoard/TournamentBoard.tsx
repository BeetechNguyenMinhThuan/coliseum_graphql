import { useTranslation } from "react-i18next";

import { NavLink } from "react-router-dom";
import { Advertisement } from "components/Advertisement";
import { SideBarTournamentBoard } from "@/components/SideBar/SideBarTournamentBoard.tsx";
import TournamentPlayer from "@/components/Matchup/Matchup";
import Matchup from "@/components/Matchup/Matchup";

export function TournamentBoard() {
  const { t } = useTranslation();
  const arrAds = [
    "s-l1200.webp",
    "coke-print-ad.jpg",
    "7_Up_-_You_like_it,_it_likes_you,_1948.jpg",
  ];
  const resultRound = [
    {
      name: "round 1",
      a: 100,
      b: 10
    },
    {
      name: "round 2",
      a: 59,
      b: 50
    },
    {
      name: "round 3",
      a: 29,
      b: 60
    },
    {
      name: "round 4",
      a: 40,
      b: 46
    },
    {
      name: "round 6",
      a: 90,
      b: 56
    },
    {
      name: "round 7",
      a: 90,
      b: 56
    },
    {
      name: "round 8",
      a: 90,
      b: 56
    },
    {
      name: "round 9",
      a: 90,
      b: 56
    },
    {
      name: "round 10",
      a: 90,
      b: 56
    },
    {
      name: "round 11",
      a: 90,
      b: 56
    },
    {
      name: "round 12",
      a: 90,
      b: 56
    },
    {
      name: "round 13",
      a: 90,
      b: 56
    },
    {
      name: "round 14",
      a: 90,
      b: 56
    },
    {
      name: "round 15",
      a: 90,
      b: 56
    },
    {
      name: "round 16",
      a: 90,
      b: 56
    }
  ]

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
            <li className="">
              <a className="">1st港需チ緒動</a>
            </li>
            <li className="">
              <a className="">1st港需チ緒動</a>
            </li>
            <li className="">
              <a className="">1st港需チ緒動</a>
            </li>
          </ul>
        </div>
        {
          resultRound.map((result, index) => (
            <Matchup key={index} result={result}></Matchup>
          ))
        }
      </div>
    </>
  );
}
