import { NovelStatus } from "./NovelStatus.tsx";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { Banner } from "../Banner";
import ButtonCommon from "@/components/button/ButtonCommon.tsx";

export function Novel({ novel }) {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <div className="novel-item border-t-2 border-gray-300 py-3">
      <div className="novel-item-top">
        <div className="flex gap-x-4">
          <div className="novel-left">
            <div className="flex h-fit basis-[230px] gap-x-4">
              <NovelStatus novelItem={novel}></NovelStatus>
              <div className="">
                <div className="novel-image-wrap flex flex-col">
                  <div className="novel-image h-[170px] w-[150px]">
                    <img
                      className="h-full w-full bg-cover object-cover object-center"
                      src={novel.image}
                      alt=""
                    />
                  </div>
                  <div className="flex justify-end gap-x-6">
                    <div className="vote">
                      <input type="checkbox" />
                      <span className="pl-1">{novel.dislike}</span>
                    </div>
                    <div className="vote">
                      <input type="checkbox" />
                      <span className="pl-1">{novel.like}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {location.pathname == "/author" && (
              <ButtonCommon className="mt-2 w-full gap-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
                <span className="text-[16px] font-extrabold">
                  球ムマ球ム球球球ム
                </span>
              </ButtonCommon>
            )}
          </div>
          <div className="novel-right flex-1">
            <div className="flex justify-between ">
              <div className="basis-9/12">
                <h3 className="text-2xl font-bold">{novel.title}</h3>
              </div>
              <div>
                <p>ウエトマエ</p>
              </div>
            </div>
            <div className="flex justify-between border-b-2 border-dashed">
              <div>
                <span>{novel.author}</span>
              </div>
              <div>
                <p>ウエトマエ {novel.created_at}</p>
              </div>
            </div>
            <p className="font-xl py-2 text-justify">{novel.description}</p>
          </div>
        </div>
      </div>
      <div className="novel-item-bottom border-t-2 border-dashed">
        <ul className="flex flex-wrap items-center gap-x-4 pt-2">
          <li className="border-2 p-1">
            <span>#XXXXXXX</span>
          </li>
          <li className="border-2 p-1">
            <span>#XXXXXXX</span>
          </li>
          <li className="border-2 p-1">
            <span>#XXXXXXX</span>
          </li>
          <li className="border-2 p-1">
            <span>#XXXXXXX</span>
          </li>
          <li className="border-2 p-1">
            <span>#XXXXXXX</span>
          </li>
          <li className="border-2 p-1">
            <span>#XXXXXXX</span>
          </li>
          <li className="border-2 p-1">
            <span>#XXXXXXX</span>
          </li>
          <li className="border-2 p-1">
            <span>#XXXXXXX</span>
          </li>
        </ul>
      </div>
      <div className="novel-item-bottom"></div>
    </div>
  );
}
