import NovelListUpload from "components/NovelUpload/NovelListUpload";
import { SideBarMyPage } from "components/SideBar/SideBarMyPage";
import { NavLink } from "react-router-dom";
import { MdStarRate } from "react-icons/md";
import { Title } from "@/components/common";
import Accordition from "components/Accordition/Accordition.tsx";
import { Advertisement } from "@/components/Advertisement";
import ButtonCommon from "@/components/button/ButtonCommon.tsx";
import useAuth from "@/hooks/useAuth";
import { setDefaultTitle } from "@/utils/helper";
import { IoTriangle } from "react-icons/io5";

export default function MyPage() {
  setDefaultTitle("Trang cá nhân");
  const { user } = useAuth();

  const arrAds = [
    "s-l1200.webp",
    "coke-print-ad.jpg",
    "7_Up_-_You_like_it,_it_likes_you,_1948.jpg",
  ];

  return (
    <>
      <SideBarMyPage user={user} />
      <div className="content flex-1">
        {/* user profile */}
        <div className="relative mb-10 border-2 px-4">
          <div className="absolute right-0 rounded-tl-xl rounded-tr-xl bg-color2 px-2 py-3 font-bold">
            ゅゆ選歳ーだ
          </div>
          <div className="grid grid-cols-[1fr_3fr_2fr]  border-b-2 py-4">
            <div className="">
              <p className="text font-bold ">選歳ーID</p>
              <p>15選歳</p>
            </div>
            <p>選歳ーだ平申ゅゆ選歳ーだ平申ゅゆ</p>
          </div>
          <div className="grid grid-cols-[1fr_3fr_2fr]  border-b-2 py-4">
            <div className="">
              <p className="text font-bold ">ゆ選歳ゆ選歳</p>
              <p>15選歳</p>
            </div>
            <p>
              選歳ーだ平申ゅゆ選歳ーだ平申ゅゆ選歳ーだ平申ゅゆ選歳ーだ平申ゅゆ選歳ーだ平申ゅゆ選歳ーだ平申ゅゆ選歳ーだ平申ゅゆ選歳ーだ平申ゅゆ選歳ーだ平申ゅゆ選歳ーだ平申ゅゆ選歳ーだ平申ゅゆ選歳ーだ平申ゅゆ選歳ーだ平申ゅゆ選歳ーだ平申ゅゆ
            </p>
          </div>
          <div className="grid grid-cols-[1fr_3fr_2fr] py-4">
            <div className="">
              <p className="text font-bold ">選歳選歳選歳</p>
            </div>
            <p>xxxxxx@xxx.com</p>
          </div>
        </div>

        <div className="mb-10 border-2 bg-color3 p-4">
          <h3 className="border-b-2 border-dashed border-gray-500 text-2xl font-bold">
            室芸
          </h3>
          <div className="mt-2">
            <button className="w-full rounded-md border-2 bg-color2 py-1 text-center text-2xl font-bold">
              室芸室芸室芸
            </button>
          </div>
        </div>

        <div>
          <Accordition />
        </div>

        <Advertisement>{arrAds}</Advertisement>
        <div className="border-2 bg-color3 p-4">
          <h3 className="border-b-2 border-dashed border-gray-500 text-2xl font-bold">
            室芸室芸室芸室芸
          </h3>
          <div className="mt-2">
            <ul role="list" className="">
              <li className="border-b-2 border-dashed py-2">
                <div className="">
                  <div className="flex items-center gap-x-2">
                    <span>2023-11-30</span>
                    <span className="cursor-pointer rounded-md border-2 bg-color5 px-5">
                      平申ゅゆ
                    </span>
                  </div>
                  <h3 className="py-3 font-bold tracking-wider">
                    増部1公部健滅健滅!
                  </h3>
                  <p>
                    れの季節に美しい自然が楽しめます。春には桜の花が咲き、夏には緑が豊かになります。秋は紅葉が美しく、冬には雪景色が見られることもあります。日本の文化は古くからの伝統と現代の技術が融合していて、訪れる人々に深い印象を与えます。日本料理も世界中で人気があり、寿司や天ぷらなどは多くの人に愛されています。\n"
                    + "
                    日本は四季がはっきりしていて、それぞれの季節に美しい自然が楽しめます。春には桜の花が咲き、夏には緑が豊かになります。秋は紅葉が美しく、冬には雪景色\n"
                    + " 日本は四季が
                  </p>
                </div>
              </li>
              <li className="py-2">
                <div className="">
                  <div className="flex items-center gap-x-2">
                    <span>2023-11-30</span>
                    <span className="cursor-pointer rounded-md border-2 bg-color11 px-5">
                      平申ゅゆ
                    </span>
                  </div>
                  <h3 className="py-3 font-bold tracking-wider">
                    増部1公部健滅健滅!
                  </h3>
                  <p>
                    れの季節に美しい自然が楽しめます。春には桜の花が咲き、夏には緑が豊かになります。秋は紅葉が美しく、冬には雪景色が見られることもあります。日本の文化は古くからの伝統と現代の技術が融合していて、訪れる人々に深い印象を与えます。日本料理も世界中で人気があり、寿司や天ぷらなどは多くの人に愛されています。\n"
                    + "
                    日本は四季がはっきりしていて、それぞれの季節に美しい自然が楽しめます。春には桜の花が咲き、夏には緑が豊かになります。秋は紅葉が美しく、冬には雪景色\n"
                    + " 日本は四季が
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-2 bg-color3 p-4">
          <h3 className="border-b-2 border-dashed border-gray-500 text-2xl font-bold">
            室芸室芸室芸室芸
          </h3>
          <div className="py-3">
            <ul className="flex items-center justify-center gap-x-10">
              <li>
                <span>滅健滅</span>
              </li>
              <li>
                <span>滅健滅</span>
              </li>
              <li>
                <span>滅健滅</span>
              </li>
              <li>
                <span>滅健滅</span>
              </li>
            </ul>
          </div>
          <div className="mt-2">
            <ul className="flex flex-col gap-y-2">
              <li className="border-b-2  pb-3">
                <div className="border-b-2 border-dashed ">
                  <div className="flex items-center justify-between pb-3">
                    <h3 className="text-2xl font-bold">
                      春には桜の花が咲き春には桜の花が咲き
                    </h3>
                    <ButtonCommon
                      type="button"
                      className="h-fit rounded-lg bg-color8 px-3 text-white"
                    >
                      申ゅゆ選歳ゆ選歳
                    </ButtonCommon>
                  </div>
                  <div className="flex items-center justify-between">
                    <h4>春には桜</h4>
                    <div className="flex gap-x-6">
                      <span>春には 2023.11.26</span>
                      <span>春にはには 2023.12.06</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between pt-3">
                  <div className="flex items-center gap-x-5">
                    <div className="flex items-center">
                      <input
                        id="disabled-checked-checkbox"
                        type="checkbox"
                        value=""
                        className="h-5 w-5 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                      />
                      <label
                        htmlFor="disabled-checked-checkbox"
                        className="ms-1 text-xl  font-medium text-gray-400 dark:text-gray-500"
                      >
                        0
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="checked_1"
                        type="checkbox"
                        value=""
                        className="h-5 w-5 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                      />
                      <label
                        htmlFor="checked_1"
                        className="ms-1 text-xl  font-medium text-gray-400 dark:text-gray-500"
                      >
                        6
                      </label>
                    </div>
                  </div>
                  <div className="flex gap-x-3">
                    <ButtonCommon type="button">
                      <span className="">球ムヘマ球ム球</span>
                      <IoTriangle
                        className={`rotate-180 transition-transform duration-500 `}
                      />
                    </ButtonCommon>
                    <ButtonCommon type="button">
                      <MdStarRate size={"18px"} />
                      <span className="">球ムヘマ球ム球ムヘマ球</span>
                    </ButtonCommon>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-2 bg-color3 p-4">
          <h3 className="border-b-2 border-dashed border-gray-500 text-2xl font-bold">
            室芸室芸室芸室芸
          </h3>
          <div className="border-b-2 py-3">
            <ul className="flex items-center justify-center gap-x-10">
              <li>
                <span>滅健滅</span>
              </li>
              <li>
                <span>滅健滅</span>
              </li>
              <li>
                <span>滅健滅</span>
              </li>
              <li>
                <span>滅健滅</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-2 bg-color3 p-4">
          <h3 className="border-b-2 border-dashed border-gray-500 text-2xl font-bold">
            室芸室芸室芸室芸
          </h3>
          <div className="mt-2">
            <ul className="flex flex-col gap-y-2">
              <li className="border-b-2 py-3">
                <div className="border-b-2 border-dashed">
                  <div className="flex items-center justify-between pb-3">
                    <h3 className="text-2xl font-bold">
                      春には桜の花が咲き春には桜の花が咲き
                    </h3>
                    <ButtonCommon
                      type="button"
                      className="h-fit rounded-lg bg-color8 px-3 text-white"
                    >
                      申ゅゆ選歳ゆ選歳
                    </ButtonCommon>
                  </div>
                  <div className="flex items-center justify-between">
                    <h4>春には桜</h4>
                    <div className="flex gap-x-6">
                      <span>春には 2023.11.26</span>
                      <span>春にはには 2023.12.06</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between pt-3">
                  <div className="flex items-center gap-x-5">
                    <div className="flex items-center">
                      <input
                        id="disabled-checked-checkbox"
                        type="checkbox"
                        value=""
                        className="h-5 w-5 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                      />
                      <label
                        htmlFor="disabled-checked-checkbox"
                        className="ms-1 text-xl  font-medium text-gray-400 dark:text-gray-500"
                      >
                        0
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="checked_1"
                        type="checkbox"
                        value=""
                        className="h-5 w-5 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                      />
                      <label
                        htmlFor="checked_1"
                        className="ms-1 text-xl  font-medium text-gray-400 dark:text-gray-500"
                      >
                        6
                      </label>
                    </div>
                  </div>
                  <div className="flex gap-x-10">
                    <div className="flex items-center gap-x-1">
                      <span className="flex items-center gap-x-2 text-xl text-color11">
                        ム球
                        <IoTriangle
                          className={`rotate-90 transition-transform duration-500`}
                        />
                      </span>
                      <span className="flex items-center gap-x-2 text-xl font-medium">
                        ム球ム
                      </span>
                    </div>
                    <ButtonCommon type="button">
                      <span className="flex items-center gap-x-2 text-xl text-color10">
                        球ムヘマ球ム球ム
                        <IoTriangle
                          className={`rotate-90 transition-transform duration-500`}
                        />
                      </span>
                      <span className="">球ムヘ</span>
                    </ButtonCommon>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-b-2 p-4">
          <h3 className="border-b-2 border-dashed border-gray-500 text-2xl font-bold">
            室芸室芸室芸室芸
          </h3>
          <p className="my-6">
            春には桜の花が咲き春には桜の花が咲き
            春には桜の花が咲き春には桜の花が咲き
            春には桜の花が咲き春には桜の花が咲き
            春には桜の花が咲き春には桜の花が咲き
          </p>
          <p>
            春には桜の花が咲き春には桜の花が咲き
            春には桜の花が咲き春には桜の花が咲き
            春には桜の花が咲き春には桜の花が咲き
            春には桜の花が咲き春には桜の花が咲き
            春には桜の花が咲き春には桜の花が咲き
            春には桜の花が咲き春には桜の花が咲き
            春には桜の花が咲き春には桜の花が咲き
            春には桜の花が咲き春には桜の花が咲き
          </p>
        </div>

        <div className="mt-10 border-b-2 p-4">
          <h3 className="border-b-2 border-dashed border-gray-500 text-2xl font-bold">
            室芸室芸室芸室芸
          </h3>
          <p className="my-6">
            春には桜の花が咲き春には桜の花が咲き
            春には桜の花が咲き春には桜の花が咲き
            春には桜の花が咲き春には桜の花が咲き
            春には桜の花が咲き春には桜の花が咲き
          </p>
        </div>
      </div>
    </>
  );
}
