import { useTranslation } from "react-i18next";
import ButtonCommon from "@/components/button/ButtonCommon.tsx";
import NovelAvatar from "@/components/novel/NovelAvatar.tsx";
import NovelTitle from "@/components/novel/NovelTitle.tsx";
import NovelAuthor from "@/components/novel/NovelAuthor.tsx";
import { AnyObject } from "@/models/Common.ts";
import IconHearth from "@/components/icons/IconHearth.tsx";
import moment from "moment";
import { TagNovel } from "../Tag/TagNovel.tsx";
import useAuth from "@/hooks/useAuth.tsx";
import LikeButton from "../button/LikeButton.tsx";
import BookMarkButton from "../button/BookMarkButton.tsx";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";

interface NovelProps {
  novel: AnyObject;
  isFavorite?: boolean;
  type: string;
  rank: number
}

export function Novel(props: NovelProps) {
  const { user } = useAuth();
  const { novel, isFavorite, type, rank } = props;
  
  const { t } = useTranslation();
  return (
    <div className="novel-item mt-3 border-b-2 border-gray-300 py-3 ">
      <div className="novel-item-top">
        <div className="flex gap-x-4">
          <div className="novel-left">
            <div className="flex h-fit basis-[230px] gap-x-4">
              {/* <NovelStatus novelItem={novel}></NovelStatus> */}
              <div className="novel-image-wrap flex flex-col">
                <div
                  className={` relative novel-image h-[300px] w-[220px] overflow-hidden rounded-[10px] border-0 `}
                >
                  <NovelAvatar image={novel.cover_picture_url} />
                  {
                    type == "ranking" && 
                    (
                      <>
                      <div className={`icon-ranking absolute top-0 right-[-1px] h-full w-10 rounded-r-[6px] bg-color1 py-3 flex flex-col items-center`}>
                       <span className="font-bold text-3xl">
                          {rank}
                       </span>
                      </div>
                      </>
                    )
                  }
                </div>
                <div className="mt-3 flex justify-end gap-x-6">
                  <div className="flex gap-x-8 ">
                    <div>
                      <div className="vote">
                        <BookMarkButton
                          user={user}
                          novel={novel}
                        ></BookMarkButton>
                      </div>
                    </div>
                    <div className="vote">
                      <LikeButton user={user} novel={novel} />
                    </div>
                  </div>
                </div>
                {/* <NovelIconTournament type="球球球ム" /> */}
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
          <div className="novel-right flex-1 pl-4">
            <div className="mb-2 flex justify-between">
              <Link to={`/novel/${novel.novel_id}`} className="flex flex-1 ">
                <NovelTitle title={novel.title} />
              </Link>
              <span className="bg-color8 flex items-center rounded px-8">
                Badeges
              </span>
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
              </div>
            </div>
            <p className="font-xl synopsis my-2 text-justify">
              {novel.synopsis}
            </p>
          </div>
        </div>
      </div>
      <div className="novel-item-bottom my-2 border-t-2 border-dashed">
        <ul className="flex flex-wrap items-center gap-x-4 pt-2">
          {novel.tags.map((tag) => (
            <TagNovel tag={tag}></TagNovel>
          ))}
        </ul>
      </div>
      <div className="novel-item-bottom"></div>
    </div>
  );
}
