import { useTranslation } from "react-i18next";
import ButtonCommon from "@/components/button/ButtonCommon.tsx";
import NovelAvatar from "@/components/novel/NovelAvatar.tsx";
import NovelTitle from "@/components/novel/NovelTitle.tsx";
import NovelAuthor from "@/components/novel/NovelAuthor.tsx";
import { AnyObject } from "@/models/Common.ts";
import IconHearth from "@/components/icons/IconHearth.tsx";
import NovelIconTournament from "@/components/novel/NovelIconTournament.tsx";
import moment from "moment";
import { TagNovel } from "../Tag/TagNovel.tsx";
import useAuth from "@/hooks/useAuth.tsx";

import LikeButton from "../button/LikeButton.tsx";
import BookMarkButton from "../button/BookMarkButton.tsx";

interface NovelProps {
  novel: AnyObject;
  isFavorite?: boolean;
}

export function Novel(props: NovelProps) {
  const { user } = useAuth();
  const { novel, isFavorite } = props;
  const { t } = useTranslation();

  return (
    <div className="novel-item border-t-2 border-gray-300 py-3">
      <div className="novel-item-top">
        <div className="flex gap-x-4">
          <div className="novel-left">
            <div className="flex h-fit basis-[230px] gap-x-4">
              {/* <NovelStatus novelItem={novel}></NovelStatus> */}
              <div className="novel-image-wrap flex flex-col">
                <NovelAvatar image={novel.cover_picture_url} />
                <div className="flex gap-x-6">
                  <div className="vote">
                    {/* <input
                      type="checkbox"
                      checked={checkLike}
                      onChange={handleLikeChange}
                    /> */}
                    {/* <span className="pl-1">{novel.total_likes}</span> */}
                    <LikeButton user={user} novel={novel} />
                  </div>
                  <div className="vote">
                    <BookMarkButton user={user} novel={novel}>
                      {" "}
                    </BookMarkButton>
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
              <NovelAuthor author={novel.user ?? ""} />
              <div className="novel-time flex gap-x-5">
                {novel.updated_at && (
                  <div>
                    <p>
                      ウエトマエ {moment(novel.created_at).format("DD-MM-Y")}
                    </p>
                  </div>
                )}
                <div>
                  <p>ウエトマエ {moment(novel.updated_at).format("DD-MM-Y")}</p>
                </div>
              </div>
            </div>
            <p className="font-xl py-2 text-justify">{novel.synopsis}</p>
          </div>
        </div>
      </div>
      <div className="novel-item-bottom my-2 border-t-2 border-dashed">
        <ul className="flex flex-wrap items-center gap-x-4 pt-2">
          {novel.novel_tag.map((tag) => (
            <TagNovel>
              <li>{tag.tag}</li>
            </TagNovel>
          ))}
        </ul>
      </div>
      <div className="novel-item-bottom"></div>
    </div>
  );
}
