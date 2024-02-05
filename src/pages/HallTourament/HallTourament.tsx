import { useTranslation } from "react-i18next";
import { SideBarColiseum } from "components/SideBar/SideBarColiseum.tsx";
import { Advertisement } from "components/Advertisement";
import { NavLink } from "react-router-dom";
import "./hallTorurament.scss";

export function HallTourament() {
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
        <div className="border-black-500 min-h-[188px] border-2 border-l-0 border-solid p-2 ">
          <div className="my-3 border-b-2">
            <div className="title text-center text-2xl font-bold ">
              ロ校数ナ舎会シ打彼優フヌヒ調26
            </div>
            <hr className="my-3" />
            <div className="px-20 leading-7">
              透ロ校数ナ舎会シ打彼優フヌヒ調26空製ケフエヨ毎逆由クじ語14拒ノカニ生人むびこ北読列トろけち。
              透ロ校数ナ舎会シ打彼優フヌヒ調26空製ケフエヨ毎逆由クじ語14拒ノカニ生人むびこ北読列トろけち。
              透ロ校数ナ舎会シ打彼優フヌヒ調26空製ケフエヨ毎逆由クじ語14拒ノカニ生人むびこ北読列トろけち。
              透ロ校数ナ舎会シ打彼優フヌヒ調26空製ケフエヨ毎逆由クじ語14拒ノカニ生人むびこ北読列トろけち。
              透ロ校数ナ舎会シ打彼優フヌヒ調26空製ケフエヨ毎逆由クじ語14拒ノカニ生人むびこ北読列トろけち。
            </div>
          </div>

          <div className="grid grid-cols-8 gap-4">
            <NavLink className="text-right font-bold text-black" to="1">
              1stトろけち。
            </NavLink>
            <NavLink className="text-right font-bold text-black" to="2">
              1stトろけち。
            </NavLink>
            <NavLink className="text-right font-bold text-black" to="3">
              1stトろけち。
            </NavLink>
            <NavLink className="text-right font-bold text-black" to="4">
              1stトろけち。
            </NavLink>
            <NavLink className="text-right font-bold text-black" to="5">
              1stトろけち。
            </NavLink>
            <NavLink className="text-right font-bold text-black" to="6">
              1stトろけち。
            </NavLink>
            <NavLink className="text-right font-bold text-black" to="7">
              1stトろけち。
            </NavLink>
            <NavLink className="text-right font-bold text-black" to="8">
              1stトろけち。
            </NavLink>
            <NavLink className="text-right font-bold text-black" to="9">
              1stトろけち。
            </NavLink>
            <NavLink className="text-right font-bold text-black" to="10">
              1stトろけち。
            </NavLink>
            <NavLink className="text-right font-bold text-black" to="11">
              1stトろけち。
            </NavLink>
            <NavLink className="text-right font-bold text-black" to="12">
              1stトろけち。
            </NavLink>
            <NavLink className="text-right font-bold text-black" to="13">
              1stトろけち。
            </NavLink>
            <NavLink className="text-right font-bold text-black" to="14">
              1stトろけち。
            </NavLink>
            <NavLink className="text-right font-bold text-black" to="15">
              1stトろけち。
            </NavLink>
            <NavLink className="text-right font-bold text-black" to="16">
              1stトろけち。
            </NavLink>
          </div>
          <hr className="my-3" />
          <div className="my-3">
            <div className="pagination text-center ">[1]</div>
            <div className="border-2 p-3 mb-10">
              <div className="border-b-2 text-center text-3xl font-bold pb-2">
                1ラウンド目
              </div>
              <div className="my-5 flex items-center justify-around">
                <div className="flex flex-col items-center justify-center">
                  <div className="cls-user flex items-center justify-center border-2">
                    USER
                  </div>
                  <div className="text-bold mb-3 mt-2 text-2xl">
                    カードが注目を集める
                  </div>
                  <button className="cls-button-vote rounded border-2 p-2 text-2xl">
                    カードが注目を集め
                  </button>
                </div>
                <div className="text-5xl font-bold">VS</div>
                <div className="flex flex-col items-center justify-center">
                  <div className="cls-user flex items-center justify-center border-2">
                    USER
                  </div>
                  <div className="text-bold mb-3 mt-2 text-2xl">
                    カードが注目を集める
                  </div>
                  <button className="cls-button-vote rounded border-2 p-2 text-2xl">
                    カードが注目を集め
                  </button>
                </div>
              </div>
            </div>

            <div className="border-2 p-3 mb-10">
              <div className="border-b-2 text-center text-3xl font-bold pb-2">
                1ラウンド目
              </div>
              <div className="my-5 flex items-center justify-around">
                <div className="flex flex-col items-center justify-center">
                  <div className="cls-user flex items-center justify-center border-2">
                    USER
                  </div>
                  <div className="text-bold mb-3 mt-2 text-2xl">
                    カードが注目を集める
                  </div>
                  <button className="cls-button-vote rounded border-2 p-2 text-2xl">
                    カードが注目を集め
                  </button>
                </div>
                <div className="text-5xl font-bold">VS</div>
                <div className="flex flex-col items-center justify-center">
                  <div className="cls-user flex items-center justify-center border-2">
                    USER
                  </div>
                  <div className="text-bold mb-3 mt-2 text-2xl">
                    カードが注目を集める
                  </div>
                  <button className="cls-button-vote rounded border-2 p-2 text-2xl">
                    カードが注目を集め
                  </button>
                </div>
              </div>
            </div>

            <div className="border-2 p-3 mb-10">
              <div className="border-b-2 text-center text-3xl font-bold pb-2">
                1ラウンド目
              </div>
              <div className="my-5 flex items-center justify-around">
                <div className="flex flex-col items-center justify-center">
                  <div className="cls-user flex items-center justify-center border-2">
                    USER
                  </div>
                  <div className="text-bold mb-3 mt-2 text-2xl">
                    カードが注目を集める
                  </div>
                  <button className="cls-button-vote rounded border-2 p-2 text-2xl">
                    カードが注目を集め
                  </button>
                </div>
                <div className="text-5xl font-bold">VS</div>
                <div className="flex flex-col items-center justify-center">
                  <div className="cls-user flex items-center justify-center border-2">
                    USER
                  </div>
                  <div className="text-bold mb-3 mt-2 text-2xl">
                    カードが注目を集める
                  </div>
                  <button className="cls-button-vote rounded border-2 p-2 text-2xl">
                    カードが注目を集め
                  </button>
                </div>
              </div>
            </div>

            <div className="border-2 p-3 mb-10">
              <div className="border-b-2 text-center text-3xl font-bold pb-2">
                1ラウンド目
              </div>
              <div className="my-5 flex items-center justify-around">
                <div className="flex flex-col items-center justify-center">
                  <div className="cls-user flex items-center justify-center border-2">
                    USER
                  </div>
                  <div className="text-bold mb-3 mt-2 text-2xl">
                    カードが注目を集める
                  </div>
                  <button className="cls-button-vote rounded border-2 p-2 text-2xl">
                    カードが注目を集め
                  </button>
                </div>
                <div className="text-5xl font-bold">VS</div>
                <div className="flex flex-col items-center justify-center">
                  <div className="cls-user flex items-center justify-center border-2">
                    USER
                  </div>
                  <div className="text-bold mb-3 mt-2 text-2xl">
                    カードが注目を集める
                  </div>
                  <button className="cls-button-vote rounded border-2 p-2 text-2xl">
                    カードが注目を集め
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Advertisement>{arrAds}</Advertisement>
      </div>
    </>
  );
}
