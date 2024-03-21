import { GET_OFFICIAL_TAGS } from "@/graphql-client/tags/queries";
import { useQuery } from "@apollo/client";
import { TagNovel } from "components/Tag/TagNovel";
import React, { useEffect, useLayoutEffect, useState } from "react";
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
  refetchSearch?: (keyword: string, tag: string) => void;
}

export const Search: React.FC = (props: ISearchProps) => {
  const { setParams, refetchSearch } = props;
  const navigate = useNavigate();
  const { data } = useQuery(GET_OFFICIAL_TAGS);

  const url = window.location.href;
  const newUrl = url.split("?")[1];

  function splitStringToObject(urlParamsString: string) {
    return urlParamsString.split("&").reduce((acc, pair) => {
      const [key, value] = pair.split("=");
      acc[key] = value;
      return acc;
    }, {});
  }

  let resultObject = {};
  if (newUrl) {
    resultObject = splitStringToObject(newUrl);
  }

  const [filter, setFilter] = useState({
    searchValue: resultObject["keyword"],
    tagName: resultObject["tagName"],
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter({
      ...filter,
      searchValue: event.target.value,
      tagName: filter.tagName,
    });
  };

  const handleSearch = (
    e: FormEvent<HTMLFormElement> | MouseEventHandler<HTMLButtonElement>,
  ) => {
    if ("preventDefault" in e) {
      e.preventDefault();
    }
    if (setParams) {
      setParams({
        keyword: filter.searchValue,
        tagName: filter.tagName,
      });
    }
    navigate(
      `/search-novel?keyword=${filter?.searchValue ?? ""}&tagName=${filter.tagName ?? ""}`,
    );
  };

  const handleTag = async (tag) => {
    setFilter({ ...filter, tagName: tag?.tag });
    if (refetchSearch) {
      await refetchSearch(filter.searchValue, tag?.tag);
    }
  };

  const resetForm = async () => {
    setFilter({
      searchValue: "",
      tagName: "",
    });
    if (refetchSearch) {
      await refetchSearch("", "");
      navigate(`/search-novel?keyword=&tagName=`);
    }
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
            className=" flex w-[150px] justify-around rounded-r-[10px] border-2 border-gray-200 bg-color2 px-4 py-2 text-black hover:bg-yellow-300"
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
            Tìm kiếm
          </button>
        </div>
        <div className="py-[10px]">
          <div className="flex items-center gap-x-4">
            <label className="mr-2">公式タグ:</label>
            {data?.getAllOfficialTags?.map((tag) => (
              <div className="" onClick={() => handleTag(tag)}>
                <TagNovel tag={tag}></TagNovel>
              </div>
            ))}
          </div>
        </div>
      </form>
      <button
        onClick={resetForm}
        className="rounded-[8px] border-2 p-1 px-2 hover:bg-color1"
      >
        Làm mới
      </button>
    </div>
  );
};
export default Search;
