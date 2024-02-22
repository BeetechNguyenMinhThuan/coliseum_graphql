import { Pagination } from "../pagination/Pagination.tsx";
import { Novel } from "./Novel.tsx";

export function NovelList({ novels, refetch }) {
  const handlePageChange = async (newPage: number) => {
    // setCurrentPage(newPage);
    await refetch({ page: newPage, limit: 100 });
  };
  return (
    <div>
      {novels?.getNovelsPaginate?.novels.map((novel) => (
        <Novel novel={novel} />
      ))}
       <Pagination
        totalPages={novels?.getNovelsPaginate?.totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
