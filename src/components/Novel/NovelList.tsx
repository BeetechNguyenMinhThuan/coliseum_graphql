import { useRef } from "react";
import { Pagination } from "../pagination/Pagination.tsx";
import { Novel } from "./Novel.tsx";

export function NovelList({ novels, refetch }) {  
  const parentRef = useRef(null);
  // console.log(refetch);
  
  // const handlePageChange = async (newPage: number) => {
  //   const currentElement = parentRef.current;
  //   if (currentElement) {
  //     const currentRect = currentElement.getBoundingClientRect();
  //     const offset = currentRect.top - 250;
  //     window.scrollBy({ top: offset, behavior: "smooth" });
  //   }
  //   await refetch({ page: newPage, limit: 3 });
  // };

  return (
    <div ref={parentRef}>
      {novels?.novels?.map((novel) => (
        <Novel refetch= {refetch} key={novel.novel_id} novel={novel} />
      ))}
      {/* <Pagination
        totalPages={novels?.totalPages}
        onPageChange={handlePageChange}
      /> */}
    </div>
  );
}
