import { gql } from "@/__generated__/gql";

export const GET_NOVELS_PAGINATE = gql(`
    query getNovelsPaginateHome($type: String, $filter: FilterNovel, $page: Int, $limit: Int) {
  getNovelsPaginate(type: $type, filter: $filter, page: $page, limit: $limit) {
    totalPages
    totalItems
    novels {
      novel_id
      novel_ulid
      title
      synopsis
      cover_picture_url
      user_uuid
      first_novel_publish_at
      max_updated_at
      episode_count
      likes
      bookmarks
      comments
      is_completed
      rank {
        hot
      }
      user {
        user_id
        name
      }
      user_likes {
        user_id
        name
      }
      user_bookmarks {
        user_id
      }
      created_at
      badges {
        badges_name
      }
      tags {
        tag
      }
     
    }
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
      user {
        user_id
        name
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

export const GET_DETAIL_NOVEL = gql(`
query Novel($novelId: Int!) {
  novel(novel_id: $novelId) {
    novel_id
    novel_ulid
    user_id
    user {
      name
      user_id
    }
    author
    title
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
    synopsis
    is_comment_publish
    tags {
       tag
    }
    novel_badges {
      badges_name
    }
    novel_comments {
      user_id
      novel_id
    }
    first_novel_publish_at
    first_name_publish_at
    first_completed_at
    likes
    badges
    bookmarks
    comments
    episode_count
    user_like
    user_bookmarks
    rank {
      hot
    }
    created_at
    updated_at
    deleted_at
    episodes {
      episode_title
      first_novel_publish_at
      updated_at
    }
  }
}
`);
