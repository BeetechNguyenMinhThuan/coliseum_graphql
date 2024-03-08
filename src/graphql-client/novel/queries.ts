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
query Novel($novelId: Int!, $type: String) {
  novel(novel_id: $novelId, type: $type) {
    novel_id
    novel_ulid
    title
    cover_picture_url
    user_uuid
    author
    synopsis
    user {
      user_id
      name
    }
    first_novel_publish_at
    max_updated_at
    episode_count
    likes
    bookmarks
    comments
    is_completed
    rank {
      hot
      daily
      weekly
      monthly
      quarterly
      yearly
      cumulative
    }
    user_likes {
      user_id
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
    episodes {
      episode_id
      episode_title
      is_publish
      publish_at
      first_novel_publish_at
      updated_at
    }
    updated_at
    is_ranking_visible
    is_publish
  }
}
`);

export const GET_NOVEL_UPDATE_OR_CREATED = gql(`
query novelCreateOrUpdate($type: Int) {
  novels(type: $type) {
    novels {
     novel_id
      novel_ulid
      title
      synopsis
      cover_picture_url
      user_uuid
      author
      user {
        name
        user_id
      }
      is_publish
      is_ranking_visible
      first_novel_publish_at
      max_updated_at
      episode_count
      likes
      
      bookmarks
      comments
      is_completed
      user_likes {
        user_id
      }
      user_bookmarks {
        user_id
      }
      created_at
      updated_at
      badges {
        badges_name
      }
      tags {
        tag
      }  
    }
}
}
`);
