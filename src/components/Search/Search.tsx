import { TagNovel } from "components/Tag/TagNovel"
import React from "react";

export const Search: React.FC = () => {
  const arrTags: Array<string> = ['#XXXXXX1', '#XXXXXX2', '#XXXXXX3', '#XXXXXX4'];
  return (
    <div className="border-2 border-black-500 border-solid min-h-[188px] mt-[10px] p-2">
        <h2 className="text-center text-3xl">輪スめあ提逮しンぽず返子げ払</h2>
        <form action="" className="px-[20px] mt-[20px]">
            <div className="flex justify-between items-center">
                <input
                type="text"
                placeholder="検索..."
                className="border-2 border-gray-200 rounded-lg p-2 flex-grow"
                />
                <button className="border-2 border-yellow-500 bg-yellow-400 hover:bg-yellow-300 text-white rounded-lg px-4 py-2">
                検索
                </button>
            </div>
            <div className="py-[10px] px-[10px]">
                <div className="flex items-center">
                    <label className="mr-2">公式タグ:</label>
                    <select className="border-2 border-gray-200 rounded-lg p-2 mr-4">
                    <option>ギアスタジオ</option>
                    <option>機能</option>
                    </select>
                    {arrTags.map((tag) => (
                        <TagNovel key={tag}>{tag}</TagNovel>
                    ))}
                </div>
                <div className="flex items-center">
                    <label className="mr-2">人気タグ:</label>
                    <select className="border-2 border-gray-200 rounded-lg p-2 mr-4">
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
  )
}
