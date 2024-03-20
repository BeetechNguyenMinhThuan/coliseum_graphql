import React from "react";
import classNames from "@/utils/classNames.ts";
import { NavLink, useNavigate } from "react-router-dom";

interface TagType {
  tag_id: string;
  tag_ulid?: string | null | undefined;
  tag?: string | null | undefined;
  start_at?: any;
  finish_at?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}
interface TagProps {
  tag: TagType | null;
  className?: string;
}
export const TagNovel = (props: TagProps) => {
  const { tag, className = "" } = props;
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  const keyword = urlParams.get("keyword");
  const handleFilter = () => {
    const url =  `/search-novel?keyword=${keyword ?? ""}&tagName=${tag?.tag ?? ""}`
    navigate(url)
    // navigate(
    //   `/search-novel?keyword=${keyword ?? ""}&tagName=${tag?.tag ?? ""}`,
    // );
  };
  return (
    <span
      onClick={handleFilter}
      className={classNames(
        "mr-2 cursor-pointer rounded-[8px] border-[1px] border-color1 bg-transparent px-4 last:mr-0 hover:bg-color1 ",
        className,
      )}
    >
      {tag?.tag}
    </span>
  );
};
