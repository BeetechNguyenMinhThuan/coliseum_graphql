import React, { useState } from "react";
import Button from "../Button/Button.tsx";
import { IoTriangle } from "react-icons/io5";
import { TagNovel } from "../Tag/TagNovel.tsx";

function Accordition() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b-2 py-2">
      <div className="flex">
        <Button onClick={() => setIsOpen(!isOpen)} className="border-none ">
          <IoTriangle className={isOpen ? "rotate-180" : "rotate-90"} />
        </Button>
        <div className="flex-1">
          <div className="flex gap-x-2">
            <span className="border-2 px-2">選歳ー</span>
            <h3
              onClick={() => setIsOpen(!isOpen)}
              className="font-2xl cursor-pointer font-bold"
            >
              選歳ーだ平申ゅゆ選歳ーだ平申ゅゆ
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
                  <input
                    id="disabled-checked-checkbox"
                    type="checkbox"
                    value=""
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                  />
                  <label
                    htmlFor="disabled-checked-checkbox"
                    className="ms-1 text-xl  font-medium text-gray-400 dark:text-gray-500"
                  >
                    0
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="disabled-checked-checkbox"
                    type="checkbox"
                    value=""
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                  />
                  <label
                    htmlFor="disabled-checked-checkbox"
                    className="ms-1 text-xl  font-medium text-gray-400 dark:text-gray-500"
                  >
                    0
                  </label>
                </div>
              </div>
              <button className="border-2 px-3">申ゅゆ選歳ゆ選歳</button>
            </div>
          </div>
          <div className="mt-3 flex justify-between">
            <TagNovel>#XXXXXXXXX</TagNovel>
            <TagNovel>#XXXXXXXXX</TagNovel>
            <TagNovel>#XXXXXXXXX</TagNovel>
            <TagNovel>#XXXXXXXXX</TagNovel>
            <TagNovel>#XXXXXXXXX</TagNovel>
            <TagNovel>#XXXXXXXXX</TagNovel>
            <TagNovel>#XXXXXXXXX</TagNovel>
            <TagNovel>#XXXXXXXXX</TagNovel>
          </div>
          <div
            className={`mt-3 grid overflow-hidden text-sm transition-all duration-300 ease-in-out ${
              isOpen
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
  );
}

export default Accordition;
