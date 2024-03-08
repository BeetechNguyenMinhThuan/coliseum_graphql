import { useTranslation } from "react-i18next";
import { SideBarColiseum } from "components/SideBar/SideBarColiseum.tsx";
import { Advertisement } from "components/Advertisement";
import "./index.scss";
import Search from "@/components/Search/Search";
import { useQuery } from "@apollo/client";
import { GET_NOVELS_PAGINATE } from "@/graphql-client/novel/queries";
import { Pagination } from "@/components/pagination/Pagination";
import { useState } from "react";
import { setDefaultTitle } from "@/utils/helper";
import { LoadingSpiner } from "@/components/Loading/LoadingSpiner";

export function SearchNovel() {
  setDefaultTitle("Trang tìm kiếm");
  const { t } = useTranslation();
  const urlParams = new URLSearchParams(window.location.search);
  const keyword = urlParams.get("keyword");
  const [test, setTest] = useState(keyword);

  const arrAds = [
    "s-l1200.webp",
    "coke-print-ad.jpg",
    "7_Up_-_You_like_it,_it_likes_you,_1948.jpg",
  ];

  const { loading, error, data, refetch } = useQuery(GET_NOVELS_PAGINATE, {
    variables: {
      page: 1,
      limit: 5,
      filter: { searchValue: test },
    },
  });

  const handlePageChange = async (newPage: number) => {
    await refetch({ page: newPage, limit: 5,  filter: { searchValue: test } });
  };

  if (error) return `Error! ${error.message}`;

  return (
    <>
      <SideBarColiseum />
      <div className="content flex-1">
        <div className="border-black-500 min-h-[500px] border-2 border-l-0 border-solid p-2">
          <Search setTest={setTest} />
          <div className="my-3 px-2 ">
            {loading ? (
              <LoadingSpiner />
            ) : (
              <>
                <span>
                  <span> Kết quả tìm kiếm :</span>
                  <span> {data?.getNovelsPaginate?.totalItems}</span>
                </span>
                {data?.getNovelsPaginate?.novels?.map((novel) => (
                  <div className="item border-t-2 border-dashed">
                    <div className="my-4 flex">
                      <img
                        src={novel.cover_picture_url || ""}
                        alt=""
                        style={{ width: "100px" }}
                      />
                      <div className="px-2 ">
                        <div className="mb-2 font-bold ">{novel.title}</div>
                        <div className=" flex">
                          <div className="min-w[80px] border-2 px-3">
                            Huy hiệu
                          </div>
                          <div className=" mx-3">{novel?.author}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <Pagination
                  totalPages={data?.getNovelsPaginate?.totalPages}
                  onPageChange={handlePageChange}
                />
              </>
            )}
          </div>
        </div>
        <Advertisement>{arrAds}</Advertisement>
      </div>
    </>
  );
}
