import React, { Fragment } from "react";
import "./test5.scss";
import classNames from "@/utils/classNames";

const scrollToElement = (elementId) => {
  console.log(elementId);
  
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth", 
      block: "center",    
      inline: "center"    
    });
  }
  
};

const rounds = [
  [
    {
      name: "round 1",
      a: {
        name: "【四方世界へ【四方世界へ】【四方世界へ】】",
        vote: "",
      },
      b: {
        name: "【四方世界へ【四方世界へ",
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
        name: "sdas",
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
  [
    {
      name: "champion",
      a: {
        name: "123",
        vote: "",
      },
    },
  ],
];

export default function Test5() {
  return (
    <div className="container">
      <div className="flex gap-4">
        <button onClick={() => scrollToElement("round-1")}>Round 1</button>
        <button onClick={() => scrollToElement("round-2")}>Round 2</button>
        <button onClick={() => scrollToElement("round-3")}>Round 3</button>
        <button onClick={() => scrollToElement("round-4")}>SemiFinal</button>
        <button onClick={() => scrollToElement("round-5")}>Final</button>
        <button onClick={() => scrollToElement("round-6")}>Chapion</button>

      </div>
      <div className="abcc px-6 w-full">
        {rounds.map((round, roundIndex) => (
          <div
            className={`flex flex-col column-${roundIndex + 1}  w-[300px]`}
            key={`round-${roundIndex}`}
            id={`round-${roundIndex + 1}`}
          >
            {round.map((match, matchIndex) => (
              <div
                className={` roundd relative round-${roundIndex + 1}  flex flex-1  flex-col `}
                key={`match-${matchIndex}`}
              >
                {roundIndex + 1 == rounds.length ? (
                  <Fragment>
                    <div className=" relative flex w-[300px] flex-1 items-center" >
                      <div className="relative w-full">
                        <div className="absolute bottom-10">CHAMPION</div>
                        <div className=" namee w-full border-2">
                          {match.a.name} - {match.a.vote}
                        </div>
                      </div>

                      {roundIndex > 0 && (
                        <div className=" line-sub absolute right-full top-1/2 h-0.5  w-[60px] bg-red-500"></div>
                      )}
                    </div>
                  </Fragment>
                ) : (
                  <div className=" relative flex w-[300px] flex-1 items-center py-1 after:w-[2px]">
                    <div className=" namee w-full border-2">
                      {match.a.name} - {match.a.vote}
                    </div>

                    <div
                      className={classNames(
                        `line absolute left-full top-1/2 h-0.5  w-[150px]`,
                        match.a.vote > match?.b?.vote
                          ? "bg-red-500"
                          : "bg-black",
                      )}
                    ></div>
                    {roundIndex > 0 && (
                      <div className=" line-sub absolute right-full top-1/2 h-0.5  w-[60px] bg-red-500"></div>
                    )}
                  </div>
                )}

                {roundIndex !== 5 && (
                  <div className=" relative flex w-[300px] flex-1 items-center after:w-[2px]">
                    <div className=" namee w-full border-2">
                      {match?.b?.name} - {match?.b?.vote}
                    </div>
                    <div
                      className={`line absolute left-full top-1/2 h-0.5  w-[150px] bg-black`}
                    ></div>

                    {roundIndex > 0 && (
                      <div className=" line-sub absolute right-full top-1/2 h-0.5  w-[60px]  bg-red-500"></div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
