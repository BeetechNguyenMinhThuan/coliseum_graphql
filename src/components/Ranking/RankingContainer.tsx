import { RankingTab } from "./RankingTab.tsx";
import { RankingList } from "./RankingList.tsx";
import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./index.scss";
import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_NOVELS_PAGINATE_RANKING } from "@/graphql-client/novel/queries.ts";
export function RankingContainer() {
  const tabs = ["", "hot", "weekly", "new"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const { loading, error, data, refetch } = useQuery(
    GET_NOVELS_PAGINATE_RANKING,
    {
      variables: {
        page: 1,
        limit: 3,
        filter: {
          searchValue: null,
        },
        type: activeTab,
      },
    },
  );

  const handleUpdateRanking = (tab) => {
    hideRankingList();
    setActiveTab(tab);
  };
  useEffect(() => {
    refetch();
  }, [activeTab]);
  const [showRankingList, setShowRankingList] = useState(true);

  const hideRankingList = () => {
    setShowRankingList(false);
  };

  const showRankingListAgain = () => {
    setShowRankingList(true);
  };

  return (
    <div className="mt-5 border-2 p-2">
      <h2 className="pb-2 text-center text-2xl font-bold">評価</h2>
      {location.pathname === "/newnovel" ? (
        <div className="border-black-500 mb-3 min-h-[188px] border-y-2 border-solid p-2"></div>
      ) : (
        ""
      )}
      <div>
        <ul className="mb-2 flex justify-between">
          {tabs.map((tab, index) => (
            <li
              key={index}
              className={`cursor-pointer border-2 px-7 hover:bg-gray-200 ${activeTab === tab ? "bg-gray-200" : ""}`}
              onClick={() => handleUpdateRanking(tab)}
            >
              <span>{tab}</span>
            </li>
          ))}
        </ul>
      </div>

      {location.pathname === "/newnovel" ? (
        <div>
          <div className="border-t-2 py-4"></div>
          <div className="border-t-2 py-4"></div>
        </div>
      ) : (
        ""
      )}

      <CSSTransition
        in={showRankingList}
        timeout={150}
        classNames="ranking-list"
        onExited={showRankingListAgain}
      >
        <RankingList novels={data} refetch={refetch} />
      </CSSTransition>
    </div>
  );
}
