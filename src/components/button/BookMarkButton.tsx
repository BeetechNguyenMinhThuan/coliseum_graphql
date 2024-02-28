import { TOGGLE_BOOKMARKS_NOVEL } from "@/graphql-client/novel/mutation";
import { GET_NOVELS_PAGINATE } from "@/graphql-client/novel/queries";
import { GET_DETAIL_USER } from "@/graphql-client/user/queries";
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
      const arrUserId = novel.user_bookmarks.map(item => parseInt(item.user_id)).filter(id => typeof id === 'number' && !isNaN(id));
      return arrUserId.includes(user.id);
    }
    return false;
  }, [novel.user_bookmarks, user.id]);

  useEffect(() => {
    const isBookMark = checkUserBookMark();
    setCheckBookmark(isBookMark);
  }, [checkUserBookMark, novel]);

  const handleBookMarksChange = () => {
    toggleUserBookmark({
      variables: { novelId: novel.novel_id },
      onCompleted: (dataBookMark) => {
        const isBookmark = dataBookMark?.toggleUserBookmark?.isBookmark;
        const toastAlert = isBookmark ? "Đã Ghim" : "Đã hủy Ghim";
        toast.success(toastAlert);
      },
      refetchQueries: [GET_NOVELS_PAGINATE, GET_DETAIL_USER],

    });
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={checkBookmark}
        onChange={handleBookMarksChange}
      />
      <span className="pl-1">{novel.bookmarks} </span>
    </div>
  );
};

export default BookMarkButton;
