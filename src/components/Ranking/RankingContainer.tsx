import { RankingTab } from "./RankingTab.tsx";
import { RankingList } from "./RankingList.tsx";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./index.scss";
import { useQuery } from "@apollo/client";
import { NOVELS_FILTER_BY_RANKING } from "@/graphql-client/novel/queries.ts";
import { NovelLoading } from "../Loading/Loading.tsx";

export function RankingContainer() {
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
      limit: 3,
      filter: {
        searchValue: null,
      },
      type: activeTab,
    },
  });

  return (
    <div className="mt-5 border-2 p-2">
      <h2 className="pb-2 text-center text-2xl font-bold">評価</h2>
      {location.pathname === "/newnovel" ? (
        <div className="border-black-500 mb-3 min-h-[188px] border-y-2 border-solid p-2"></div>
      ) : (
        ""
      )}
      <RankingTab
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        hideRankingList={() => setShowRankingList(false)}
        refetch={refetch}
      ></RankingTab>

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
        onExited={() => setShowRankingList(true)}
      >
        <div>
          {loading ? (
            <div className="flex flex-col gap-3">
              <NovelLoading />
              <NovelLoading />
              <NovelLoading />
            </div>
          ) : (
            <RankingList novels={data?.getNovelsPaginate} refetch={refetch} />
          )}
        </div>
      </CSSTransition>
    </div>
  );
}
