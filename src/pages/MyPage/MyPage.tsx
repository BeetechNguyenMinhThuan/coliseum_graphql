import NovelListUpload from "components/NovelUpload/NovelListUpload";
import { SideBarMyPage } from "components/SideBar/SideBarMyPage";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Advertisement } from "../../components/Advertisement";

// import Button from "../../components/Button/Button.tsx";

import { Title } from "../../components/Common";
import { Button } from "flowbite-react";
import Accordition from "components/Accordition/Accordition.tsx";

export default function MyPage() {
  const navigate = useNavigate();
  const arrAds = [
    "s-l1200.webp",
    "coke-print-ad.jpg",
    "7_Up_-_You_like_it,_it_likes_you,_1948.jpg",
  ];
  useEffect(() => {
    const tokenString = localStorage.getItem("token");
    if (tokenString) {
      let { token, exprired_token } = JSON.parse(tokenString);
      console.log(token, exprired_token);

      if (!token || exprired_token) {
        navigate("/login");
      }
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <SideBarMyPage />
      <div className="content flex-1 ">
        {/* edit profile */}
        <div className="grid grid-cols-[2fr_3fr_1fr] gap-7 border-2 p-4">
          <div className="flex flex-col">
            <p>選歳ーだ平申ゅゆ</p>
            <p>増部1公</p>
          </div>
          <div className="flex items-center text-2xl">
            <p>日もん健滅ヨミ盗97百</p>
          </div>
          <div className="flex items-center">
            <NavLink
              className={"rounded-xl border-2 py-1"}
              to={"/edit-profile"}
            >
              ドーつ室芸
            </NavLink>
          </div>
        </div>
        <div className="grid grid-cols-[2fr_3fr_1fr] gap-7 border-b-2 border-l-2 border-r-2 p-4">
          <div className="flex flex-col">
            <p>選歳ーだ平申ゅゆ</p>
            <p>増部1公</p>
          </div>
          <div className="flex items-center text-2xl">
            <p>日もん健滅ヨミ盗97百</p>
          </div>
          <div className="flex items-center">
            <NavLink
              className={"rounded-xl border-2 py-1"}
              to={"/edit-profile"}
            >
              ドーつ室芸
            </NavLink>
          </div>
        </div>
        <div className="grid grid-cols-[2fr_3fr_1fr] gap-7 border-b-2 border-l-2 border-r-2 p-4">
          <div className="flex flex-col">
            <p>選歳ーだ平申ゅゆ</p>
            <p>増部1公</p>
          </div>
          <div className="flex items-center text-2xl">
            <p>日もん健滅ヨミ盗97百</p>
          </div>
          <div className="flex items-center">
            <NavLink
              className={"rounded-xl border-2 py-1"}
              to={"/edit-profile"}
            >
              ドーつ室芸
            </NavLink>
          </div>
        </div>
        {/*  */}
        <NovelListUpload />
        <div className="mt-10">
          <Accordition />
          <Accordition />
          <Accordition />
        </div>

        <Advertisement>{arrAds}</Advertisement>
        <div className="">
          <Title title="ドーつ室芸" />
          <div className="mt-2">
            <ul role="list" className="">
              <li className="border-b-2 py-2">
                <div className="">
                  <div className="flex items-center gap-x-2">
                    <span>2023-11-30</span>
                    <span className="cursor-pointer border-2 px-5">
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
              <li className="border-b-2 py-2">
                <div className="">
                  <div className="flex items-center gap-x-2">
                    <span>2023-11-30</span>
                    <span className="cursor-pointer border-2 px-5">
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
        <div className="mt-10">
          <Title title="日もん健滅" />
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
          <div className="mt-2">
            <ul className="flex flex-col gap-y-2">
              <li className="border-2 px-3 pb-3">
                <div className="">
                  <div className="border-b-2 border-dashed p-1 ">
                    <div className="flex items-center justify-between pb-3">
                      <h3 className="text-2xl font-bold">
                        春には桜の花が咲き春には桜の花が咲き
                      </h3>
                      <Button>春には桜の</Button>
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
                      <Button>
                        <span className="">球ムヘマ球ム球</span>
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
                            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                          />
                        </svg>
                      </Button>
                      <Button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-6 w-6 fill-black"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                          />
                        </svg>

                        <span className="">球ムヘマ球ム球ムヘマ球</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </li>
              <li className="border-2 px-3 pb-3">
                <div className="">
                  <div className="border-b-2 border-dashed p-1 ">
                    <div className="flex items-center justify-between pb-3">
                      <h3 className="text-2xl font-bold">
                        春には桜の花が咲き春には桜の花が咲き
                      </h3>
                      <Button>春には桜の</Button>
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
                      <Button>
                        <span className="">球ムヘマ球ム球</span>
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
                            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                          />
                        </svg>
                      </Button>
                      <Button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-6 w-6 fill-black"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                          />
                        </svg>

                        <span className="">球ムヘマ球ム球ムヘマ球</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10">
          <Title title="日もん健滅" />
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

        <div className="mt-40">
          <Title title="日もん健滅" />
          <div className="mt-2">
            <ul className="flex flex-col gap-y-2">
              <li className="border-2 px-3 pb-3">
                <div className="">
                  <div className="border-b-2 border-dashed p-1 ">
                    <div className="flex items-center justify-between pb-3">
                      <h3 className="text-2xl font-bold">
                        春には桜の花が咲き春には桜の花が咲き
                      </h3>
                      <Button>春には桜の</Button>
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
                      <Button>
                        <span className="">球ムヘマ球ム球</span>
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
                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </Button>
                      <Button>
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
                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                          />
                        </svg>

                        <span className="">球ムヘマ球ム球ムヘマ球</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </li>
              <li className="border-2 px-3 pb-3">
                <div className="">
                  <div className="border-b-2 border-dashed p-1 ">
                    <div className="flex items-center justify-between pb-3">
                      <h3 className="text-2xl font-bold">
                        春には桜の花が咲き春には桜の花が咲き
                      </h3>
                      <Button>春には桜の</Button>
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
                      <Button>
                        <span className="">球ムヘマ球ム球</span>
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
                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </Button>
                      <Button>
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
                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                          />
                        </svg>

                        <span className="">球ムヘマ球ム球ムヘマ球</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-b-2 pb-4">
          <Title title="日もん健滅" className="border-dashed pl-0 text-left" />
          <p className="mb-6">
            {" "}
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

        <div className="mt-10 border-b-2">
          <Title title="日もん健滅" className="border-dashed pl-0 text-left" />
          <p className="mb-3">
            {" "}
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
