import { GET_OFFICIAL_TAGS } from "@/graphql-client/tags/queries";
import { useQuery } from "@apollo/client";
import { TagNovel } from "components/Tag/TagNovel";
import React, { useState } from "react";
import { ChangeEvent, FormEvent, MouseEventHandler } from "react";
import { useNavigate } from "react-router";

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

  if (loading) return "Đang load";
  if (error) return "có lỗi";

  return (
    <div className="border-black-500 mt-[10px] min-h-[188px] border-2 border-solid p-2">
      <h2 className="text-center text-3xl">輪スめあ提逮しンぽず返子げ払</h2>
      <form action="" className="mt-[20px] px-[20px]">
        <div className="flex items-center justify-between">
          <input
            type="text"
            placeholder="検索..."
            value={filter?.searchValue ?? ""}
            onChange={handleChange}
            className="flex-grow rounded-lg border-2 border-gray-200 p-2"
          />
          <button
            onClick={(e) => handleSearch(e)}
            className="rounded-lg border-2 border-yellow-500 bg-yellow-400 px-4 py-2 text-white hover:bg-yellow-300"
          >
            検索
          </button>
        </div>
        <div className="px-[10px] py-[10px]">
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
