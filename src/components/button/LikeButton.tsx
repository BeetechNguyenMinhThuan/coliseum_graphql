import React, { useState, useEffect, useCallback } from "react";
import { useMutation } from "@apollo/client";
import { TOGGLE_LIKE_NOVEL } from "@/graphql-client/novel/mutation.ts";
import { GET_NOVELS_PAGINATE } from "@/graphql-client/novel/queries.ts";
import { toast } from "react-toastify";
import { GET_DETAIL_USER } from "@/graphql-client/user/queries";

const LikeButton = ({ user, novel }) => {
  const [toggleUserLike, { data, loading, error }] =
    useMutation(TOGGLE_LIKE_NOVEL);
  const [isLiked, setIsLike] = useState(false);

  const checkUserLike = useCallback(() => {
    if (novel.user_like && Array.isArray(novel.user_like)) {
      const result = novel.user_like.includes(user.id);
      return result;
    }
    return false;
  }, [novel.user_like, user.id]);

  useEffect(() => {
    const result = checkUserLike();
    setIsLike(result);
  }, [checkUserLike, data?.toggleUserLike?.isFavorite]);

  const handleLikeChange = () => {
    toggleUserLike({
      variables: { novelId: novel.novel_id },
      onCompleted: (data) => {
        const isFavorite = data?.toggleUserLike?.isFavorite;
        const toastAlert = isFavorite ? "Đã Like" : "Đã hủy like";
        toast.success(toastAlert);
      },
      refetchQueries: [GET_NOVELS_PAGINATE, GET_DETAIL_USER],
    });
  };

  return (
    <div className="vote">
      <input type="checkbox" checked={isLiked} onChange={handleLikeChange} />
      <span className="pl-1">{novel.total_likes}</span>
    </div>
  );
};

export default LikeButton;
