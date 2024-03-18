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
      <div className="container mx-auto mt-16 bg-white p-8">
        <div className="flex gap-x-3">
          <SidebarHome />

          <div className="content flex-1">
            <div className="">
              <div>
                <h2 className="pb-2 text-xl font-semibold ">
                  Tác phẩm mới đăng
                </h2>
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
        </div>
      </div>
    </>
  );
}
