import { Fragment, useEffect, useRef, useState } from "react";
import { Form, NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { animateScroll as scroll } from "react-scroll";
import Breadcrumbs from "@/components/common/Breadcrumbs.tsx";
import useAuth from "@/hooks/useAuth.tsx";
import ButtonCommon from "@/components/button/ButtonCommon.tsx";

export function Header() {
  const location = useLocation();
  const user = useAuth();
  const headerRef = useRef();
  const { t, i18n } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState(
    localStorage.getItem("current_language") || "ja",
  );
  const handleChangeLanguage = async (lang: string) => {
    setCurrentLanguage(lang);
    await i18n.changeLanguage(lang);
    localStorage.setItem("current_language", lang);
  };
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <header
      ref={headerRef}
      className={`left-0 right-0 top-0 z-10 fixed`}
    >
      <div className="container mx-auto">
      <div
          className={` rounded-t-[40px] bg-white px-8 pb-2  border-b-2 border-b-[#ccc] `}
        >
          <div className="header-top mb-4 flex h-[58px] justify-between">
            <div className="header-top-logo flex h-full w-[225px] items-end justify-start">
              <img
                className={`pr-4 ${location.pathname == "/" ? "hidden" : "block"}`}
                src="/public/assets/logoColiseum.png"
                alt=""
              />
            </div>
            <div className="header-top-center bg-color1 h-[48px] flex-1">
              <div className="flex h-full items-center justify-center gap-x-6 ">
                {user.isAuth ? (
                  <>
                    <div className="flex items-center">
                      <div className="avatar mx-3 h-[30px] w-[30px] overflow-hidden rounded-full border-[1px] border-black">
                        <img
                          src="https://inkythuatso.com/uploads/thumbnails/800/2023/03/9-anh-dai-dien-trang-inkythuatso-03-15-27-03.jpg"
                          alt=""
                        />
                      </div>
                      <NavLink to="/test">{user?.user?.name}</NavLink>
                    </div>
                    <span>|</span>
                    <div>
                      <Form action="/logout" method="post">
                        <button type="submit">ログアウト</button>
                      </Form>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <NavLink to="/login">サインイン</NavLink>
                    </div>
                    <span>|</span>
                    <div>
                      <NavLink to="/register">新規ユーザー登録</NavLink>
                    </div>
                    <span>|</span>
                    <div>
                      <button className="rounded bg-white px-3">
                        <NavLink to="/user-manual">初心者向けガイ</NavLink>
                      </button>
                    </div>
                  </>
                )}
                {/* <li>
                <button
                  className={currentLanguage === "ja" ? "text-orange-500" : "hover:bg-color2 px-3 py-1 rounded"}
                  onClick={() => handleChangeLanguage("ja")}
                >
                  Tiếng Nhật
                </button>
              </li>
              <div>
                <button
                  className={currentLanguage === "vi" ? "text-orange-500" : "hover:bg-color2 px-3 py-1 rounded"}
                  onClick={() => handleChangeLanguage("vi")}
                >
                  Tiếng Việt
                </button>
              </div> */}
              </div>
            </div>
            <div className="header-top-right flex w-[225px] items-end justify-end">
              <button
                className="m-[10px] w-[100px] rounded border-[1px] border-black bg-white px-3"
                onClick={scrollToTop}
              >
                TOP
                <div className="border-b-10 border-l-10 h-0 w-0 border-solid border-transparent border-b-black"></div>
              </button>
            </div>
          </div>
          <nav className="header-nav-wrap py-2">
            <div className="container">
              <ul className="flex flex-wrap justify-between gap-x-4">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-color2 rounded px-3 py-1"
                        : "hover:bg-color2 rounded px-3 py-1"
                    }
                  >
                    Trang chủ
                  </NavLink>
                </li>
                {/* <li>
              <NavLink to="/tournament">Tournament</NavLink>
            </li> */}
                {user.isAuth && (
                  <Fragment>
                    <li>
                      <NavLink
                        to="/mypage"
                        className={({ isActive }) =>
                          isActive
                            ? "bg-color2 rounded px-3 py-1"
                            : "hover:bg-color2 rounded px-3 py-1"
                        }
                      >
                        MyPage
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/search-novel"
                        className={({ isActive }) =>
                          isActive
                            ? "bg-color2 rounded px-3 py-1"
                            : "hover:bg-color2 rounded px-3 py-1"
                        }
                      >
                        SearchNovel
                      </NavLink>
                    </li>
                  </Fragment>
                )}
                <li>
                  <NavLink
                    to="/coliseum"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-color2 rounded px-3 py-1"
                        : "hover:bg-color2 rounded px-3 py-1"
                    }
                  >
                    Coliseum
                  </NavLink>
                </li>
                <li>
                  <a
                    className="hover:bg-color2 rounded px-3 py-1"
                    href="https://www.bungo-coliseum.jp/creation"
                    target="blank"
                  >
                    創作論
                  </a>
                </li>
                <li>
                  <a
                    className="hover:bg-color2 rounded px-3 py-1"
                    href="https://www.bungo-coliseum.jp/recommend"
                    target="blank"
                  >
                    推し事
                  </a>
                </li>
                <li>
                  <NavLink
                    to="/newnovel"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-color2 rounded px-3 py-1"
                        : "hover:bg-color2 rounded px-3 py-1"
                    }
                  >
                    New Novel
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/use-regulations"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-color2 rounded px-3 py-1"
                        : "hover:bg-color2 rounded px-3 py-1"
                    }
                  >
                    useRegulations
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/123"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-color2 rounded px-3 py-1"
                        : "hover:bg-color2 rounded px-3 py-1"
                    }
                  >
                    Thông báo
                  </NavLink>
                </li>
                {/* <li>
              <NavLink to="/tournament-board">Tournament Board</NavLink>
            </li>
            <li>
              <NavLink to="/author-join-tourament">AuthorJoinTourament</NavLink>
            </li>
            <li>
              <NavLink to="/result-tourament">ResultTourament</NavLink>
            </li>
            <li>
              <NavLink to="/hall-tourament">ResultTourament</NavLink>
            </li>
            <li>
              <NavLink to="/fan-page">FanPage</NavLink>
            </li>
            <li>
              <NavLink to="/user-manual">UserManual</NavLink>
            </li>
            <li>
              <NavLink to="/top-comment">TopComment</NavLink>
            </li>
            <li>
              <NavLink to="/comment">Comment</NavLink>
            </li>
            <li>
              <NavLink to="/recruitment">Recruitment</NavLink>
            </li>
            <li>
              <NavLink to="/top-tourament">TopTourament</NavLink>
            </li>
            <li>
              <NavLink to="/add-novel">Upload Novel</NavLink>
            </li>
            <li>
              <NavLink to="/add-chapter">Add Chapter</NavLink>
            </li>
            <li>
              <NavLink to="/reader-novel">ReaderNovel</NavLink>
            </li>
            <li>
              <Link
                to="coliseum_noti"
                spy={true}
                smooth={true}
                offset={-190}
                duration={500}
              >
                お知らせ
              </Link>
            </li>
            <li>
              <NavLink to="/test5">Tourament</NavLink>
            </li> */}

                {/* <li>
              <NavLink to="/protection-policy">ProtectionPolicy</NavLink>
            </li> */}
              </ul>
              {/* <Search/> */}
            </div>
          </nav>
        </div>

        {/* <div className={`${checkScroll ? "hidden" : ""}`}>
          <div className="my-14 w-1/2">
          <img src="/public/assets/logoColiseum.png" alt="" />
            <div className="px-8">
            <h1 className="title text-center text-3xl font-extrabold mb-6">
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
          </div>
        </div> */}
      </div>
    </header>
  );
}
