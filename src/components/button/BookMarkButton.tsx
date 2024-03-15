import { TOGGLE_BOOKMARKS_NOVEL } from "@/graphql-client/novel/mutation";
import {
  GET_NOVELS_PAGINATE,
  GET_NOVEL_UPDATE_OR_CREATED,
  NOVELS_FILTER_BY_RANKING,
} from "@/graphql-client/novel/queries";
import {
  GET_DETAIL_USER,
  GET_NOVELS_BY_USER,
} from "@/graphql-client/user/queries";
import { useMutation } from "@apollo/client";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

const BookMarkButton = ({ user, novel }) => {
  const [checkBookmark, setCheckBookmark] = useState(false);
  const [
    toggleUserBookmark,
    { data: dataBookMark, loading: loadingBookMark, error: errorBookMark },
  ] = useMutation(TOGGLE_BOOKMARKS_NOVEL);

  const checkUserBookMark = useCallback(() => {
    if (novel.user_bookmarks) {
      const arrUserId = novel.user_bookmarks
        .map((item) => parseInt(item.user_id))
        .filter((id) => typeof id === "number" && !isNaN(id));
      return arrUserId.includes(user.id);
    }
    return false;
  }, [novel.user_bookmarks, user.id]);

  useEffect(() => {
    const isBookMark = checkUserBookMark();
    setCheckBookmark(isBookMark);
  }, [checkUserBookMark, novel]);

  const arrQueries = [
    GET_NOVELS_PAGINATE,
    GET_DETAIL_USER,
    NOVELS_FILTER_BY_RANKING,
    GET_NOVELS_BY_USER,
    GET_NOVEL_UPDATE_OR_CREATED,
  ];

  const handleBookMarksChange = () => {
    console.log(user);

    if (Object.keys(user).length > 0) {
      toggleUserBookmark({
        variables: { novelId: novel.novel_id },
        onCompleted: (dataBookMark) => {
          const isBookmark = dataBookMark?.toggleUserBookmark?.isBookmark;
          const toastAlert = isBookmark ? "Đã Ghim" : "Đã hủy Ghim";
          toast.success(toastAlert);
        },
        refetchQueries: arrQueries,
      });
    } else {
      toast.error("Vui lòng đăng nhập");
    }
  };

  return (
    <div className="flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={checkBookmark ? "#7BD3EA" : "none"}
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke={checkBookmark ? "#7BD3EA" : "#ccc"}
        className="h-6 w-6 cursor-pointer"
        onClick={handleBookMarksChange}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
        />
      </svg>
      <span className="pl-1">{novel.bookmarks}</span>
    </div>
  );
};

export default BookMarkButton;
