import { RankingTab } from "./RankingTab.tsx";
import { RankingList } from "./RankingList.tsx";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./index.scss";
export function RankingContainer() {
  var location = useLocation();

  const novels = [
    {
      like: 6,
      dislike: 0,
      image: "/assets/Thumbnail-YouTube-la-gi-1-1-1-750x420.jpg",
      author: "ウエトマエ",
      title: "運営会社 株式会",
      description:
        "日本は四季がはっきりしていて、それぞれの季節に美しい自然が楽しめます。春には桜の花が咲き、夏には緑が豊かになります。秋は紅葉が美しく、冬には雪景色が見られることもあります。日本の文化は古くからの伝統と現代の技術が融合していて、訪れる人々に深い印象を与えます。日本料理も世界中で人気があり、寿司や天ぷらなどは多くの人に愛されています。\n" +
        "                            日本は四季がはっきりしていて、それぞれの季節に美しい自然が楽しめます。春には桜の花が咲き、夏には緑が豊かになります。秋は紅葉が美しく、冬には雪景色\n" +
        "                            日本は四季がはっきりしていて、それぞれの季節に美しい自然が楽しめます。春には桜の花が咲き、夏には緑が豊かになります。秋は紅葉が美しく、冬には雪景色",
      created_at: "2023.11.30",
      status: "たった今",
      ranking: 1,
    },
    {
      like: 6,
      dislike: 0,
      image: "/assets/thumbnail-la-gi-1.jpg",
      author: "ウエトマエ",
      title: "運営会社 株式会社ウエトマエ",
      description:
        "日本は四季がはっきりしていて、それぞれの季節に美しい自然が楽しめます。春には桜の花が咲き、夏には緑が豊かになります。秋は紅葉が美しく、冬には雪景色が見られることもあります。日本の文化は古くからの伝統と現代の技術が融合していて、訪れる人々に深い印象を与えます。日本料理も世界中で人気があり、寿司や天ぷらなどは多くの人に愛されています。\n" +
        "                            日本は四季がはっきりしていて、それぞれの季節に美しい自然が楽しめます。春には桜の花が咲き、夏には緑が豊かになります。秋は紅葉が美しく、冬には雪景色\n" +
        "                            日本は四季がはっきりしていて、それぞれの季節に美しい自然が楽しめます。春には桜の花が咲き、夏には緑が豊かになります。秋は紅葉が美しく、冬には雪景色",
      created_at: "2023.11.26",
      status: "たった今",
      ranking: 2,
    },
    {
      like: 6,
      dislike: 0,
      image: "/assets/thumbnail1.jpg",
      author: "ウエトマエ",
      title: "運営会社 株式会社ウエトマエ",
      description:
        "日本は四季がはっきりしていて、それぞれの季節に美しい自然が楽しめます。春には桜の花が咲き、夏には緑が豊かになります。秋は紅葉が美しく、冬には雪景色が見られることもあります。日本の文化は古くからの伝統と現代の技術が融合していて、訪れる人々に深い印象を与えます。日本料理も世界中で人気があり、寿司や天ぷらなどは多くの人に愛されています。\n" +
        "                            日本は四季がはっきりしていて、それぞれの季節に美しい自然が楽しめます。春には桜の花が咲き、夏には緑が豊かになります。秋は紅葉が美しく、冬には雪景色\n" +
        "                            日本は四季がはっきりしていて、それぞれの季節に美しい自然が楽しめます。春には桜の花が咲き、夏には緑が豊かになります。秋は紅葉が美しく、冬には雪景色",
      created_at: "2023.11.26",
      status: "たった今",
      ranking: 3,
    },
    {
      like: 6,
      dislike: 0,
      image: "/assets/Thumbnail-YouTube-la-gi-1-1-1-750x420.jpg",
      author: "ウエトマエ",
      title: "運営会社 株式会社ウエトマエ",
      description:
        "日本は四季がはっきりしていて、それぞれの季節に美しい自然が楽しめます。春には桜の花が咲き、夏には緑が豊かになります。秋は紅葉が美しく、冬には雪景色が見られることもあります。日本の文化は古くからの伝統と現代の技術が融合していて、訪れる人々に深い印象を与えます。日本料理も世界中で人気があり、寿司や天ぷらなどは多くの人に愛されています。\n" +
        "                            日本は四季がはっきりしていて、それぞれの季節に美しい自然が楽しめます。春には桜の花が咲き、夏には緑が豊かになります。秋は紅葉が美しく、冬には雪景色\n" +
        "                            日本は四季がはっきりしていて、それぞれの季節に美しい自然が楽しめます。春には桜の花が咲き、夏には緑が豊かになります。秋は紅葉が美しく、冬には雪景色",
      created_at: "2023.11.26",
      status: "たった今",
      ranking: 4,
    },
    {
      like: 6,
      dislike: 0,
      image: "/assets/Thumbnail-YouTube-la-gi-1-1-1-750x420.jpg",
      author: "ウエトマエ",
      title: "運営会社 株式会社ウエトマエ",
      description:
        "日本は四季がはっきりしていて、それぞれの季節に美しい自然が楽しめます。春には桜の花が咲き、夏には緑が豊かになります。秋は紅葉が美しく、冬には雪景色が見られることもあります。日本の文化は古くからの伝統と現代の技術が融合していて、訪れる人々に深い印象を与えます。日本料理も世界中で人気があり、寿司や天ぷらなどは多くの人に愛されています。\n" +
        "                            日本は四季がはっきりしていて、それぞれの季節に美しい自然が楽しめます。春には桜の花が咲き、夏には緑が豊かになります。秋は紅葉が美しく、冬には雪景色\n" +
        "                            日本は四季がはっきりしていて、それぞれの季節に美しい自然が楽しめます。春には桜の花が咲き、夏には緑が豊かになります。秋は紅葉が美しく、冬には雪景色",
      created_at: "2023.11.26",
      status: "たった今",
      ranking: 5,
    },
  ];

  const tabs = [
    "運営会社",
    "運営会社1",
    "運営会社2",
    "運営会社3",
    "運営会社4",
    "運営会社5",
  ];

  const [novel, setNovels] = useState(novels);
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
        <div className="border-black-500 mb-3 min-h-[188px] border-y-2 border-solid p-2">
          <p>...</p>
        </div>
      ) : (
        ""
      )}
      <RankingTab
        tabs={tabs}
        setNovel={setNovels}
        hideRankingList={hideRankingList}
      />

      {location.pathname === "/newnovel" ? (
        <div>
          <div className="border-t-2 py-4">
            <div className="flex items-center gap-4">...</div>
            <div className="mt-4 flex items-center gap-4">...</div>
          </div>
          <div className="border-t-2 py-4">
            <div className="flex items-center justify-center gap-4">...</div>
          </div>
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
        <RankingList novels={novel} />
      </CSSTransition>
    </div>
  );
}
