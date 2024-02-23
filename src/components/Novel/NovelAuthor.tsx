import React from "react";

function NovelAuthor(props: { author: string }) {
  const { author } = props;
  return (
    <div>
      <span>{author.name}</span>
    </div>
  );
}

export default NovelAuthor;
