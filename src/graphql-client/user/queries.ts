import { gql } from "@/__generated__/gql";

export const GET_USERS = gql(`
        query GetUsers($page: Int!, $limit: Int!) {
            getUsersPaginate(page: $page, limit: $limit) {
                users {
                    user_id
                    name
                }
                totalItems
                totalPages
                currentPage
            }
        }
    `);

export const GET_USER_BASE = gql(`
query GetUsersBase {
  users {
    user_id
    user_uuid
    name
    s3_url
    first_login_at
    last_login_at
    created_at
    updated_at
    deleted_at
  }
}
`);

export const GET_DETAIL_USER = gql(`
query User($userId: Int!) {
  user(userId: $userId) {
    name
    user_id
    created_at
    first_login_at
    last_login_at
    s3_url
    novels {
      user{
        name
      }
      novel_id
      novel_ulid
      user_id
      title
      synopsis
      cover_picture_url
      foreword_url
      afterword_url
      setting_url
      note_url
      dictionary_url
      is_anonymous
      is_publish
      is_ranking_visible
      is_completed
      is_comment
      is_comment_publish
      novel_tag {
        tag
      }
      novel_badges {
        badges_name
      }
      novel_comments {
        comment
      }
      first_novel_publish_at
      first_name_publish_at
      first_completed_at
      total_likes
      total_badges
      total_bookmarks
      user_like
      user_bookmarks
      created_at
      updated_at
      deleted_at
    }
    updated_at
    user_badges {
      badges_id
      badges_name
      badges_url
      badges_ulid
      finish_at
      start_at
    }
  }
  }
`);
