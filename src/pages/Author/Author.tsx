import { useTranslation } from "react-i18next";
import {
  Link,
  NavLink,
  useLocation,
  useMatch,
  useMatches,
} from "react-router-dom";
import { SideBarAuthor } from "components/SideBar/SideBarAuthor.tsx";
import { Advertisement } from "components/Advertisement";
import ButtonCommon from "@/components/button/ButtonCommon.tsx";
import { Novel, NovelList } from "../../components/novel";

export function Author() {
  const { t } = useTranslation();
  const arrAds = [
    "s-l1200.webp",
    "coke-print-ad.jpg",
    "7_Up_-_You_like_it,_it_likes_you,_1948.jpg",
  ];
  const novels = [
    {
      like: 6,
      dislike: 0,
      image: "/assets/Thumbnail-YouTube-la-gi-1-1-1-750x420.jpg",
      author: "ウエトマエ",
      title:
        "運営会社 株式会社ウエトマエ運営会社 株式会社ウエトマエ運営会社 株式会社ウエトマエ",
      description:
        "日本は四季がはっきりしていて、それぞれの季節に美しい自然が楽しめます。春には桜の花が咲き、夏には緑が豊かになります。秋は紅葉が美しく、冬には雪景色が見られることもあります。日本の文化は古くからの伝統と現代の技術が融合していて、訪れる人々に深い印象を与えます。日本料理も世界中で人気があり、寿司や天ぷらなどは多くの人に愛されています。\n" +
        "                            日本は四季がはっきりしていて、それぞれの季節に美しい自然が楽しめます。春には桜の花が咲き、夏には緑が豊かになります。秋は紅葉が美しく、冬には雪景色\n" +
        "                            日本は四季がはっきりしていて、それぞれの季節に美しい自然が楽しめます。春には桜の花が咲き、夏には緑が豊かになります。秋は紅葉が美しく、冬には雪景色",
      created_at: "2023.11.30",
      status: "たっ",
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
      status: "たっ",
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
      status: "たっ",
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
      status: "たっ",
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
      status: "たっ",
    },
  ];
  let location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <SideBarAuthor />
      <div className="content flex-1">
        <div className="border-black-500 min-h-[188px]">
          <div className="px-7">
            <div className="flex justify-between pb-2 pt-5">
              <Link to="rule" className="text-2xl font-bold">
                球ムヘマタ碁投ヘツID碁投
              </Link>
              <div>
                <ButtonCommon type="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                  <span className="font-extrabold">
                    球ムヘマ球ム球ムヘマ球ム
                  </span>
                </ButtonCommon>
                <div className="mt-1 flex items-center justify-end gap-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                  <span className="font-bold">12,345</span>
                </div>
              </div>
            </div>
            <div className="border-y-2  py-5">
              <p>
                定倫テチヤ権占じぴ選株れねド疑後各す
                <br />
                よトぎ必身べさゆむ害受フラヤヌ書彼づぴか円破進るわび竹略キノモ居大でぶ答刊じぽよれ表美包孤湖すまゃよ
                <br />
                透ロ校数ナ舎会シ打彼優フヌヒ調26空製ケフエヨ毎逆由クじ語14拒ノカニ生人むびこ北読列トろけち。
                <br />
                握ふトり出時ごラじ入68情ユ勝古げ海成ぞ近討イリえま波見ねはせ止賞ヤウ根1井供り央編アハユマ請家96石アヨソ象樹めぎーリ。
              </p>
            </div>
          </div>
          <div className="mt-5">
            {novels.map((novel) => (
              <Novel isFavorite novel={novel} />
            ))}
          </div>
        </div>

        <Advertisement>{arrAds}</Advertisement>
      </div>
    </>
  );
}
