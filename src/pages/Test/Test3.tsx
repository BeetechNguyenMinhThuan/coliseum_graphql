import classNames from "@/utils/classNames";
import React, { useState } from "react";

const contents = [
  {
    id: 1,
    name: "ken",
    tab: "tab1",
  },
  {
    id: 2,
    name: "baby",
    tab: "tab2",
  },
  {
    id: 3,
    name: "solider",
    tab: "tab3",
  },
];
const tabs = ["tab1", "tab2", "tab3"];
export default function Test3() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="flex gap-x-3">
      {tabs.map((tab) => (
        <div
          onClick={() => {
            setActiveTab(tab);
          }}
          className={classNames(
            "btn cursor-pointer px-3",
            tab === activeTab ? "bg-yellow-500" : "",
          )}
        >
          {tab}
        </div>
      ))}
      <div className="content">
        {contents.map((item) => (
          <p>{item.tab === activeTab ? item.name : ""}</p>
        ))}
      </div>
    </div>
  );
}
