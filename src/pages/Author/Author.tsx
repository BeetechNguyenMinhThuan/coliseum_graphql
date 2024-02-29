import { useTranslation } from "react-i18next";
import {
  Link,
  NavLink,
  useLocation,
  useMatch,
  useMatches,
  useParams,
} from "react-router-dom";
import { SideBarAuthor } from "components/SideBar/SideBarAuthor.tsx";
import { Advertisement } from "components/Advertisement";
import ButtonCommon from "@/components/button/ButtonCommon.tsx";
import { Novel, NovelList } from "../../components/novel";
import { useQuery } from "@apollo/client";
import {
  GET_DETAIL_USER,
  GET_NOVELS_BY_USER,
} from "@/graphql-client/user/queries";

export function Author() {
  const { t } = useTranslation();
  const arrAds = [
    "s-l1200.webp",
    "coke-print-ad.jpg",
    "7_Up_-_You_like_it,_it_likes_you,_1948.jpg",
  ];
  let { userId } = useParams();

  const {loading, error, data: dataNovelsByUser, refetch } = useQuery(GET_NOVELS_BY_USER, {
    variables: { userId: parseInt(userId), page: 1, limit: 3 },
  });

  console.log(dataNovelsByUser);

  if (loading) return "Đang load";
  if (error) return "Có lỗi";

  return (
    <>
      <SideBarAuthor />
      <div className="content flex-1">
        <div className="border-black-500 min-h-[188px]">
          <div className="px-7">
            <div className="flex justify-between pb-2 pt-5">
              <Link to="rule" className="text-2xl font-bold">
                {dataNovelsByUser?.user?.name}
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
            <NovelList
              novels={dataNovelsByUser?.getNovelsByAuthor}
              refetch={refetch}
            />
          </div>
        </div>

        <Advertisement>{arrAds}</Advertisement>
      </div>
    </>
  );
}
