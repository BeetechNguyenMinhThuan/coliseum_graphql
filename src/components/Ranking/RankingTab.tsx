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
      <ul className="mb-2 flex justify-between">
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={`cursor-pointer border-2 px-7 hover:bg-gray-200 ${activeTab === tab ? "bg-gray-200" : ""}`}
            onClick={() => handleSwitchRanking(tab)}
          >
            <span>{tab}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
