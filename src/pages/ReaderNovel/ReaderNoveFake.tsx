import { GET_EPISODE } from "@/graphql-client/episode/queries";
import useAuth from "@/hooks/useAuth";
import { useQuery } from "@apollo/client";
import { useRef, useState, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";

export function ReaderNovelFake() {
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

  const handlePrevChapter = (id) => {
    setTypeEpisode("2");
    setEpisodeId(id);
  };

  const handleNextChapter = (id) => {
    setTypeEpisode("1");
    setEpisodeId(id);
  };

  const [typeEpisode, setTypeEpisode] = useState("");
  const { loading, data, error } = useQuery(GET_EPISODE, {
    variables: {
      novelId: parseInt(novel_id),
      episodeId: parseInt(episodeId),
      type: typeEpisode,
    },
  });
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
          <div>EPISODE TITLE  {data && data?.episode?.episode?.episode_title}</div>
          <div
            className={` flex-1 ${checkRotation ? "rotate-0 overflow-y-auto" : ""}`}
          >
            EPISODE ID : {data && data?.episode?.episode?.episode_id}
          </div>
        </div>
      </div>
      <div className="flex justify-between my-2">
        <button
          disabled={data?.episode?.episode?.order === 1 ? true : false}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={() => handlePrevChapter(data?.episode?.episode?.episode_id)}
        >
          Giảm
        </button>
        <button
          disabled={
            data?.episode?.episode?.order === data?.episode?.totalEpisodes
              ? true
              : false
          }
          className="  bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={() => handleNextChapter(data?.episode?.episode?.episode_id)}
        >
          Tăng
        </button>
      </div>
    </div>
  );
}

// import useAuth from "@/hooks/useAuth";
// import { useState } from "react";

// export function ReaderNovel() {
//   const user = useAuth();
//   const [checkRotation, setCheckRotation] = useState(false);
//   const rotateHorizontal = () => {
//     setCheckRotation(!checkRotation);
//   };

//   const handleScroll = (event) => {
//     if (event.deltaY > 0) {
//       console.log("Đã lăn chuột xuống");
//       // Xử lý lăn chuột xuống ở đây
//     } else if (event.deltaY < 0) {
//       console.log("Đã lăn chuột lên");
//       // Xử lý lăn chuột lên ở đây
//     }
//   };

//   return (
//     <div className="flex h-[700px] w-full flex-col ">
//       <div className="flex gap-4">
//         <button className="w-[150px] border-2 px-1" onClick={rotateHorizontal}>
//           {checkRotation ? "Xoay Dọc" : "Xoay Ngang"}
//         </button>
//         {user.isAuth && (
//           <>
//             <button className="border-2 px-1">LIKE</button>
//             <button className="border-2 px-1">Bookmark</button>
//           </>
//         )}
//         <button className="border-2 px-1">栞をはさむ</button>
//       </div>
//       <div>NovelTitle</div>
//       <div
//         className="content relative h-full w-full "
//         onWheel={checkRotation ? (e) => handleScroll(e) : null}
//       >
//         <div
//           className={`absolute  flex h-full w-full    border-2 p-4 ${
//             checkRotation ? "flex-row-reverse" : " flex-col"
//           }`}
//         >
//           <div
//             className={`${checkRotation && "flex items-center justify-center"} `}
//           >
//             <span
//               className={`block ${checkRotation && "rotate-90 transform"} `}
//             >
//               EPISODE TITLE
//             </span>
//           </div>
//           <div className="flex-1"> EPISODE URL</div>
//         </div>
//       </div>
//     </div>
//   );
// }
