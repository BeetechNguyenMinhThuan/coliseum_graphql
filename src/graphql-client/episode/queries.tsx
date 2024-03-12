import { gql } from "@/__generated__";

export const GET_EPISODE = gql(`
query Episodes($novelId: Int!, $page: Int, $limit: Int, $episodeId: Int) {
  episodes(novelId: $novelId, page: $page, limit: $limit, episodeId: $episodeId) {
    episodes {
      episode_id
      episode_ulid
      episode_title
      episode_type
      order
      episode_url
      is_publish
      publish_at
      first_novel_publish_at
      created_at
      updated_at
      deleted_at
    }
    totalItems
    totalPages
    currentPage
  }
}
`);
