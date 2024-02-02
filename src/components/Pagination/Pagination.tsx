import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

interface IPaginationProps {
  totalPages: number;
  onPageChange: (currentPage: number) => void;
}

export function CircularPagination({
  totalPages,
  onPageChange,
}: IPaginationProps) {
  const [active, setActive] = useState(1);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const getItemProps = (page: number) =>
    ({
      variant: active === page ? "filled" : "text",
      color: "gray",
      onClick: () => {
        setActive(page);
      },
      className: "rounded-full",
    }) as any;

  const next = () => {
    if (active === totalPages) return;
    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
  };

  useEffect(() => {
    onPageChange(active);
  }, [active]);

  return (
    <div className="mt-10 flex w-full items-center justify-center gap-4">
      <Button
        variant="text"
        className="flex items-center gap-2 rounded-full"
        onClick={prev}
        disabled={active === 1}
        placeholder={undefined}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-2">
        {pages.map((page) => (
          <IconButton {...getItemProps(page)}>{page}</IconButton>
        ))}
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2 rounded-full"
        onClick={next}
        disabled={active === 5}
        placeholder={undefined}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
}
