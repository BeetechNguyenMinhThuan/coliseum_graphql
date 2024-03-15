import { useRef } from "react";
import { Pagination } from "../pagination/Pagination.tsx";
import { Novel } from "./Novel.tsx";

export function NovelList({ novels, type}) {
  const parentRef = useRef(null);
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
    <div className="" ref={parentRef}>
      {novels?.novels?.map((novel,index) => (
        <Novel rank={index+1} type={type} key={novel.novel_id} novel={novel} />
      ))}
      {/* <Pagination
        totalPages={novels?.totalPages}
        onPageChange={handlePageChange}
      /> */}
    </div>
  );
}
