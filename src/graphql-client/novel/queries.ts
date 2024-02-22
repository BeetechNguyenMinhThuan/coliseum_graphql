import { gql } from "@/__generated__/gql";

export const GET_NOVELS_PAGINATE = gql(`
  query GetNovelsPaginate($page: Int, $limit: Int, $filter: filterNovel) {
    getNovelsPaginate(page: $page, limit: $limit, filter: $filter) {
      novels {
        novel_id
        user_id
        user {
          name
        }
        title
        synopsis
        cover_picture_url
        created_at
        updated_at
      }
      totalItems
      totalPages
      currentPage
    }
  }
`);

export const ADD_NOVEL = gql(`
mutation Mutation($input: NovelInput!) {
    createNovel(input: $input) {
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
      first_novel_publish_at
      first_name_publish_at
      first_completed_at
      created_at
      updated_at
      deleted_at
    }
  }
`);
