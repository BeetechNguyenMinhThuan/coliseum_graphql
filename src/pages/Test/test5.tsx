import React from "react";
import "./test5.scss";
import classNames from "@/utils/classNames";

const rounds = [
  [
    {
      name: "round 1",
      a: {
        name: "",
        vote: "",
      },
      b: {
        name: "",
        vote: "",
      },
    },
    {
      name: "round 2",
      a: {
        name: "",
        vote: "",
      },
      b: {
        name: "",
        vote: "",
      },
    },
    {
      name: "round 3",
      a: {
        name: "",
        vote: "",
      },
      b: {
        name: "",
        vote: "",
      },
    },
    {
      name: "round 4",
      a: {
        name: "",
        vote: "",
      },
      b: {
        name: "",
        vote: "",
      },
    },
    {
      name: "round 5",
      a: {
        name: "",
        vote: "",
      },
      b: {
        name: "",
        vote: "",
      },
    },
    {
      name: "round 6",
      a: {
        name: "",
        vote: "",
      },
      b: {
        name: "",
        vote: "",
      },
    },
    {
      name: "round 7",
      a: {
        name: "",
        vote: "",
      },
      b: {
        name: "",
        vote: "",
      },
    },
    {
      name: "round 8",
      a: {
        name: "",
        vote: "",
      },
      b: {
        name: "",
        vote: "",
      },
    },
    {
      name: "round 9",
      a: {
        name: "",
        vote: "",
      },
      b: {
        name: "",
        vote: "",
      },
    },
    {
      name: "round 10",
      a: {
        name: "",
        vote: "",
      },
      b: {
        name: "",
        vote: "",
      },
    },
    {
      name: "round 11",
      a: {
        name: "",
        vote: "",
      },
      b: {
        name: "",
        vote: "",
      },
    },
    {
      name: "round 12",
      a: {
        name: "",
        vote: "",
      },
      b: {
        name: "",
        vote: "",
      },
    },
    {
      name: "round 13",
      a: {
        name: "",
        vote: "",
      },
      b: {
        name: "",
        vote: "",
      },
    },
    {
      name: "round 14",
      a: {
        name: "",
        vote: "",
      },
      b: {
        name: "",
        vote: "",
      },
    },
    {
      name: "round 15",
      a: {
        name: "",
        vote: "",
      },
      b: {
        name: "",
        vote: "",
      },
    },
    {
      name: "round 16",
      a: {
        name: "",
        vote: "",
      },
      b: {
        name: "",
        vote: "",
      },
    },
  ],
  [
    {
      name: "round 1",
      a: {
        name: "",
        vote: "",
      },
      b: {
        name: "",
        vote: "",
      },
    },
    {
      name: "round 2",
      a: {
        name: "",
        vote: "",
      },
      b: {
        name: "",
        vote: "",
      },
    },
    {
      name: "round 3",
      a: {
        name: "",
        vote: "",
      },
      b: {
        name: "",
        vote: "",
      },
    },
    {
      name: "round 4",
      a: {
        name: "",
        vote: "",
      },
      b: {
        name: "u",
        vote: "",
      },
    },
    {
      name: "round 5",
      a: {
        name: "",
        vote: "",
      },
      b: {
        name: "",
        vote: "",
      },
    },
    {
      name: "round 6",
      a: {
        name: "",
        vote: "",
      },
      b: {
        name: "",
        vote: "",
      },
    },
    {
      name: "round 7",
      a: {
        name: "",
        vote: "",
      },
      b: {
        name: "",
        vote: "",
      },
    },
    {
      name: "round 8",
      a: {
        name: "",
        vote: "",
      },
      b: {
        name: "u",
        vote: "",
      },
    },
  ],
  [
    {
      name: "round 1",
      a: {
        name: "",
        vote: "",
      },
      b: {
        name: "",
        vote: "",
      },
    },
    {
      name: "round 2",
      a: {
        name: "",
        vote: "",
      },
      b: {
        name: "",
        vote: "",
      },
    },
    {
      name: "round 3",
      a: {
        name: "",
        vote: "",
      },
      b: {
        name: "",
        vote: "",
      },
    },
    {
      name: "round 4",
      a: {
        name: "",
        vote: "",
      },
      b: {
        name: "",
        vote: "",
      },
    },
  ],
  [
    {
      name: "round ",
      a: {
        name: "",
        vote: "",
      },
      b: {
        name: "",
        vote: "",
      },
    },
    {
      name: "",
      a: {
        name: "",
        vote: "",
      },
      b: {
        name: "",
        vote: "",
      },
    },
  ],
  [
    {
      name: "",
      a: {
        name: "",
        vote: "",
      },
      b: {
        name: "",
        vote: "",
      },
    },
  ],
];

console.log(rounds);
export default function Test5() {
  return (
    <div className="abcc w-full ">
      {rounds.map((round, roundIndex) => (
        <div
          className={`flex flex-col justify-center column-${roundIndex + 1}  `}
          key={`round-${roundIndex}`}
        >
          {round.map((match, matchIndex) => (
            <div
              className={` roundd relative round-${roundIndex + 1}  flex flex-1 flex-col `}
              key={`match-${matchIndex}`}
            >
              <div className=" relative flex flex-1 items-center">
                <div className=" w-full border-2">
                  {match.a.name} - {match.a.vote}
                </div>

                <div
                  className={classNames(
                    `line absolute left-full top-1/2 h-0.5  w-[150px]`,
                    match.a.vote > match.b.vote ? "bg-red-500" : "bg-black",
                  )}
                ></div>
                {roundIndex > 0 && (
                  <div className=" line-sub absolute right-full top-1/2 h-0.5  w-[60px] bg-red-500"></div>
                )}
              </div>

              <div className=" relative flex flex-1 items-center">
                <div className=" w-full  border-2">
                  {match.b.name} - {match.b.vote}
                </div>
                <div
                  className={`line absolute left-full top-1/2 h-0.5  w-[150px] bg-black`}
                ></div>

                {roundIndex > 0 && (
                  <div
                    className=" line-sub absolute right-full top-1/2 h-0.5  w-[60px]  bg-red-500"
                    style={{
                      transform: "",
                    }}
                  ></div>
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
