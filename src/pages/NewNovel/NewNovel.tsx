import { RankingContainer } from "components/Ranking";
import { SidebarHome } from "components/SideBar/SideBarHome";
import { NovelCreatedNew } from "@/components/novel/NovelCreatedNew";
import { NovelUpdatedNew } from "@/components/novel/NovelUpdatedNew";
import { useEffect } from "react";

export default function NewNovel() {
  useEffect(() => {
    if (window.location.hash) {
      const elementScroll = document.querySelector(window.location.hash);
      elementScroll?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    }
  }, []);

  return (
    <>
      <SidebarHome />
      <div className="content flex-1">
        <div className="border-2 p-2">
          <div>
            <h2 className="pb-2 text-xl font-semibold ">Tác phẩm mới đăng</h2>
            <NovelCreatedNew />
          </div>

          <div className="mt-4">
            <h2 className="pb-2  text-xl font-semibold ">
              Tác phẩm mới update
            </h2>
            <NovelUpdatedNew />
          </div>
        </div>
        <div id="ranking-container">
          <RankingContainer limit={20} />
        </div>
      </div>
    </>
  );
}
