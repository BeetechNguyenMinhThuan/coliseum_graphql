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
      a: {
        name: "SideBarTournamentdd",
        vote: 100,
      },
      b: {
        name: "SideBarTournntBoard",
        vote: 50,
      },
    },

    {
      name: "round 2",
      a: {
        name: "d",
        vote: 100,
      },
      b: {
        name: "u",
        vote: 50,
      },
    },

    {
      name: "round 3",
      a: {
        name: "d",
        vote: 100,
      },
      b: {
        name: "u",
        vote: 50,
      },
    },

    {
      name: "round 4",
      a: {
        name: "d",
        vote: 100,
      },
      b: {
        name: "u",
        vote: 50,
      },
    },

    {
      name: "round 5",
      a: {
        name: "d",
        vote: 100,
      },
      b: {
        name: "u",
        vote: 50,
      },
    },
    {
      name: "round 6",
      a: {
        name: "d",
        vote: 100,
      },
      b: {
        name: "u",
        vote: 50,
      },
    },
    {
      name: "round 7",
      a: {
        name: "d",
        vote: 100,
      },
      b: {
        name: "u",
        vote: 50,
      },
    },
    {
      name: "round 8",
      a: {
        name: "d",
        vote: 100,
      },
      b: {
        name: "u",
        vote: 50,
      },
    },
    {
      name: "round 9",
      a: {
        name: "d",
        vote: 100,
      },
      b: {
        name: "u",
        vote: 50,
      },
    },
    {
      name: "round 10",
      a: {
        name: "d",
        vote: 100,
      },
      b: {
        name: "u",
        vote: 50,
      },
    },
    {
      name: "round 11",
      a: {
        name: "d",
        vote: 100,
      },
      b: {
        name: "u",
        vote: 50,
      },
    },
    {
      name: "round 12",
      a: {
        name: "d",
        vote: 100,
      },
      b: {
        name: "u",
        vote: 50,
      },
    },
    {
      name: "round 13",
      a: {
        name: "d",
        vote: 100,
      },
      b: {
        name: "u",
        vote: 50,
      },
    },
    {
      name: "round 14",
      a: {
        name: "d",
        vote: 100,
      },
      b: {
        name: "u",
        vote: 50,
      },
    },
    {
      name: "round 15",
      a: {
        name: "d",
        vote: 100,
      },
      b: {
        name: "u",
        vote: 50,
      },
    },
    {
      name: "round 16",
      a: {
        name: "d",
        vote: 100,
      },
      b: {
        name: "u",
        vote: 50,
      },
    },
  ];

  const createNewRoundsData = (numRounds) => {
    const newRounds = [];
    for (let i = 0; i <= numRounds; i++) {
      const numMatches = Math.pow(2, numRounds - i);
      const roundData = [];
      for (let j = 0; j < numMatches; j++) {
        roundData.push({
          name: `match ${j +1} - round ${i + 1 }`,
          a: { name: "", vote: 0 },
          b: { name: "", vote: 0 },
        });
      }
      newRounds.push(roundData);
    }
    return newRounds;
  };

  // Sử dụng hàm với tham số là số vòng muốn tạo
  const numRounds = Math.log2(resultRound.length);
  const newRounds = createNewRoundsData(numRounds);

  console.log(newRounds);

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
        {resultRound.map((result, index) => (
          <Matchup key={index} result={result}></Matchup>
        ))}
      </div>
    </>
  );
}
