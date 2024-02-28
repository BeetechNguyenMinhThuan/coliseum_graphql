import { RankingTab } from "./RankingTab.tsx";
import { RankingList } from "./RankingList.tsx";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./index.scss";
import {  useQuery } from "@apollo/client";
import { GET_NOVELS_PAGINATE_RANKING } from "@/graphql-client/novel/queries.ts";
export function RankingContainer() {
  const tabs = ["", "hot", "weekly"];
  const [type, setType] = useState("");

  const { loading, error, data, refetch } = useQuery(
    GET_NOVELS_PAGINATE_RANKING,
    {
      variables: {
        page: 1,
        limit: 3,
        filter: {
          searchValue: null,
        },
        type: type,
      },
    },
  );

  const getNovelsRanking = (type) => {
    setType(type);
  };
  const [showRankingList, setShowRankingList] = useState(true);

  const hideRankingList = () => {
    setShowRankingList(false);
  };

  // Hàm để hiển thị RankingList
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
      <RankingTab tabs={tabs} getNovelsRanking={getNovelsRanking} hideRankingList={hideRankingList}/>

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
