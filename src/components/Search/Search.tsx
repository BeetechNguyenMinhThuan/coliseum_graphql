import { TagNovel } from "components/Tag/TagNovel";
import { ChangeEvent, FormEvent, MouseEventHandler } from "react";

interface ISearchProps {
  filter?: {
    searchValue: string;
  };
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSearch?: (
    e: FormEvent<HTMLFormElement> | MouseEventHandler<HTMLButtonElement>,
  ) => void;
}
function Search(props: ISearchProps) {
  const { filter, handleChange, handleSearch } = props;
  const arrTags = ["#XXXXXX1", "#XXXXXX2", "#XXXXXX3", "#XXXXXX4"];

  return (
    <div className="border-black-500 mt-[10px] min-h-[188px] border-2 border-solid p-2">
      <h2 className="text-center text-3xl">輪スめあ提逮しンぽず返子げ払</h2>
      <form action="" className="mt-[20px] px-[20px]" onSubmit={handleSearch}>
        <div className="flex items-center justify-between">
          <input
            type="text"
            placeholder="検索..."
            value={filter?.searchValue}
            onChange={handleChange}
            className="flex-grow rounded-lg border-2 border-gray-200 p-2"
          />
          <button
            onClick={handleSearch}
            className="rounded-lg border-2 border-yellow-500 bg-yellow-400 px-4 py-2 text-white hover:bg-yellow-300"
          >
            検索
          </button>
        </div>
        <div className="px-[10px] py-[10px]">
          <div className="flex items-center">
            <label className="mr-2">公式タグ:</label>
            <select className="mr-4 rounded-lg border-2 border-gray-200 p-2">
              <option>ギアスタジオ</option>
              <option>機能</option>
            </select>
            {arrTags.map((tag) => (
              <TagNovel key={tag}>{tag}</TagNovel>
            ))}
          </div>
          <div className="flex items-center">
            <label className="mr-2">人気タグ:</label>
            <select className="mr-4 rounded-lg border-2 border-gray-200 p-2">
              <option>ギアスタジオ</option>
              <option>機能</option>
            </select>
            {arrTags.map((tag) => (
              <TagNovel key={tag}>{tag}</TagNovel>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
}
export default Search;
