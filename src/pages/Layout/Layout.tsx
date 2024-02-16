//Component

//packet
import { Outlet } from "react-router-dom";
import { Footer, Header } from "components/common";
import { Banner } from "components/Banner";
import { useLocation } from "react-router-dom";
import Hero from "@/components/common/Hero.tsx";
import { Suspense } from "react";

export default function Layout() {
  const location = useLocation();
  const pathName = location.pathname;

  /**
   * render template
   */
  return (
    <Suspense>
      <div id="app" className="mt-[108px]">
        <Header />
        {(pathName == "/" ||
          pathName == "/coliseum" ||
          pathName == "/tournament" ||
          pathName == "/tournament-board") && (
          <Hero
            title="選歳ーだ平申1ゅゆ選歳ーだ平申ゅゆ歳ーだ平申ゅゆ"
            subtitle="選歳ーだ"
          />
        )}

        <div>
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
    </Suspense>
  );
}
