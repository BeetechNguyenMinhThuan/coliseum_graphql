import { Pagination } from "../pagination/Pagination.tsx";
import { Novel } from "./Novel.tsx";

export function NovelList({ novels, refetch }) {
  const handlePageChange = async (newPage: number) => {
    await refetch({ page: newPage, limit: 3 });
  };
  return (
    <div>
      {novels?.novels?.map((novel) => (
        <Novel key={novel.novel_id} novel={novel} />
      ))} 
       <Pagination
        totalPages={novels?.totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
