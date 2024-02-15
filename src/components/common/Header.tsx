import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ja, vi } from "date-fns/locale";
import { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import Breadcrumbs from "@/components/common/Breadcrumbs.tsx";
import useAuth from "@/hooks/useAuth.tsx";
import { ACCESS_TOKEN } from "@/utils/localStorageHepler.ts";
import ButtonCommon from "@/components/button/ButtonCommon.tsx";

registerLocale("ja", ja);
registerLocale("vi", vi);

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = useAuth();

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
    <header className="fixed left-0 right-0 top-0 z-10 bg-green-100">
      <div className="header-top-wrap py-2">
        <div className="l-container">
          <div className="header-top-right">
            <ul className="flex justify-end gap-x-6">
              {user.isAuth ? (
                <>
                  <li>
                    <NavLink to="/test">Hello, {user?.user?.name}</NavLink>
                  </li>
                  <li>
                    <ButtonCommon
                      onClick={() => {
                        localStorage.removeItem(ACCESS_TOKEN);
                        navigate("/");
                      }}
                      type="button"
                    >
                      Logout
                    </ButtonCommon>
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
                <li>Test 1</li>
                <li>Test 2</li>
                <li>Test 3</li>
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
              <NavLink to="/">
                <h1>{t("common.home")}</h1>
              </NavLink>
            </li>
            <li>
              <NavLink to="/coliseum">Coliseum</NavLink>
            </li>
            <li>
              <NavLink to="/tournament">Tournament</NavLink>
            </li>
            <li>
              <NavLink to="/author">Author</NavLink>
            </li>
            <li>
              <NavLink to="/mypage">MyPage</NavLink>
            </li>
            <li>
              <NavLink to="/newnovel">New Novel</NavLink>
            </li>
            <li>
              <NavLink to="/tournament-board">Tournament Board</NavLink>
            </li>
            <li>
              <NavLink to="/test-coli">Test</NavLink>
            </li>
            <li>
              <NavLink to="/test-coli2">Test 2</NavLink>
            </li>
            <li>
              <NavLink to="/test-coli3">Test 3</NavLink>
            </li>
            <li>
              <NavLink to="/test-coli4">Test 4</NavLink>
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
              <Link
                activeClass="active"
                to="coliseum_noti"
                spy={true}
                smooth={true}
                offset={-190}
                duration={500}
              >
                お知らせ
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}