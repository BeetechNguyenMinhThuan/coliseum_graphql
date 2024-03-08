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

interface RefetchFunction {
  (variables?: any): void; // Định nghĩa kiểu dữ liệu của hàm refetch ở đây
}
interface NovelProps {
  novel: AnyObject;
  isFavorite?: boolean;
  refetch: RefetchFunction;
}

export function Novel(props: NovelProps) {
  const { user } = useAuth();
  const { novel, isFavorite, refetch } = props;
  const { t } = useTranslation();
  return (
    <div className="novel-item border-t-2 border-gray-300 py-3">
      <div className="novel-item-top">
        <div className="flex gap-x-4">
          <div className="flex flex-col justify-between">
            <div className="flex-1">Icon1</div>
            <div className="flex-1">Icon2</div>
            <div className="flex-1">Bageds</div>
          </div>
          <div className="novel-left">
            <div className="flex h-fit basis-[230px] gap-x-4">
              {/* <NovelStatus novelItem={novel}></NovelStatus> */}
              <div className="novel-image-wrap flex flex-col">
                <NovelAvatar image={novel.cover_picture_url} />
                <div className="flex gap-x-6">
                  <div>
                    <div className="vote">
                      <LikeButton user={user} novel={novel} refetch={refetch} />
                    </div>
                  </div>
                  <div>
                    <div className="vote">
                      <BookMarkButton
                        refetch={refetch}
                        user={user}
                        novel={novel}
                      ></BookMarkButton>
                    </div>
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1}
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                        />
                      </svg>
                      {novel.comments}
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
          <div className="novel-right flex-1">
            <Link
              to={`/novel/${novel.novel_id}`}
              className="flex justify-center "
            >
              <NovelTitle title={novel.title} />
            </Link>
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
            <p className="font-xl synopsis my-2 text-justify">
              {novel.synopsis}
            </p>
          </div>
        </div>
      </div>
      <div className="novel-item-bottom my-2 border-t-2 border-dashed">
        <ul className="flex flex-wrap items-center gap-x-4 pt-2">
          {novel.tags.map((tag) => (
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
