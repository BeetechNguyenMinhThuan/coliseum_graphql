import React, { useState } from "react";
import ButtonCommon from "@/components/button/ButtonCommon.tsx";
import { IoTriangle } from "react-icons/io5";
import { TagNovel } from "../Tag/TagNovel.tsx";
import { useQuery } from "@apollo/client";
import useAuth from "@/hooks/useAuth.tsx";
import LikeButton from "../button/LikeButton.tsx";
import BookMarkButton from "../button/BookMarkButton.tsx";
import { Pagination } from "../pagination/Pagination.tsx";

function Accordition({data, refetch}) {
  const { user } = useAuth();

  const [isOpenArray, setIsOpenArray] = useState([]);
  const handlePageChange = async (newPage: number) => {
    await refetch({ page: newPage, limit: 3 });
  };

  const toggleAccordion = (index) => {
    const newIsOpenArray = [...isOpenArray];
    newIsOpenArray[index] = !newIsOpenArray[index];
    setIsOpenArray(newIsOpenArray);
  };
  return (
    <div className="border-2 bg-color3 p-4">
      <h3 className="border-b-2 border-dashed border-gray-500 text-2xl font-bold">
        室芸
      </h3>
      {data?.getNovelsByAuthor?.novels?.map((novel, index) => (
        <div className="border-b-2 py-2">
          <div className="flex gap-x-3">
            <button
              type="button"
              onClick={() => toggleAccordion(index)}
              className="h-fit rounded-full border-none bg-white p-0.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`h-5 w-5 text-center transition-transform duration-500 ${isOpenArray[index] && "rotate-90"}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
            <div className="flex-1 ">
              <div className="flex gap-x-3">
                <span className="rounded-lg border-2  bg-color9 px-3">
                  選歳歳
                </span>
                <h3
                  onClick={() => toggleAccordion(index)}
                  className="cursor-pointer text-2xl font-bold"
                >
                  {novel.title}
                </h3>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-x-3">
                  <ButtonCommon
                    className="bg-color13 my-3 rounded-lg text-white border-0 "
                    type="button"
                  >
                    選歳1ーだ平だ平だ平
                  </ButtonCommon>
                  <span className="text-color5">選歳ーだ平だ平</span>
                </div>
                <div className="flex items-center gap-x-5">
                  <div className="flex items-center gap-x-2">
                    <span>だ平</span>
                    <span className="font-bold">9</span>
                  </div>
                  <div className="flex gap-x-2">
                    <div className="flex items-center">
                      <BookMarkButton
                        user={user}
                        novel={novel}
                      ></BookMarkButton>
                    </div>
                    <div className="flex items-center">
                      <LikeButton user={user} novel={novel}></LikeButton>
                    </div>
                  </div>
                  <ButtonCommon
                    type="button"
                    className="h-fit rounded-lg bg-color8 px-3 text-white border-0"
                  >
                    申ゅゆ選歳ゆ選歳
                  </ButtonCommon>
                </div>
              </div>
              {novel.tags && novel.tags.length > 0 && (
                <div className="novel-item-bottom my-2 border-t-2 border-dashed">
                  <div className="flex flex-wrap items-center gap-x-4 pt-2">
                    {novel.tags.map((tag) => (
                      <TagNovel className="rounded-lg px-5 py-0">
                        {tag?.tag}
                      </TagNovel>
                    ))}
                  </div>
                </div>
              )}

              <div
                className={`mt-3 grid overflow-hidden text-sm transition-all duration-500 ease-in-out ${
                  isOpenArray[index]
                    ? "grid-rows-[1fr] border-t-2 border-dashed pt-2 opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="flex gap-x-8">
                    <div className="flex basis-[185px] flex-col gap-y-2">
                      <div className="h-[222px] w-full">
                        <img
                          className="h-full w-full object-cover"
                          src={novel?.cover_picture_url}
                          alt=""
                        />
                      </div>
                      <div className="rounded-md border-2 border-gray-300 text-center text-[14px] py-1">
                       Thêm tập mới
                      </div>
                      <div className="rounded-md border-2 border-gray-300 text-center text-[14px] py-1">
                       Chỉnh sửa 
                      </div>
                      <div className="rounded-md border-2 border-gray-300 text-center text-[14px] py-1">
                        Xóa công việc
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col">
                    {novel?.episodes && (
                      novel.episodes.map((episode,index) => (
                        <div className="border-b-2 border-dashed py-2">
                        <div className="flex items-center gap-x-5">
                          <span className="rounded-lg border-2 bg-color9 px-4 py-1">
                           {episode?.is_publish ? "Đang mở" : "Đang đón"}
                          </span>
                          <h3 className="cursor-pointer text-2xl font-bold">
                            Tập {index +1}
                          </h3>
                          <h3 className="cursor-pointer text-2xl font-bold">
                            {episode?.episode_title}
                          </h3>
                        </div>
                        <div className="mt-2">
                          <ul className="flex items-center justify-end gap-x-2">
                            <li className="rounded-lg border-2 px-4 py-1">
                              Chỉnh sửa
                            </li>
                            <li className="rounded-lg border-2 px-4  py-1">Priveate</li>
                            <li className="rounded-lg border-2 px-4  py-1">Xóa</li>
                          </ul>
                        </div>
                      </div>
                      ))
                    )}
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Pagination
        totalPages={data?.getNovelsByAuthor?.totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Accordition;
