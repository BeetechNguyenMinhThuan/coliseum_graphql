import { useTranslation } from "react-i18next";
import { SideBarColiseum } from "components/SideBar/SideBarColiseum.tsx";
import { Advertisement } from "components/Advertisement";
import { NavLink } from "react-router-dom";
import "./index.scss"
import { Search } from "@/components/Search/Search";

export function SearchNovel() {
  const { t } = useTranslation();

  const arrAds = [
    "s-l1200.webp",
    "coke-print-ad.jpg",
    "7_Up_-_You_like_it,_it_likes_you,_1948.jpg",
  ];
  return (
    <>
      <SideBarColiseum />
      <div className="content flex-1">
        <div className="border-black-500 min-h-[188px] border-2 border-l-0 border-solid p-2">
          <Search />
          <div className="my-3 px-2 ">
            <span>
              Kết quả tìm kiếm <span>100</span>
            </span>
            <div className="pagination my-3">pagination</div>
            <div className="border-t-2 border-dashed item">
              <div className="flex my-4">
                <img
                  src="/assets/advertisement/s-l1200.webp"
                  alt=""
                  style={{ width: "100px" }}
                />
                <div className="px-2 ">
                  <div className="mb-2 font-bold ">
                    輪スめあ提逮しンぽず返子げ払輪スめあ提逮しンぽず返子げ払輪スめあ提逮しンぽず返子げ払輪スめあ提逮しンぽず返子げ払輪スめあ提逮しンぽず返子げ払
                  </div>
                  <div className=" flex">
                    <div className="border-2 px-3 min-w[80px]" >Huy hiệu</div>
                    <div className=" mx-3" >Tên tác giả</div>

                  </div>
                </div>
              </div>
            </div>

            <div className="border-t-2 border-dashed item">
              <div className="flex my-4">
                <img
                  src="/assets/advertisement/s-l1200.webp"
                  alt=""
                  style={{ width: "100px" }}
                />
                <div className="px-2 ">
                  <div className="mb-2 font-bold ">
                    輪スめあ提逮しンぽず返子げ払輪スめあ提逮しンぽず返子げ払輪スめあ提逮しンぽず返子げ払輪スめあ提逮しンぽず返子げ払輪スめあ提逮しンぽず返子げ払
                  </div>
                  <div className=" flex">
                    <div className="border-2 px-3 min-w[80px]" >Huy hiệu</div>
                    <div className=" mx-3" >Tên tác giả</div>

                  </div>
                </div>
              </div>
            </div>

            <div className="border-t-2 border-dashed item">
              <div className="flex my-4">
                <img
                  src="/assets/advertisement/s-l1200.webp"
                  alt=""
                  style={{ width: "100px" }}
                />
                <div className="px-2 ">
                  <div className="mb-2 font-bold ">
                    輪スめあ提逮しンぽず返子げ払輪スめあ提逮しンぽず返子げ払輪スめあ提逮しンぽず返子げ払輪スめあ提逮しンぽず返子げ払輪スめあ提逮しンぽず返子げ払
                  </div>
                  <div className=" flex">
                    <div className="border-2 px-3 min-w[80px]" >Huy hiệu</div>
                    <div className=" mx-3" >Tên tác giả</div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Advertisement>{arrAds}</Advertisement>
      </div>
    </>
  );
}
