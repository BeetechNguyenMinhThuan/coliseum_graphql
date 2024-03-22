import { useTranslation } from "react-i18next";
import { Advertisement } from "components/Advertisement/Advertisement.tsx";
import { CategoryList } from "components/Category";
import { SidebarHome } from "components/SideBar/SideBarHome.tsx";
import { RankingContainer } from "components/Ranking/RankingContainer.tsx";
import { useQuery } from "@apollo/client";
import { setDefaultTitle } from "@/utils/helper.ts";
import { Search } from "@/components/Search/Search";
import { GET_NOVELS_PAGINATE } from "@/graphql-client/novel/queries";
import { useContext, useEffect, useRef } from "react";
import "./index.scss";
import { LoadingSpiner } from "@/components/Loading/LoadingSpiner";
import { NovelCreatedNew } from "@/components/novel/NovelCreatedNew";
import { NovelUpdatedNew } from "@/components/novel/NovelUpdatedNew";
import Hero from "@/components/common/Hero";
import { Banner } from "@/components/Banner";
import { ThemeContext } from "@/contexts/ThemeContext";
const Home = () => {
  setDefaultTitle("Trang chủ");
  const parentRef = useRef(null);
  const heroRef = useRef(null);

  const { setHeightHero } = useContext(ThemeContext);

  const { t } = useTranslation();
  // const [exportCSVMutation] = useMutation(EXPORT_CSV_MUTATION);
  // const handleExportCSV = async () => {
  //   try {
  //     const { data } = await exportCSVMutation({
  //       variables: { modelName: "User" },
  //     });
  //     if (data && data?.exportCSV) {
  //       const csvDataString = data.exportCSV.csvString;
  //       const fileName = data.exportCSV.fileName;
  //       downloadFileFromContentBinary(csvDataString, fileName);
  //     }
  //   } catch (error: any) {
  //     alert(`Export failed: ${error.message}`);
  //   }
  // };

  const { loading, error, data } = useQuery(GET_NOVELS_PAGINATE, {
    variables: {
      page: 1,
      limit: 5,
      filter: {
        searchValue: null,
      },
      type: "",
    },
  });
  useEffect(() => {
    setHeightHero(heroRef?.current?.getBoundingClientRect().height);
  }, []);

  if (error) return "Có lỗi xảy ra";

  const arrAds = [
    "s-l1200.webp",
    "coke-print-ad.jpg",
    "7_Up_-_You_like_it,_it_likes_you,_1948.jpg",
  ];

  const categories = [
    {
      image: "assets/advertisement/s-l1200.webp",
      title: "運営会社 株式会社ウエトマエ",
      description:
        "日本は四季がはっきりしていて、それぞれの季節に美しい自然が楽しめます。春には桜の花が咲き、夏には緑が豊かになります。秋は紅葉が美しく、冬には雪景色が見られることもあります。日本の文化は古くからの伝統と現代の技術が融合していて、訪れる人々に深い印象を与えます。日本料理も世界中で人気があり、寿司や天ぷらなどは多くの人に愛されています。\n" +
        "                            日本は四季がはっきりしていて、それぞれの季節に美しい自然が楽しめます。春には桜の花が咲き、夏には緑が豊かになります。秋は紅葉が美しく、冬には雪景色\n" +
        "                            日本は四季がはっきりしていて、それぞれの季節に美しい自然が楽しめます。春には桜の花が咲き、夏には緑が豊かになります。秋は紅葉が美しく、冬には雪景色",
    },
    {
      image: "assets/advertisement/s-l1200.webp",
      title: "運営会社 株式会社ウエトマエ",
      description:
        "日本は四季がはっきりしていて、それぞれの季節に美しい自然が楽しめます。春には桜の花が咲き、夏には緑が豊かになります。秋は紅葉が美しく、冬には雪景色が見られることもあります。日本の文化は古くからの伝統と現代の技術が融合していて、訪れる人々に深い印象を与えます。日本料理も世界中で人気があり、寿司や天ぷらなどは多くの人に愛されています。\n" +
        "                            日本は四季がはっきりしていて、それぞれの季節に美しい自然が楽しめます。春には桜の花が咲き、夏には緑が豊かになります。秋は紅葉が美しく、冬には雪景色\n" +
        "                            日本は四季がはっきりしていて、それぞれの季節に美しい自然が楽しめます。春には桜の花が咲き、夏には緑が豊かになります。秋は紅葉が美しく、冬には雪景色",
    },
    {
      image: "assets/advertisement/s-l1200.webp",
      title: "運営会社 株式会社ウエトマエ",
      description:
        "日本は四季がはっきりしていて、それぞれの季節に美しい自然が楽しめます。春には桜の花が咲き、夏には緑が豊かになります。秋は紅葉が美しく、冬には雪景色が見られることもあります。日本の文化は古くからの伝統と現代の技術が融合していて、訪れる人々に深い印象を与えます。日本料理も世界中で人気があり、寿司や天ぷらなどは多くの人に愛されています。\n" +
        "                            日本は四季がはっきりしていて、それぞれの季節に美しい自然が楽しめます。春には桜の花が咲き、夏には緑が豊かになります。秋は紅葉が美しく、冬には雪景色\n" +
        "                            日本は四季がはっきりしていて、それぞれの季節に美しい自然が楽しめます。春には桜の花が咲き、夏には緑が豊かになります。秋は紅葉が美しく、冬には雪景色",
    },
    {
      image: "assets/advertisement/s-l1200.webp",
      title: "運営会社 株式会社ウエトマエ",
      description:
        "日本は四季がはっきりしていて、それぞれの季節に美しい自然が楽しめます。春には桜の花が咲き、夏には緑が豊かになります。秋は紅葉が美しく、冬には雪景色が見られることもあります。日本の文化は古くからの伝統と現代の技術が融合していて、訪れる人々に深い印象を与えます。日本料理も世界中で人気があり、寿司や天ぷらなどは多くの人に愛されています。\n" +
        "                            日本は四季がはっきりしていて、それぞれの季節に美しい自然が楽しめます。春には桜の花が咲き、夏には緑が豊かになります。秋は紅葉が美しく、冬には雪景色\n" +
        "                            日本は四季がはっきりしていて、それぞれの季節に美しい自然が楽しめます。春には桜の花が咲き、夏には緑が豊かになります。秋は紅葉が美しく、冬には雪景色",
    },
    {
      image: "assets/advertisement/s-l1200.webp",
      title: "運営会社 株式会社ウエトマエ",
      description:
        "日本は四季がはっきりしていて、それぞれの季節に美しい自然が楽しめます。春には桜の花が咲き、夏には緑が豊かになります。秋は紅葉が美しく、冬には雪景色が見られることもあります。日本の文化は古くからの伝統と現代の技術が融合していて、訪れる人々に深い印象を与えます。日本料理も世界中で人気があり、寿司や天ぷらなどは多くの人に愛されています。\n" +
        "                            日本は四季がはっきりしていて、それぞれの季節に美しい自然が楽しめます。春には桜の花が咲き、夏には緑が豊かになります。秋は紅葉が美しく、冬には雪景色\n" +
        "                            日本は四季がはっきりしていて、それぞれの季節に美しい自然が楽しめます。春には桜の花が咲き、夏には緑が豊かになります。秋は紅葉が美しく、冬には雪景色",
    },
  ];
  return (
    <>
      <div ref={heroRef}>
        <Hero>
          <img src="/assets/logoColiseum.png" alt="" />
          <div className="px-8">
            <h1 className="title mb-6 text-center text-3xl font-extrabold">
              作家の遊び場
            </h1>
            <p className="mb-4 font-medium">
              誰もが自分の作品でトーナメントで優勝し、偉大な作家になることを目指します
              彼らは武器として書き、トーナメントで試合に勝つことでチャンピオンシップを目指しました。
              デュエル（2024 年春頃にリリース予定の機能）とランキングの向
              アプリケーションサイト。
            </p>
            <p className="font-medium">
              作者が楽しめる」をコンセプトに、作品のクオリティと期待感だけを武器に作品を審査する。
              読者に「この 2
              つの作品のうちどちらが好きですか?」を選択させることで価格を設定します。
              ' 私たちはまだいるのに
              私たちは方法を見つけましたが、評価対象となった作品に焦点を当てないフォーマットを探していました。
              最高の評価。
            </p>
          </div>
        </Hero>
      </div>

      <div className="container mx-auto mt-16 bg-white p-8">
        <Banner />
        <div className="flex gap-x-3">
          <SidebarHome />
          {loading ? (
            <LoadingSpiner />
          ) : (
            <div className="content flex-1">
              <div
                name="coliseum_noti"
                className="border-black-500  min-h-[188px] rounded-[30px] border-2 border-solid p-2"
              >
                <div className="element text-center text-3xl font-bold">
                  お知らせ
                </div>
                <div className="px-2 py-5 sm:ml-[10px] md:ml-[30px]">
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
              <Search />
              {/* Novel List  */}
              <div className="" ref={parentRef}>
                <NovelCreatedNew />

                <NovelUpdatedNew />
              </div>

              <RankingContainer limit={5} />
              <Advertisement>{arrAds}</Advertisement>
              <CategoryList categories={categories}></CategoryList>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Home;
