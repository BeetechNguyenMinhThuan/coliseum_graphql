import { useTranslation } from "react-i18next";
import { SideBarColiseum } from "components/SideBar/SideBarColiseum.tsx";
import { NavLink } from "react-router-dom";
import { Advertisement } from "components/Advertisement";
import { setDefaultTitle } from "@/utils/helper";
import Hero from "@/components/common/Hero";
import { Banner } from "@/components/Banner";

export function Coliseum() {
  setDefaultTitle("Coliseum");
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
          <SideBarColiseum />
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
            <div className="mb-10">
              <ul className="flex items-center justify-between">
                <li className="rounded-md border-2 px-4 py-1 font-bold hover:bg-color2">
                  <NavLink to="redireact">身べさゆむさゆむ</NavLink>
                </li>
                <li className="rounded-md border-2 px-4 py-1 font-bold hover:bg-color2">
                  <NavLink to="redireact">身べさゆむさゆむ</NavLink>
                </li>
                <li className="rounded-md border-2 px-4 py-1 font-bold hover:bg-color2">
                  <NavLink to="redireact">身べさゆむさゆむ</NavLink>
                </li>
                <li className="rounded-md border-2 px-4 py-1 font-bold hover:bg-color2">
                  <NavLink to="redireact">身べさゆむさゆむ</NavLink>
                </li>
                <li className="rounded-md border-2 px-4 py-1 font-bold hover:bg-color2">
                  <NavLink to="redireact">身べさゆむさゆむ</NavLink>
                </li>
                <li className="rounded-md border-2 px-4 py-1 font-bold hover:bg-color2">
                  <NavLink to="redireact">身べさゆむさゆむ</NavLink>
                </li>
              </ul>
            </div>
            <div className="mb-10 flex flex-col gap-y-10">
              <div className="h-[330px] border-2 bg-[url('/assets/coli1.jpg')] bg-cover bg-center bg-no-repeat py-5 text-center">
                <div className="flex h-full flex-col items-center justify-center">
                  <h3 className="text-6xl font-bold">身べさゆむさゆむ</h3>
                  <h4 className="text-2xl underline">2024 身べさゆむさゆむ</h4>
                </div>
              </div>
              <div className="h-[330px] border-2 bg-[url('/assets/coli1.jpg')] bg-cover bg-center bg-no-repeat py-5 text-center">
                <div className="flex h-full flex-col items-center justify-center">
                  <h3 className="text-6xl font-bold">身べさゆむさゆむ</h3>
                  <h4 className="text-2xl underline">2024 身べさゆむさゆむ</h4>
                </div>
              </div>
              <div className="relative h-[330px] border-2 bg-[url('/assets/coli1.jpg')] bg-cover bg-center bg-no-repeat py-5 text-center">
                <div className="flex h-full flex-col items-center justify-center">
                  <h3 className="text-6xl font-bold">身べさゆむさゆむ</h3>
                  <h4 className="text-2xl underline">2024 身べさゆむさゆむ</h4>
                </div>
                <div className="absolute left-[50%] top-[56%] -translate-x-1/2">
                  <img
                    className="w-[230px]"
                    src="/assets/images/logo/BungoColiseum_logo_black_emblem.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <Advertisement>{arrAds}</Advertisement>
          </div>
        </div>
      </div>
    </>
  );
}
