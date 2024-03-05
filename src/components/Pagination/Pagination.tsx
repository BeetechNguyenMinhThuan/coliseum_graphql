import ReactPaginate from "react-paginate";

interface IPaginationProps {
  currentPage?:number;
  totalPages: number | undefined | null;
  onPageChange: (newPage: number) => void;
}

export function Pagination(props: IPaginationProps) {
  const { totalPages, onPageChange, currentPage } = props;

  const handlePageClick = (event: any) => {
    onPageChange(event.selected + 1);
  };

  return (
    <ReactPaginate
      className="mt-4 flex justify-center gap-x-3"
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={totalPages ?? 0}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
      activeClassName="text-primary" 
      initialPage={currentPage}
    />
  );
}
