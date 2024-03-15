//Component

//packet
import { Outlet } from "react-router-dom";
import { Footer, Header } from "components/common";
import { Banner } from "components/Banner";
import { useLocation } from "react-router-dom";
import Hero from "@/components/common/Hero.tsx";
import { Suspense, useEffect } from "react";

export default function Layout() {
  const location = useLocation();
  const pathName = location.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
    // document.title = pathName
  }, [pathName]);

  /**
   * render template
   */
  return (
    <Suspense fallback={<></>}>
      <div id="app" className="bg-[#FAFAFA]">
        <Header />
        {/* <div>
          {pathName !== "/author" && pathName !== "/newnovel" ? <Banner /> : ""}
        </div> */}
        <div className={`main-content `}>
          <Outlet />
          <div className="container">
            <div className="flex gap-x-3"></div>
          </div>
        </div>
        <Footer />
      </div>
    </Suspense>
  );
}
