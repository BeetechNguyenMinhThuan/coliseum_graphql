import { GET_OFFICIAL_TAGS } from "@/graphql-client/tags/queries";
import { useQuery } from "@apollo/client";
import { TagNovel } from "components/Tag/TagNovel";
import React, { useState } from "react";
import { ChangeEvent, FormEvent, MouseEventHandler } from "react";
import { useNavigate } from "react-router";
import { LoadingSpiner } from "../Loading/LoadingSpiner";

interface ISearchProps {
  filter?: {
    searchValue: string;
  };
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSearch?: (
    e: FormEvent<HTMLFormElement> | MouseEventHandler<HTMLButtonElement>,
  ) => void;
  setTest?: (value: string) => void;
}

export const Search: React.FC = (props: ISearchProps) => {
  const { setTest } = props;
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_OFFICIAL_TAGS);
  const urlParams = new URLSearchParams(window.location.search);

  const keyword = urlParams.get("keyword");
  const [filter, setFilter] = useState({
    searchValue: keyword,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, searchValue: event.target.value });
  };

  const handleSearch = (
    e: FormEvent<HTMLFormElement> | MouseEventHandler<HTMLButtonElement>,
  ) => {
    if ("preventDefault" in e) {
      e.preventDefault();
    }
    if (setTest) {
      setTest(filter?.searchValue ?? "");
    }
    navigate(`/search-novel?keyword=${filter?.searchValue ?? ""}`);
  };

  return (
    <div className="border-black-500 p-4 ">
      <span className="title text-xl font-bold">作品を探す</span>
      <form action="" className="mt-[10px] ">
        <div className="flex items-center justify-between ">
          <input
            type="text"
            placeholder="作者名、更新日、ジャンル、タグ、作品名"
            value={filter?.searchValue ?? ""}
            onChange={handleChange}
            className="flex-grow  rounded-l-[10px] border-2 border-r-0 border-gray-200 p-2 outline-none"
          />
          <button
            onClick={(e) => handleSearch(e)}
            className=" bg-color2 border-2 border-gray-200 px-4 py-2 text-black hover:bg-yellow-300 w-[150px] flex justify-around rounded-r-[10px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#FDFFAB"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            検索
          </button>
        </div>
        <div className="py-[10px]">
          <div className="flex items-center">
            <label className="mr-2">公式タグ:</label>
            {data?.getAllOfficialTags?.map((tag) => (
              <TagNovel key={tag?.tag_id}>{tag?.tag}</TagNovel>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};
export default Search;
