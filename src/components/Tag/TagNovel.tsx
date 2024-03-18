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
        "mr-2 cursor-pointer border-[1px] border-color1 bg-transparent px-4 last:mr-0 hover:bg-color1 rounded-[8px] ",
        className,
      )}
    >
      {children}
    </span>
  );
};
