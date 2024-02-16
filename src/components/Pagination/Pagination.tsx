import ReactPaginate from "react-paginate";

interface IPaginationProps {
  totalPages: number;
  onPageChange: (selectedItem: { selected: number }) => void;
}

export function Pagination(props: IPaginationProps) {
  const { totalPages, onPageChange } = props;
  return (
    <ReactPaginate
      className="mt-4 flex justify-center gap-x-3"
      breakLabel="..."
      nextLabel="next >"
      onPageChange={onPageChange}
      pageRangeDisplayed={5}
      pageCount={totalPages}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
      activeClassName="active"
    />
  );
}
