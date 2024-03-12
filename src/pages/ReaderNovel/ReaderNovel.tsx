import useAuth from "@/hooks/useAuth";
import { useRef, useState, useLayoutEffect } from "react";

export function ReaderNovel() {
  const user = useAuth();
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

  return (
    <div className="flex h-[700px] w-full flex-col ">
      <div className="flex gap-4">
        <button className="border-2 px-1" onClick={rotateHorizontal}>
          Xoay Ngang/Dọc
        </button>
        {user.isAuth && (
          <>
            <button className="border-2 px-1">LIKE</button>
            <button className="border-2 px-1">Bookmark</button>
          </>
        )}
        <button className="border-2 px-1">栞をはさむ</button>
      </div>
      <div>NovelTitle</div>
      <div ref={contentRef} className="content relative h-full w-full ">
        <div
          className={`absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col border-2  p-4 ${
            checkRotation ? "rotate-90" : "h-full w-full"
          }`}
          style={checkRotation ? { width: `${wi}px`, height: `${he}px` } : {}}
        >
          <div>EPISODE TITLE</div>
          <div  className={` ${checkRotation ? "rotate-0" : ""}`}>EPISODE URL</div>
        </div>
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
