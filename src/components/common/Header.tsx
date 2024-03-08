import { Fragment, useRef, useState } from "react";
import { Form, NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Link, animateScroll as scroll } from "react-scroll";
3;
import Breadcrumbs from "@/components/common/Breadcrumbs.tsx";
import useAuth from "@/hooks/useAuth.tsx";
import ButtonCommon from "@/components/button/ButtonCommon.tsx";
import Search from "../Search/Search";

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
      className="fixed left-0 right-0 top-0 z-10 bg-green-100"
    >
      <div className="header-top-wrap pt-2">
        <div className="l-container">
          <div className="header-top-right">
            <ul className="flex justify-end gap-x-6">
              {user.isAuth ? (
                <>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "text-primary" : ""
                      }
                      to="/test"
                    >
                      Hello, {user?.user?.name}
                    </NavLink>
                  </li>
                  <li>
                    <Form action="/logout" method="post">
                      <ButtonCommon type="submit">Logout</ButtonCommon>
                    </Form>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "text-primary" : ""
                      }
                      to="/login"
                    >
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "text-primary" : ""
                      }
                      to="/register"
                    >
                      Register
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "text-primary" : ""
                      }
                      to="/user-manual"
                    >
                      UserManual
                    </NavLink>
                  </li>
                </>
              )}

              <li>
                <button
                  className={currentLanguage === "ja" ? "text-orange-500" : ""}
                  onClick={() => handleChangeLanguage("ja")}
                >
                  Tiếng Nhật
                </button>
              </li>
              <li>
                <button
                  className={currentLanguage === "vi" ? "text-orange-500" : ""}
                  onClick={() => handleChangeLanguage("vi")}
                >
                  Tiếng Việt
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="header-mid-wrap">
        <div className="l-container">
          <div className="flex justify-between">
            {location.pathname == "/" ? (
              <ul className="flex gap-x-6">
                <li>Trang chủ</li>
              </ul>
            ) : (
              <Breadcrumbs />
            )}

            <button onClick={scrollToTop}>TOP</button>
          </div>
        </div>
      </div>
      <nav className="header-nav-wrap py-2">
        <div className="l-container">
          <ul className="flex flex-wrap justify-between gap-x-4">
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-primary" : "")}
                to="/"
                title="Home"
              >
                <h1>{t("common.home")}</h1>
              </NavLink>
            </li>
            {/* <li>
              <NavLink  className={({ isActive }) => (isActive ? "text-primary" : "")}  to="/tournament">Tournament</NavLink>
            </li> */}
            {user.isAuth && (
              <Fragment>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-primary" : ""
                    }
                    to="/mypage"
                  >
                    MyPage
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-primary" : ""
                    }
                    to="/search-novel"
                  >
                    SearchNovel
                  </NavLink>
                </li>
              </Fragment>
            )}
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-primary" : "")}
                to="/coliseum"
              >
                Coliseum
              </NavLink>
            </li>
            <li>
              <a href="https://www.bungo-coliseum.jp/creation" target="blank">
                創作論
              </a>
            </li>
            <li>
              <a href="https://www.bungo-coliseum.jp/recommend" target="blank">
                推し事
              </a>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-primary" : "")}
                to="/newnovel"
              >
                New Novel
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-primary" : "")}
                to="/use-regulations"
              >
                useRegulations
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-primary" : "")}
                to="/"
              >
                Thông báo
              </NavLink>
            </li>
              {/* <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "text-primary" : "")}
                  to="/tournament-board"
                >
                  Tournament Board
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "text-primary" : "")}
                  to="/author-join-tourament"
                >
                  AuthorJoinTourament
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "text-primary" : "")}
                  to="/result-tourament"
                >
                  ResultTourament
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "text-primary" : "")}
                  to="/hall-tourament"
                >
                  ResultTourament
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "text-primary" : "")}
                  to="/fan-page"
                >
                  FanPage
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "text-primary" : "")}
                  to="/user-manual"
                >
                  UserManual
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "text-primary" : "")}
                  to="/top-comment"
                >
                  TopComment
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "text-primary" : "")}
                  to="/comment"
                >
                  Comment
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "text-primary" : "")}
                  to="/recruitment"
                >
                  Recruitment
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "text-primary" : "")}
                  to="/top-tourament"
                >
                  TopTourament
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "text-primary" : "")}
                  to="/add-novel"
                >
                  Upload Novel
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "text-primary" : "")}
                  to="/add-chapter"
                >
                  Add Chapter
                </NavLink>
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
                <NavLink
                  className={({ isActive }) => (isActive ? "text-primary" : "")}
                  to="/test5"
                >
                  Tourament
                </NavLink>
              </li> */}

            {/* <li>
              <NavLink  className={({ isActive }) => (isActive ? "text-primary" : "")}  to="/protection-policy">ProtectionPolicy</NavLink>
            </li> */}
          </ul>
          {/* <Search/> */}
        </div>
      </nav>
    </header>
  );
}
