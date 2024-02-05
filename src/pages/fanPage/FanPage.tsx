import { useTranslation } from "react-i18next";
import { SideBarColiseum } from "components/SideBar/SideBarColiseum.tsx";
import { Advertisement } from "components/Advertisement";
import { NavLink } from "react-router-dom";

export function FanPage() {
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
          <div className="title text-2xl font-bold">
            カードが注目を集め カードが注
          </div>
          <ul className="my-3">
            <li>カードが注目を集め カードが注</li>
            <li>カードが注目を集め カードが注</li>
            <li>カードが注目を集め カードが注</li>
            <li>カードが注目を集め カードが注</li>
            <li>カードが注目を集め カードが注</li>
          </ul>
          <div className="border-2 p-4 ">
            <div className="text-center text-xl font-bold">注目を集め カ</div>
            <hr className="my-3" />
            <div className="my-3 mb-5 text-center">
              カードが注目を集め カードカードが注目を集め カード{" "}
              <span className="font-bold">
                が注カードが注目を集め カードが注
              </span>
            </div>
            <div className=" flex items-center justify-center ">
              <img
                src="https://png.pngtree.com/thumb_back/fh260/background/20201009/pngtree-black-friday-sale-horizontal-banner-with-red-background-with-place-for-image_405375.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <Advertisement>{arrAds}</Advertisement>
      </div>
    </>
  );
}
