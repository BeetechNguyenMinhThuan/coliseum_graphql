import { useState } from "react";

export function RankingTab({
  tabs,
  getNovelsRanking,
  hideRankingList
}) {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleUpdateRanking = (tab) => {
    setActiveTab(tab)
    hideRankingList()
    getNovelsRanking(tab)
  };
  return (
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
  );
}
