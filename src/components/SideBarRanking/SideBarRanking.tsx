import { useEffect, useLayoutEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./index.scss";
import { useQuery } from "@apollo/client";
import { NOVELS_FILTER_BY_RANKING } from "@/graphql-client/novel/queries.ts";

export function SideBarRanking() {
  const tabs = [
    "",
    "hot",
    "daily",
    "weekly",
    "monthly",
    "quarterly",
    "yearly",
    "cumulative",
  ];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [showRankingList, setShowRankingList] = useState(true);

  const { loading, data, refetch } = useQuery(NOVELS_FILTER_BY_RANKING, {
    variables: {
      page: 1,
      limit: 10,
      filter: {
        searchValue: null,
      },
      type: activeTab,
    },
  });
  
  useEffect(() => {
    setShowRankingList(false)
    console.log(123);
    
  },[activeTab])
  console.log(456);
  
  const handleSwitchRanking = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="mt-4 rounded-[4px] border-2 p-4">
      <h2 className="title border-b-2 border-dashed border-b-[#ccc] text-2xl font-semibold">
        Ranking
      </h2>
      <div className="tabs grid grid-cols-3 gap-x-3">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-ranking   cursor-pointer py-1  hover:text-color5 ${activeTab === tab ? "text-color5" : ""}`}
            onClick={() => handleSwitchRanking(tab)}
          >
            <span>{tab}</span>
          </div>
        ))}
      </div>

      <CSSTransition
        in={showRankingList}
        timeout={150}
        classNames="ranking-list"
        onExited={() => setShowRankingList(true)}
      >
        <div>
         {data?.getNovelsPaginate?.novels && (
            <div className="flex flex-col gap-4 item">
              {data?.getNovelsPaginate?.novels.map((novel, index) => (
                <div key={index} className="flex novel-item justify-between items-center">
                  <div className="icon-ranking w-[40px] h-[40px] rounded-full flex justify-center items-center bg-color1"> {index + 1}</div>
                  <div className=""> {novel?.title}</div>
                  <div className="arrow">  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </CSSTransition>
    </div>
  );
}
