import { GET_EPISODE } from "@/graphql-client/episode/queries";
import useAuth from "@/hooks/useAuth";
import { useQuery } from "@apollo/client";
import { useRef, useState, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";

export function ReaderNovel() {
  const user = useAuth();
  const { novel_id, episode_id } = useParams();
  const [episodeId, setEpisodeId] = useState(episode_id);

  const [checkRotation, setCheckRotation] = useState(false);
  const contentRef = useRef();
  const [he, setHe] = useState();
  const [wi, setWi] = useState();

  useLayoutEffect(() => {
    const rect = contentRef.current.getBoundingClientRect();
    setHe(rect.width);
    setWi(rect.height);
  }, [checkRotation]);

  const rotateHorizontal = () => {
    setCheckRotation(!checkRotation);
  };

  const { loading, data, error, refetch } = useQuery(GET_EPISODE, {
    variables: {
      novelId: parseInt(novel_id),
      episodeId: episode_id ? parseInt(episode_id) : null,
      limit: 1,
    },
  });

  const handlePrevChapter = async () => {
    await refetch({
      novelId:  parseInt(novel_id),
      episodeId: null,
      page:  data?.episodes?.currentPage ? data?.episodes?.currentPage - 1 : null,
      limit: 1,
    });
  };

  const handleNextChapter = () => {
    refetch({
      novelId: parseInt(novel_id),
      episodeId: null,
      page: data?.episodes?.currentPage ? data?.episodes?.currentPage + 1 : null,
      limit: 1,
    });
  };

  console.log(data);

  return (
    <div className="flex h-[700px] w-full flex-col ">
      <div className="flex gap-4">
        <button className="w-[130px] border-2 px-1" onClick={rotateHorizontal}>
          {checkRotation ? "Xoay Dọc" : "Xoay Ngang"}
        </button>
        {user.isAuth && (
          <>
            <button className="w-[100px] border-2 px-1">LIKE</button>
            <button className="w-[130px] border-2 px-1">Bookmark</button>
          </>
        )}
        <button className="w-[130px] border-2 px-1">栞をはさむ</button>
      </div>
      <div>NovelTitle</div>
      <div ref={contentRef} className="content relative h-full w-full ">
        <div
          className={`absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col border-2  p-4 ${
            checkRotation ? "rotate-90" : "h-full w-full"
          }`}
          style={checkRotation ? { width: `${wi}px`, height: `${he}px` } : {}}
        >
          <div>
            EPISODE TITLE{" "}
            {data && data?.episodes?.episodes?.[0]["episode_title"]}
          </div>
          <div
            className={` flex-1 ${checkRotation ? "rotate-0 overflow-y-auto" : ""}`}
          >
            EPISODE ID : {data && data?.episodes?.episodes?.[0]["episode_id"]}
          </div>
        </div>
      </div>
      <div className="my-2 flex justify-between">
        <button
          disabled={data?.episodes?.currentPage === 1 ? true : false}
          className="rounded border border-blue-500 bg-transparent px-4 py-2 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white"
          onClick={handlePrevChapter}
        >
          Giảm
        </button>
        <button
          disabled={
            data?.episodes?.currentPage === data?.episodes?.totalPages
              ? true
              : false
          }
          className="  rounded border border-blue-500 bg-transparent px-4 py-2 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white"
          onClick={handleNextChapter}
        >
          Tăng
        </button>
      </div>
    </div>
  );
}
