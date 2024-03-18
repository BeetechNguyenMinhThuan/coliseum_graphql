import { useTranslation } from "react-i18next";
import { SideBarTournament } from "../../components/SideBar/SideBarTournament.tsx";
import { Advertisement } from "components/Advertisement";
import Hero from "@/components/common/Hero.tsx";
import { Banner } from "@/components/Banner/Banner.tsx";

export function Tournament() {
  const { t } = useTranslation();
  const arrAds = [
    "s-l1200.webp",
    "coke-print-ad.jpg",
    "7_Up_-_You_like_it,_it_likes_you,_1948.jpg",
  ];

  return (
    <>
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
      <div className="container mx-auto">
        <Banner />
      </div>
      <div className="container mx-auto bg-white p-8">
        <div className="flex gap-x-3">
          <SideBarTournament />
          <div className="flex-1">
            <div className="mb-10 border-2 p-8">
              <h2 className="text-3xl font-bold ">
                球ムヘマタ碁投ヘツ座性スイオ千夜チ港需チ緒動
              </h2>
              <div className="border-b-2 py-4">
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
              <div className="py-3">
                よトぎ必身べさゆむ害受フラヤヌ書彼づぴか円破進るわび竹略キノモ居大でぶ答刊じぽよれ表美包孤湖すまゃよ
                透ロ校数ナ舎会シ打彼優フヌヒ調26空製ケフエヨ毎逆由クじ語14拒ノカニ生人むびこ北読列トろけち。
                握ふトり出時ごラじ入68情ユ勝古げ海成ぞ近討イリえま波見ねはせ止賞ヤウ根1井供り央編アハユマ請家96石アヨソ象樹めぎーリ。
                よトぎ必身べさゆむ害受フラヤヌ書彼づぴか円破進るわび竹略キノモ居大でぶ答刊じぽよれ表美包孤湖すまゃよ
                透ロ校数ナ舎会シ打彼優フヌヒ調26空製ケフエヨ毎逆由クじ語14拒ノカニ生人むびこ北読列トろけち。
                握ふトり出時ごラじ入68情ユ勝古げ海成ぞ近討イリえま波見ねはせ止賞ヤウ根1井供り央編アハユマ請家96石アヨソ象樹めぎーリ。成ぞ近討イリえま波見ねはせ止賞ヤウ根1井供り央編アハユマ請家96石アヨソ象樹めぎーリ。
              </div>
            </div>

            <div
              className="relative mt-5 h-[570px] border-2 bg-[url('/assets/coli3.jpg')] bg-no-repeat "
              style={{ backgroundSize: "100% 100%" }}
            >
              <div className="mx-auto mt-5 h-[75px] w-[213px] rounded-2xl border-[3px] border-black bg-white">
                <h3 className=" flex h-full items-center justify-center text-5xl font-bold">
                  番1ホル
                </h3>
              </div>
              <div className="player-1 absolute left-[13%] top-[25%] inline-block h-[277px] w-[245px] rounded-lg bg-white p-3">
                <div className="avatar h-[175px] ">
                  <img
                    src="/assets/coli4.jpg"
                    className="h-full rounded-lg object-cover"
                    alt=""
                  />
                </div>
                <h3 className="mt-2 text-center text-2xl font-bold">
                  見つけましましましました
                </h3>
              </div>
              <div className="player-1 absolute right-[13%] top-[25%] inline-block h-[277px] w-[245px] rounded-lg bg-white p-3">
                <div className="avatar h-[175px] ">
                  <img
                    src="/assets/coli5.jpg"
                    className="h-full rounded-lg object-cover"
                    alt=""
                  />
                </div>
                <h3 className="mt-2 text-center text-2xl font-bold">
                  見つけましましましました
                </h3>
              </div>
            </div>
            <div
              className="relative mt-5 h-[570px] border-2 bg-[url('/assets/coli3.jpg')] bg-no-repeat "
              style={{ backgroundSize: "100% 100%" }}
            >
              <div className="mx-auto mt-5 h-[75px] w-[213px] rounded-2xl border-[3px] border-black bg-white">
                <h3 className=" flex h-full items-center justify-center text-5xl font-bold">
                  番1ホル
                </h3>
              </div>
              <div className="player-1 absolute left-[13%] top-[25%] inline-block h-[277px] w-[245px] rounded-lg bg-white p-3">
                <div className="avatar h-[175px] ">
                  <img
                    src="/assets/coli4.jpg"
                    className="h-full rounded-lg object-cover"
                    alt=""
                  />
                </div>
                <h3 className="mt-2 text-center text-2xl font-bold">
                  見つけましましましました
                </h3>
              </div>
              <div className="player-1 absolute right-[13%] top-[25%] inline-block h-[277px] w-[245px] rounded-lg bg-white p-3">
                <div className="avatar h-[175px] ">
                  <img
                    src="/assets/coli5.jpg"
                    className="h-full rounded-lg object-cover"
                    alt=""
                  />
                </div>
                <h3 className="mt-2 text-center text-2xl font-bold">
                  見つけましましましました
                </h3>
              </div>
            </div>
            <Advertisement>{arrAds}</Advertisement>
          </div>
        </div>
      </div>
    </>
  );
}
