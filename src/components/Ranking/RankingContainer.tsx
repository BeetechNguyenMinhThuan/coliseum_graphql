import { RankingTab } from "./RankingTab.tsx";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./index.scss";
import { useQuery } from "@apollo/client";
import { NOVELS_FILTER_BY_RANKING } from "@/graphql-client/novel/queries.ts";
import { NovelLoading } from "../Loading/Loading.tsx";
import { NavLink } from "react-router-dom";
import { NovelList } from "../novel/NovelList.tsx";

interface RankingProp {
  limit: number;
}
export function RankingContainer(props: RankingProp) {
  const { limit } = props;

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
      limit: limit,
      filter: {
        searchValue: null,
      },
      type: activeTab,
    },
  });

  return (
    <div className="mt-5 border-2 p-2">
      <h2 className="pb-2 text-center text-2xl font-bold">評価</h2>
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
            <>
              <NovelList refetch={refetch} novels={data?.getNovelsPaginate} />

              {location.pathname !== "/newnovel" && (
                <div className="my-3 flex justify-end">
                  <NavLink
                    to="/newnovel#ranking-container"
                    className=" rounded-md bg-orange-500 px-4 py-2 text-white"
                  >
                    すべてのランキングを見る
                  </NavLink>
                </div>
              )}
            </>
          )}
        </div>
      </CSSTransition>
    </div>
  );
}
