import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ja, vi } from "date-fns/locale";
import { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

registerLocale("ja", ja);
registerLocale("vi", vi);

export function Header() {
  const navigate = useNavigate();
  const [randomNumber, setRandomNumber] = useState(1);
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
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Tùy chọn này tạo hiệu ứng cuộn mượt mà
    });
  };
  //   function getRandomNumber() {
  //     return Math.floor(Math.random() * 11);
  //   }
  //   const handleRandom = () => {
  //     setRandomNumber(getRandomNumber);
  //   };
  //   useEffect(() => {
  //     if (randomNumber > 5) {
  //       navigate("/login");
  //     }
  //   }, [randomNumber]);
  return (
    <header className="fixed left-0 right-0 top-0 z-10 bg-green-100">
      <div className="header-top-wrap py-2">
        <div className="l-container">
          <div className="header-top-right">
            <ul className="flex justify-end gap-x-6">
              <li>
                <NavLink to="/test">Login</NavLink>
              </li>
              <li>
                <NavLink to="/test">Register</NavLink>
              </li>
              <li>
                <NavLink to="/test">Hello, Coliseum</NavLink>
              </li>
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
            <ul className="flex gap-x-6">
              <li>Test 1</li>
              <li>Test 2</li>
              <li>Test 3</li>
            </ul>
            <button onClick={scrollToTop}>TOP</button>
          </div>
        </div>
      </div>
      <nav className="header-nav-wrap py-2">
        <div className="l-container">
          <ul className="flex justify-between">
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
              <NavLink to="/nav">MyPage</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
