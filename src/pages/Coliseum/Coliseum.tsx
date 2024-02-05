import { useTranslation } from "react-i18next";
import { SideBarColiseum } from "components/SideBar/SideBarColiseum.tsx";
import { NavLink } from "react-router-dom";
import { Advertisement } from "components/Advertisement";

export function Coliseum() {
  const { t } = useTranslation();

  const arrAds = [
    "s-l1200.webp",
    "coke-print-ad.jpg",
    "7_Up_-_You_like_it,_it_likes_you,_1948.jpg",
  ];
  return (
    <>
      <SideBarColiseum />
      <div className="content flex-1">
        <div className="border-black-500 bor min-h-[188px] border-2 border-solid p-2">
          <div className="text-center text-3xl ">
            球ムヘマタ碁投ヘツ座性スイオ千夜チ港需チ緒動
          </div>
          <div className="border-b-2 px-2 py-5 sm:ml-[10px] md:ml-[30px]">
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
          <div className="">
            <ul className="flex items-center justify-between">
              <li className="border-2 px-4">
                <NavLink to="redireact">身べさゆむさゆむ</NavLink>
              </li>
              <li className="border-2 px-4">
                <NavLink to="redireact">身べさゆむさゆむ</NavLink>
              </li>
              <li className="border-2 px-4">
                <NavLink to="redireact">身べさゆむさゆむ</NavLink>
              </li>
              <li className="border-2 px-4">
                <NavLink to="redireact">身べさゆむさゆむ</NavLink>
              </li>
              <li className="border-2 px-4">
                <NavLink to="redireact">身べさゆむさゆむ</NavLink>
              </li>
              <li className="border-2 px-4">
                <NavLink to="redireact">身べさゆむさゆむ</NavLink>
              </li>
            </ul>
          </div>
          <div className="mt-5 border-2 py-5 text-center">
            <h3 className="mb-10 text-3xl font-bold">身べさゆむさゆむ</h3>
            <h4 className="text-2xl">2024 身べさゆむさゆむ</h4>
          </div>
          <div className="mt-5 border-2 py-5 text-center">
            <h3 className="mb-10 text-3xl font-bold">身べさゆむさゆむ</h3>
            <h4 className="text-2xl">2024 身べさゆむさゆむ</h4>
          </div>
          <div className="mt-5 border-2 py-5 text-center">
            <h3 className="mb-10 text-3xl font-bold">身べさゆむさゆむ</h3>
            <h4 className="text-2xl">2024 身べさゆむさゆむ</h4>
          </div>
        </div>
        <Advertisement>{arrAds}</Advertisement>
      </div>
    </>
  );
}
