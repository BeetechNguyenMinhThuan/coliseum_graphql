import React from "react";
import classNames from "@/utils/classNames.ts";

interface TagProps {
  children: React.ReactNode;
  className?: string;
}
export const TagNovel = (props: TagProps) => {
  const { children, className = "" } = props;
  return (
    <span
      className={classNames(
        "mr-2 cursor-pointer border-2 border-gray-200 bg-transparent px-4 py-1 last:mr-0 hover:bg-gray-200",
        className,
      )}
    >
      {children}
    </span>
  );
};
