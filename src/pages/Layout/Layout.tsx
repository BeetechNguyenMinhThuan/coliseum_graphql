//Component

//packet
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Footer, Header } from "components/Common";
import { Banner } from "components/Banner";
import { useLocation } from "react-router-dom";
import Hero from "../../components/Common/Hero.tsx";

export default function Layout() {
  const { i18n } = useTranslation();
  const location = useLocation();
  const pathName = location.pathname;
  const [currentLanguage, setCurrentLanguage] = useState(
    localStorage.getItem("current_language") || "ja",
  );
  const handleChangeLanguage = (lang: string) => {
    setCurrentLanguage(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem("current_language", lang);
  };
  /**
   * render template
   */
  return (
    <div id="app">
      <Header />
      {/* <button className={currentLanguage === "ja" ? 'text-orange-500' : ""}
                    onClick={() => handleChangeLanguage("ja")}>Tiếng Nhật
            </button>
            <button className={currentLanguage === "vi" ? 'text-orange-500' : ""}
                    onClick={() => handleChangeLanguage("vi")}>Tiếng Việt
            </button> */}

      {(pathName == "/" ||
        pathName == "/coliseum" ||
        pathName == "/tournament" ||
        pathName == "/tournament-board") && (
        <Hero
          title="選歳ーだ平申1ゅゆ選歳ーだ平申ゅゆ歳ーだ平申ゅゆ"
          subtitle="選歳ーだ"
        />
      )}

      <div className={pathName == "/mypage" ? "mt-[108px]" : ""}>
        {pathName !== "/author" && pathName !== "/newnovel" ? <Banner /> : ""}
      </div>
      <div
        className={`main-content ${
          pathName !== "/author" && pathName !== "/newnovel"
            ? "mt-[20px]"
            : " mt-[140px]"
        }`}
      >
        <div className="l-container">
          <div className="flex gap-x-3">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
