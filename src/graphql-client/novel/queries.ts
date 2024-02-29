import { gql } from "@/__generated__/gql";

export const GET_NOVELS_PAGINATE = gql(`
query Query($page: Int, $limit: Int, $type: String, $filter: FilterNovel) {
  getNovelsPaginate(page: $page, limit: $limit, type: $type, filter: $filter) {
    novels {
      novel_id
      novel_ulid
      title
      synopsis
      cover_picture_url
      user_uuid
      author
      first_novel_publish_at
      max_updated_at
      episode_count
      likes
      bookmarks
      comments
      is_completed
      rank {
        daily
      }
      user_likes {
        user_id
      }
      created_at
      badges {
        badges_name
      }
      tags {
        tag
      }
      user_bookmarks {
        user_id
      }
    }
    totalItems
    totalPages
    currentPage
  }
}

`);

export const NOVELS_FILTER_BY_RANKING = gql(`
query Query($page: Int, $limit: Int, $type: String, $filter: FilterNovel) {
  getNovelsPaginate(page: $page, limit: $limit, type: $type, filter: $filter) {
    novels {
      novel_id
      novel_ulid
      title
      synopsis
      cover_picture_url
      user_uuid
      author
      first_novel_publish_at
      max_updated_at
      episode_count
      likes
      bookmarks
      comments
      is_completed
      rank {
        daily
      }
      user_likes {
        user_id
      }
      created_at
      badges {
        badges_name
      }
      tags {
        tag
      }
      user_bookmarks {
        user_id
      }
    }
    totalItems
    totalPages
    currentPage
  }
}

`);

