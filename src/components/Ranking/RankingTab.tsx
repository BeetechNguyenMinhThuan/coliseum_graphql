import { useEffect } from "react";

interface RankingTabProps {
  tabs: string[];
  setActiveTab: (tab: string) => void;
  activeTab: string;
  hideRankingList: () => void;
  refetch: () => void;
}

export function RankingTab({
  tabs,
  setActiveTab,
  activeTab,
  hideRankingList,
  refetch,
}: RankingTabProps) {
  const handleSwitchRanking = (tab: string) => {
    hideRankingList();
    setActiveTab(tab);
  };

  useEffect(() => {
    refetch();
  }, [activeTab, refetch]);

  return (
    <div>
      <ul className="mb-2 flex justify-between mt-3">
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={`tab-ranking border-r-2 border-gray-200 cursor-pointer py-1 px-7 hover:text-color5 ${activeTab === tab ? "text-color5" : ""}`}
            onClick={() => handleSwitchRanking(tab)}
          >
            <span>{tab}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
