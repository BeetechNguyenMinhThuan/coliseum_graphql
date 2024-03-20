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
query User(
  $userId: Int!
  $limit: Int
  $page: Int
  $pageNovelLike: Int
  $limitNovelLike: Int
) {
  user(userId: $userId) {
    user_id
    name
    novelsPaginate(limit: $limit, page: $page, userId: $userId) {
      novels {
        novel_id
        title
        cover_picture_url
        likes
        first_novel_publish_at
        user_likes {
          user_id
        }
        bookmarks
        user_bookmarks {
          user_id
        }
        episodes {
          episode_id
          episode_title
          is_publish
          created_at
          updated_at
          publish_at
        }
        tags {
          tag_id
          tag
        }
      }
      totalItems
      totalPages
      currentPage
    }

    novel_like(
      userId: $userId
      pageNovelLike: $pageNovelLike
      limitNovelLike: $limitNovelLike
    ) {
      
      totalItems
      totalPages
      currentPage
      novels {
        novel_id
        title
        cover_picture_url
        likes
        first_novel_publish_at
        user_likes {
          user_id
        }
        bookmarks
        user_bookmarks {
          user_id
        }
        episodes {
          episode_id
          episode_title
          is_publish
          created_at
          updated_at
          publish_at
        }
        tags {
          tag_id
          tag
        }
      }
    }
  }
}

`);

