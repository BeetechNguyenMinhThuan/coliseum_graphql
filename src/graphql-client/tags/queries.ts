import { gql } from "@/__generated__/gql";

export const GET_OFFICIAL_TAGS = gql(`
query GetAllOfficialTags {
  getAllOfficialTags {
    tag_id
    tag_ulid
    tag
    start_at
    finish_at
    created_at
    updated_at
    deleted_at
  }
}
`);
