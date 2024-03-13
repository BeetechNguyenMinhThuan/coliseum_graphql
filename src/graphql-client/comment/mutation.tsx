import { gql } from "@/__generated__";

export const POST_COMMENT = gql(`
mutation CreateNovelComment(
  $userId: Int!
  $novelId: Int!
  $comment: String
  $episodeId: Int
  $score: Int
  $isOfficialAllow: Int
  $isPublish: Int
  $responseCommentId: Int
) {
  createNovelComment(
    user_id: $userId
    novel_id: $novelId
    comment: $comment
    episode_id: $episodeId
    score: $score
    is_official_allow: $isOfficialAllow
    is_publish: $isPublish
    response_comment_id: $responseCommentId
  ) {
    novel_comment_id
    user_id
    novel_id
    episode_id
    comment
    score
    is_official_allow
    is_publish
    response_comment_id
    created_at
    updated_at
    deleted_at
  }
}

`);
