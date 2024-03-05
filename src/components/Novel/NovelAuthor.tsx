import React from "react";
import { NavLink } from "react-router-dom";

function NovelAuthor(props: { author: string }) {
  const { author } = props;
  return (
    <div>
      <NavLink to={`/author/${author.user_id}`} >{author.name}</NavLink>
    </div>
  );
}

export default NovelAuthor;
