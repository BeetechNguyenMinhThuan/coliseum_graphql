import React, { useState, useEffect, useCallback } from "react";
import { useMutation } from "@apollo/client";
import { TOGGLE_BOOKMARKS_NOVEL } from "@/graphql-client/novel/mutation";
import { toast } from "react-toastify";

const BookMarkButton = ({ user, novel, refetch }) => {
  const [checkBookmark, setCheckBookmark] = useState(false);
  const [toggleUserBookmark] = useMutation(TOGGLE_BOOKMARKS_NOVEL);

  const checkUserBookMark = useCallback(() => {
    if (novel.user_bookmarks) {
      return novel.user_bookmarks.some(
        (item) => parseInt(item.user_id) === user.id,
      );
    }
    return false;
  }, [novel.user_bookmarks, user.id]);

  useEffect(() => {
    setCheckBookmark(checkUserBookMark());
  }, [checkUserBookMark]);

  const handleBookMarksChange = async () => {
    try {
      const { data } = await toggleUserBookmark({
        variables: { novelId: novel.novel_id },
      });
      const isBookmark = data?.toggleUserBookmark?.isBookmark;
      setCheckBookmark(isBookmark);
      refetch();
      const toastAlert = isBookmark ? "Đã Ghim" : "Đã hủy Ghim";
      toast.success(toastAlert);
    } catch (error) {
      console.error("Error toggling bookmark:", error);
      toast.error("Đã xảy ra lỗi khi thực hiện thao tác.");
    }
  };

  return (
    <div className="flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={checkBookmark ? "#fff530e0" : "none"}
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke={checkBookmark ? "none" : "#ccc"}
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
