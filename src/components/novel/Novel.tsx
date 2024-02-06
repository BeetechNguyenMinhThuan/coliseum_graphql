import { NovelStatus } from "./NovelStatus.tsx";
import { useTranslation } from "react-i18next";
import ButtonCommon from "@/components/button/ButtonCommon.tsx";
import NovelAvatar from "@/components/novel/NovelAvatar.tsx";
import NovelTitle from "@/components/novel/NovelTitle.tsx";
import NovelAuthor from "@/components/novel/NovelAuthor.tsx";
import { AnyObject } from "@/models/Common.ts";
import IconHearth from "@/components/icons/IconHearth.tsx";
import NovelIconTournament from "@/components/novel/NovelIconTournament.tsx";

interface NovelProps {
  novel: AnyObject;
  isFavorite?: boolean;
}

export function Novel(props: NovelProps) {
  const { novel, isFavorite } = props;
  const { t } = useTranslation();

  return (
    <div className="novel-item border-t-2 border-gray-300 py-3">
      <div className="novel-item-top">
        <div className="flex gap-x-4">
          <div className="novel-left">
            <div className="flex h-fit basis-[230px] gap-x-4">
              <NovelStatus novelItem={novel}></NovelStatus>
              <div className="novel-image-wrap flex flex-col">
                <NovelAvatar image={novel.image} />
                <div className="flex gap-x-6">
                  <div className="vote">
                    <input type="checkbox" />
                    <span className="pl-1">{novel.dislike}</span>
                  </div>
                  <div className="vote">
                    <input type="checkbox" />
                    <span className="pl-1">{novel.like}</span>
                  </div>
                </div>
                <NovelIconTournament type="球球球ム" />
              </div>
            </div>
            {isFavorite && (
              <ButtonCommon type="button" className="mt-2 w-full gap-x-1">
                <IconHearth />
                <span className="text-[16px] font-extrabold">
                  球ムマ球ム球球球ム
                </span>
              </ButtonCommon>
            )}
          </div>
          <div className="novel-right flex-1">
            <div className="flex justify-between ">
              <NovelTitle title={novel.title} />
              <div>
                <p>ウエトマエ</p>
              </div>
            </div>
            <div className="flex justify-between border-b-2 border-dashed">
              <NovelAuthor author={novel.author} />
              <div className="novel-time flex gap-x-5">
                {novel.updated_at && (
                  <div>
                    <p>ウエトマエ {novel.updated_at}</p>
                  </div>
                )}
                <div>
                  <p>ウエトマエ {novel.created_at}</p>
                </div>
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
