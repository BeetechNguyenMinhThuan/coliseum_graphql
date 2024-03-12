import { Fragment, useRef, useState } from "react";
import { Form, NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Link, animateScroll as scroll } from "react-scroll";
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
                    <NavLink to="/test">Hello, {user?.user?.name}</NavLink>
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
                    <NavLink to="/login">Login</NavLink>
                  </li>
                  <li>
                    <NavLink to="/register">Register</NavLink>
                  </li>
                  <li>
                    <NavLink to="/user-manual">UserManual</NavLink>
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
              <NavLink to="/" title="Home">
                <h1>{t("common.home")}</h1>
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/tournament">Tournament</NavLink>
            </li> */}
            {user.isAuth && (
              <Fragment>
                <li>
                  <NavLink to="/mypage">MyPage</NavLink>
                </li>
                <li>
                  <NavLink to="/search-novel">SearchNovel</NavLink>
                </li>
              </Fragment>
            )}
            <li>
              <NavLink
                to="/coliseum"
                className={({ isActive }) => (isActive ? "text-primary" : "")}
              >
                Coliseum
              </NavLink>
            </li>
            <li>
              <a href="https://www.bungo-coliseum.jp/creation" target="blank">創作論</a>
            </li>
            <li>
              <a href="https://www.bungo-coliseum.jp/recommend" target="blank">推し事</a>
            </li>
            <li>
              <NavLink to="/newnovel">New Novel</NavLink>
            </li>
            <li>
              <NavLink to="/use-regulations">useRegulations</NavLink>
            </li>
            <li>
              <NavLink to="/">Thông báo</NavLink>
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
    </header>
  );
}
