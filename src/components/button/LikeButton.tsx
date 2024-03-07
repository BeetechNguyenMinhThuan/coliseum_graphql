import React, { useState, useEffect, useCallback } from "react";
import { useMutation } from "@apollo/client";
import { TOGGLE_LIKE_NOVEL } from "@/graphql-client/novel/mutation.ts";
import {
  GET_NOVELS_PAGINATE,
  GET_NOVEL_UPDATE_OR_CREATED,
  NOVELS_FILTER_BY_RANKING,
} from "@/graphql-client/novel/queries.ts";
import { toast } from "react-toastify";
import {
  GET_DETAIL_USER,
  GET_NOVELS_BY_USER,
} from "@/graphql-client/user/queries";
import { log } from "console";

const LikeButton = ({ user, novel }) => {
  const [toggleUserLike, { data, loading, error }] =
    useMutation(TOGGLE_LIKE_NOVEL);
  const [isLiked, setIsLike] = useState(false);

  const checkUserLike = useCallback(() => {
    
    if (novel.user_likes) {
      const arrUserId = novel.user_likes
        .map((item) => parseInt(item.user_id))
        .filter((id) => typeof id === "number" && !isNaN(id));
      return arrUserId.includes(user.id);
    }
    return false;
  }, [novel.user_likes, user.id]);
  checkUserLike();

  const arrQueries = [
    GET_NOVELS_PAGINATE,
    GET_DETAIL_USER,
    NOVELS_FILTER_BY_RANKING,
    GET_NOVELS_BY_USER,
    GET_NOVEL_UPDATE_OR_CREATED
  ];
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
      refetchQueries: arrQueries,
    });
  };

  return (
    <div className="vote">
      <input className=" cursor-pointer" type="checkbox" checked={isLiked} onChange={handleLikeChange} />
      <span className="pl-1">{novel.likes}</span>
    </div>
  );
};

export default LikeButton;
