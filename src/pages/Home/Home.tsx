import { useTranslation } from "react-i18next";
import { Advertisement } from "components/Advertisement/Advertisement.tsx";
import { CategoryList } from "components/Category";
import { SidebarHome } from "components/SideBar/SideBarHome.tsx";
import { RankingContainer } from "components/Ranking/RankingContainer.tsx";
import { useMutation, useQuery } from "@apollo/client";
import { EXPORT_CSV_MUTATION } from "@/graphql-client/round/mutations.ts";
import { setDefaultTitle } from "@/utils/helper.ts";
// import ButtonCommon from "@/components/button/ButtonCommon.tsx";
// import { NovelList } from "@/components/novel";
// import { Element } from "react-scroll";
import { Search } from "@/components/Search/Search";
import { GET_NOVELS_PAGINATE } from "@/graphql-client/novel/queries";
import { useEffect, useRef } from "react";
import "./index.scss";
import { LoadingSpiner } from "@/components/Loading/LoadingSpiner";
import { NovelCreatedNew } from "@/components/novel/NovelCreatedNew";
import { NovelUpdatedNew } from "@/components/novel/NovelUpdatedNew";
import { Link, animateScroll as scroll } from "react-scroll";

const Home = () => {
  setDefaultTitle("Trang chủ");
  const parentRef = useRef(null);
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

  const { loading, error, data, refetch } = useQuery(GET_NOVELS_PAGINATE, {
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
    console.log("Data changed:", data);
  }, [data]);
  if (loading) return <LoadingSpiner />;
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
      <SidebarHome />
      <div className="content flex-1">
        {/* <ButtonCommon type="button" onClick={handleExportCSV}>
          Export CSV
        </ButtonCommon> */}
        {/* Bungo Coliseum tournament  */}
        {/* <div className="border-black-500 min-h-[188px] border-2 border-solid p-2">
          <div className="text-center text-3xl font-bold">
            球ムヘマタ碁投ヘツ座性スイオ千夜チ港需チ緒動
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
        </div> */}
        {/* <Element
          name="coliseum_noti"
          className="border-black-500  min-h-[188px] border-2 border-solid p-2"
        >
          <div className="element text-center text-3xl font-bold">お知らせ</div>
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
        </Element> */}
        <Search />

        {/* Novel List  */}
        <div className="border-2 p-2" ref={parentRef}>
          {/* <h2 className="pb-2 text-center text-2xl font-bold">
            新しく出版された小説
          </h2> */}
          {/* <NovelList novels={data?.getNovelsPaginate} refetch={refetch }  /> */}
          <div>
            <h2 className="pb-2 text-xl font-semibold ">Tác phẩm mới đăng</h2>
            <NovelCreatedNew />
          </div>

          <div className="mt-4">
            <h2 className="pb-2  text-xl font-semibold ">
              Tác phẩm mới update
            </h2>
            <NovelUpdatedNew />
          </div>
        </div>

        <RankingContainer limit={5} />
        <Advertisement>{arrAds}</Advertisement>
        <CategoryList categories={categories}></CategoryList>
      </div>
    </>
  );
};
export default Home;
