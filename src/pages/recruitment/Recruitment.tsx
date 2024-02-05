import { useTranslation } from "react-i18next";
import { SideBarColiseum } from "components/SideBar/SideBarColiseum.tsx";
import { Advertisement } from "components/Advertisement";
export function Recruitment() {
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
        <div className="border-black-500 min-h-[188px] border-2 border-l-0 border-solid p-4 ">
          <div className="border-b-2 pb-4 text-center text-2xl font-bold">
            透ロ校数ナ舎
          </div>
          <div className="border-b-2 border-dashed border-black py-4 text-center text-xl font-bold">
            透ロ校数ナ舎透ロ校数ナ舎透ロ校数ナ舎透ロ校数ナ舎透ロ校数ナ舎
          </div>
          <div className="my-3 border-b-2 border-dashed border-black">
            <h4 className="text-xl font-bold ">透ロ校数ナ :</h4>
            <span className="my-4 block">
              透ロ校数ナ舎透ロ校数ナ舎透ロ校数ナ舎透ロ校数
            </span>
            <span className="my-4 block">
              透ロ校数ナ舎透ロ校数ナ舎透ロ校数ナ舎透ロ校数ナ
            </span>
            <span className="my-4 block">
              透ロ校数ナ舎透ロ校数ナ舎透ロ校数ナ舎透ロ校数
            </span>
            <span className="my-4 block">
              透ロ校数ナ舎透ロ校数ナ舎透ロ校数ナ舎透ロ
            </span>
            <span className="my-4 block">
              透ロ校数ナ舎透ロ校数ナ舎透ロ校数ナ舎透
            </span>
            <span className="my-4 block">
              透ロ校数ナ舎透ロ校数ナ舎透ロ校数ナ舎
            </span>
          </div>

          <div className="my-3">
            <h4 className="text-xl font-bold ">透ロ校数ナ透ロ(校数ナ) :</h4>
            <ul>
              <li className="my-4">• 透ロ校数ナ透ロ15透ロ校数ナ透ロ</li>
              <li className="my-4">• 透ロ校数ナ透ロ15透ロ校数ナ透ロ</li>
              <li className="my-4">• 透ロ校数ナ透ロ15透ロ校数ナ透ロ</li>
              <li className="my-4">• 透ロ校数ナ透ロ15透ロ校数ナ透ロ</li>
              <li className="my-4">• 透ロ校数ナ透ロ15透ロ校数ナ透ロ</li>
            </ul>
          </div>
          <div className="my-3">
            <h4 className="text-xl font-bold ">透ロ校数ナ透ロ(校数ナ) :</h4>
            <span className="my-4 block">
              透ロ校数ナ透ロ15透ロ校数ナ透透ロ校数ナ透ロ15透ロ校数ナ透ロロ
            </span>
            <span className="my-4 block">透ロ校数ナ透ロ15透ロ校数ナ透ロ</span>
          </div>

          <div className="my-3">
            <h4 className="text-xl font-bold ">透ロ校数ナ透ロ(校数ナ) :</h4>
            <span className="block">
              透ロ校数ナ透ロ15透ロ校数ナ透透ロ校数ナ透ロ15透ロ校数ナ透ロロ
            </span>
            <span className=" block">透ロ校数ナ透ロ15透ロ校数ナ透ロ</span>
            <span className=" mt-4 block">(透ロ校数ナ透ロ15透ロ校数ナ透ロ)</span>
            <ul>
              <li className="my-4">• 透ロ校数ナ透ロ15透ロ校数ナ透ロ</li>
              <li className="my-4">• 透ロ校数ナ透ロ15透ロ校数ナ透ロ</li>
              <li className="my-4">• 透ロ校数ナ透ロ15透ロ校数ナ透ロ</li>
              <li className="my-4">• 透ロ校数ナ透ロ15透ロ校数ナ透ロ</li>
              <li className="my-4">• 透ロ校数ナ透ロ15透ロ校数ナ透ロ</li>
            </ul>

          </div>
        </div>

        <Advertisement>{arrAds}</Advertisement>
      </div>
    </>
  );
}
