import { LoadingSpiner } from "@/components/Loading/LoadingSpiner";
import { SidebarHome } from "@/components/SideBar/SideBarHome";
import { TagNovel } from "@/components/Tag/TagNovel";
// import BookMarkButton from "@/components/button/BookMarkButton";
// import ButtonCommon from "@/components/button/ButtonCommon";
// import LikeButton from "@/components/button/LikeButton";
// import IconHearth from "@/components/icons/IconHearth";
import NovelAuthor from "@/components/novel/NovelAuthor";
import NovelAvatar from "@/components/novel/NovelAvatar";
import NovelTitle from "@/components/novel/NovelTitle";
import { GET_DETAIL_NOVEL } from "@/graphql-client/novel/queries";
import useAuth from "@/hooks/useAuth";
import { setDefaultTitle } from "@/utils/helper";
import { useLazyQuery, useQuery } from "@apollo/client";
import moment from "moment";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
const tabs = [
  "hot",
  "daily",
  "weekly",
  "monthly",
  "quarterly",
  "yearly",
  "cumulative",
];

export default function NovelDetail() {
  setDefaultTitle("Trang cá nhân");
  const user = useAuth();
  const { novelId } = useParams();
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [conditionResult, setConditionResult] = useState(null);

  const [novelDetail, { loading, error, data }] =
    useLazyQuery(GET_DETAIL_NOVEL);
  useEffect(() => {
    novelDetail({
      variables: { novelId: parseInt(novelId) },
    });
  }, [novelId, novelDetail]);

  useEffect(() => {
    if (user && data) {
      const isOwner = user.userId == data?.novel?.user.user_id;
      setConditionResult(isOwner ? 1 : user.isAuth ? 2 : null);
    }
  }, [user, data, activeTab]);

  if (error) return "Có lỗi xảy ra";

  const handleRanking = (tab) => {
    setActiveTab(tab);
    novelDetail({
      variables: { novelId: parseInt(novelId), type: tab },
    });
  };
  const novel = data?.novel ?? null;

  return (
    <>
      {loading ? (
       <div className="content flex-1">
          <LoadingSpiner/>
       </div>
      ) : (
        <>
          {novel && (
            <>
              <SidebarHome />
              <div className="content flex-1">
                {conditionResult == 1 && (
                  <div className="my-3 ">
                    <NavLink className="border-2 p-2" to="/">
                      Sửa tác phẩm
                    </NavLink>
                  </div>
                )}

                <div className="novel-item border-t-2 border-gray-300 py-3">
                  <div className="novel-item-top">
                    <div className="flex gap-x-4">
                      <div className="flex flex-col justify-between">
                        <div className="flex-1">
                          {activeTab ? novel?.rank[activeTab] : "Icon1"}
                        </div>
                        <div className="flex-1">Icon2</div>
                      </div>
                      <div className="novel-left">
                        <div className="flex h-fit basis-[230px] gap-x-4">
                          {/* <NovelStatus novelItem={novel}></NovelStatus> */}
                          <div className="novel-image-wrap flex flex-col">
                            <NovelAvatar image={novel.cover_picture_url} />

                            {/* <NovelIconTournament type="球球球ム" /> */}
                          </div>
                        </div>
                      </div>
                      <div className="novel-right flex-1">
                        <NavLink
                          to={`/novel/${novel.novel_id}`}
                          className="flex justify-center "
                        >
                          <NovelTitle title={novel.title} />
                        </NavLink>
                        <div className="flex justify-between border-b-2 border-dashed">
                          <NovelAuthor author={novel.user ?? ""} />
                        </div>
                        <div className="flex flex-col gap-4 py-3">
                          <div className="flex ">
                            <div className="flex-1">EpisodeCount</div>
                            <div className="flex-1">
                              {novel?.episodes.length}
                            </div>
                          </div>
                          <div className="flex ">
                            <div className="flex-1">WordCount</div>
                            <div className="flex-1">100</div>
                          </div>
                          {conditionResult && (
                            <>
                              <div className="flex ">
                                <div className="flex-1">Comment</div>
                                <div className="flex-1">100</div>
                              </div>
                              <div className="flex ">
                                <div className="flex-1">TotalLike</div>
                                <div className="flex-1">{novel.likes}</div>
                              </div>
                              <div className="flex ">
                                <div className="flex-1">TotalBookMarks</div>
                                <div className="flex-1">{novel.bookmarks}</div>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    <div>
                      <ul className="my-2 flex justify-between">
                        {tabs.map((tab, index) => (
                          <li
                            key={index}
                            className={`cursor-pointer border-2 px-7 hover:bg-gray-200 ${activeTab === tab ? "bg-gray-200" : ""}`}
                            onClick={() => handleRanking(tab)}
                          >
                            <span>{tab}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="novel-item-bottom my-2 border-t-2 border-dashed">
                    <ul className="flex flex-wrap items-center gap-x-4 pt-2">
                      {novel?.tags.map((tag) => (
                        <TagNovel>
                          <li>{tag.tag}</li>
                        </TagNovel>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <ul className="flex flex-wrap items-center gap-x-4 pt-2">
                      {novel?.badges.map((badges, index) => (
                        <li
                          className="mr-2 cursor-pointer border-2 border-gray-200 bg-transparent px-4 py-1 last:mr-0 hover:bg-gray-200"
                          key={index}
                        >
                          {" "}
                          {badges?.badges_name}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="my-3">EVENET_1_URRL</div>
                  <div>
                    <label htmlFor="">Tóm tắt</label>
                    <p>{novel.synopsis}</p>
                  </div>

                  <div className="my-3">
                    <div className="flex gap-6">
                      <label className="text-lg font-bold " htmlFor="">
                        エピソード (Tập phim)
                      </label>
                      {conditionResult == 1 && (
                        <>
                          <NavLink className="text-lg font-bold " to="/">
                            エピソードを追加する(Thêm tập)
                          </NavLink>
                          <NavLink className="text-lg font-bold " to="/">
                            章を管理する( Quản lí chương)
                          </NavLink>
                        </>
                      )}
                    </div>
                    <div className="py-4">
                      {novel.episodes ? (
                        <>
                          {novel.episodes.map((episode, index) => (
                            <div className="mb-4 flex gap-28 border-b-2">
                              <div className="flex-1">{index + 1}</div>
                              <div className="flex-1">
                                {episode?.episode_title}
                              </div>
                              <div className="flex-1">
                                {episode?.first_novel_publish_at >
                                episode?.updated_at
                                  ? moment(
                                      episode?.first_novel_publish_at,
                                    ).format("Y-MM-DD HH:MM:ss")
                                  : moment(episode?.updated_at).format(
                                      "Y-MM-DD HH:MM:ss",
                                    )}
                              </div>
                              {conditionResult == 1 && (
                                <>
                                  <NavLink className="flex-1 " to="/">
                                    エピソ
                                  </NavLink>
                                </>
                              )}
                            </div>
                          ))}
                        </>
                      ) : (
                        " Không có tập nào"
                      )}
                    </div>
                  </div>
                  <div className="novel-item-bottom"></div>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}
