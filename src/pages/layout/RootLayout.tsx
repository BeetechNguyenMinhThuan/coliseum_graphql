//Component

//packet
import { Outlet } from "react-router-dom";
import { Footer, Header } from "components/common";
import { useLocation } from "react-router-dom";
import { Suspense, useEffect} from "react";
export default function Layout() {
  const location = useLocation();
  const pathName = location.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
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
