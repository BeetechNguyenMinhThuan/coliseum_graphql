import React, { useState } from "react";
import ButtonCommon from "@/components/button/ButtonCommon.tsx";
import { IoTriangle } from "react-icons/io5";
import { TagNovel } from "../Tag/TagNovel.tsx";
import { useQuery } from "@apollo/client";
import useAuth from "@/hooks/useAuth.tsx";
import { GET_DETAIL_USER } from "@/graphql-client/user/queries.ts";
import LikeButton from "../button/LikeButton.tsx";
import BookMarkButton from "../button/BookMarkButton.tsx";

function Accordition() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  
  const [isOpenArray, setIsOpenArray] = useState([]);

  const { loading, error, data } = useQuery(GET_DETAIL_USER, {
    variables: { userId: user.id },
  });
  if (loading) return "Đang load";
  if (error) return "Có lỗi xảy ra";

  const toggleAccordion = (index) => {
    const newIsOpenArray = [...isOpenArray];
    newIsOpenArray[index] = !newIsOpenArray[index];
    setIsOpenArray(newIsOpenArray);
  };
  return (
    <>
      {data?.user?.novels.map((novel, index) => (
        <div className="border-b-2 py-2">
          <div className="flex">
            <ButtonCommon
              onClick={() => toggleAccordion(index)}
              className="border-none "
            >
              <IoTriangle  className={`transition-transform duration-500 ${isOpenArray[index] ? 'rotate-180' : 'rotate-90'}`}  />
            </ButtonCommon>
            <div className="flex-1 ">
              <div className="flex gap-x-2">
                <span className="border-2 px-2">選歳ー</span>
                <h3
                  onClick={() => toggleAccordion(index)}
                  className="font-2xl cursor-pointer font-bold"
                >
                {novel.title}
                </h3>
              </div>
              <div className="flex justify-between">
                <div className="">
                  <span>選歳ーだ平</span>
                  <span>選歳ーだ平だ平</span>
                </div>
                <div className="flex gap-x-5">
                  <div className="flex items-center gap-x-2">
                    <span>だ平</span>
                    <span className="flex h-[30px] w-[30px] items-center justify-center border-2 p-1">
                      9
                    </span>
                  </div>
                  <div className="flex gap-x-2">
                    <div className="flex items-center">
                    <LikeButton user={user} novel={novel}></LikeButton>
                    </div>
                    <div className="flex items-center">
                    <BookMarkButton user={user} novel={novel}></BookMarkButton>
                    </div>
                  </div>
                  <button className="border-2 px-3">申ゅゆ選歳ゆ選歳</button>
                </div>
              </div>
              {/* <div className="mt-3 flex justify-between">
                {novel?.novel_tag?.map(((tag,index) => (
                    <TagNovel>{tag?.tag}</TagNovel>
                ))

                )}
              </div> */}
              <div
                className={`mt-3 grid overflow-hidden text-sm transition-all duration-500 ease-in-out ${
                  isOpenArray[index]
                    ? "grid-rows-[1fr] border-t-2 border-dashed pt-2 opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="flex gap-x-12">
                    <div className="flex basis-[150px] flex-col gap-y-2">
                      <div className="h-[200px] w-full">
                        <img
                          className="h-full w-full object-cover"
                          src="/assets/thumbnail-la-gi.png"
                          alt=""
                        />
                      </div>
                      <div className="border-2 text-center">ゅゆ選歳ーだ</div>
                      <div className="border-2 text-center">ゅゆ選歳ーだ</div>
                      <div className="border-2 text-center">ゅゆ選歳ーだ</div>
                    </div>
                    <div className="flex flex-1 flex-col">
                      <div className="border-b-2 py-2">
                        <div className="flex items-center gap-x-2 border-b-2 border-dashed">
                          <span>選歳ー</span>
                          <h3 className="text-2xl">
                            ゅゆ選歳ーだゅゆ選歳ーだゅゆ選歳ーだ
                          </h3>
                        </div>
                        <div className="mt-2">
                          <ul className="flex items-center justify-end gap-x-2">
                            <li className="border-2 px-4">ゆ選歳</li>
                            <li className="border-2 px-4">ゆ選歳</li>
                            <li className="border-2 px-4">ゆ選歳</li>
                          </ul>
                        </div>
                      </div>
                      <div className="border-b-2 py-2">
                        <div className="flex items-center gap-x-2 border-b-2 border-dashed">
                          <span>選歳ー</span>
                          <h3 className="text-2xl">
                            ゅゆ選歳ーだゅゆ選歳ーだゅゆ選歳ーだ
                          </h3>
                        </div>
                        <div className="mt-2">
                          <ul className="flex items-center justify-end gap-x-2">
                            <li className="border-2 px-4">ゆ選歳</li>
                            <li className="border-2 px-4">ゆ選歳</li>
                            <li className="border-2 px-4">ゆ選歳</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Accordition;
