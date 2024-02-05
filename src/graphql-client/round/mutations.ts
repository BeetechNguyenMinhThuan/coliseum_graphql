import { gql } from "@/__generated__/gql";

export const CREATE_ROUND = gql(`
mutation CreateRound($input: RoundInput!) {
  createRound(input: $input) {
    round_id
    ulid
    round_name
    round_start_at
    round_type
  }
}
`);
export const EXPORT_CSV_MUTATION = gql(`
mutation exportCSV($modelName: String) {
  exportCSV(modelName: $modelName) {
   csvString
   fileName
  }
}
`);

export const DELETE_ROUND = gql(`
mutation DeleteRound($roundId: Int!) {
  deleteRound(round_id: $roundId)
}
`);

export const UPDATE_ROUND = gql(`
mutation UpdateRound($roundId: Int!, $input: RoundInput!) {
  updateRound(round_id: $roundId, input: $input) {
    round_id
    event_id
    ulid
    round_name
    round_order
    round_start_at
    round_finish_at
    vote_start_at
    vote_finish_at
    round_type
    is_current
    winner_count
    min_word_count
    max_word_count
    tag
    created_at
    updated_at
    deleted_at
  }
}
`);

export const GET_SINGLE_ROUND = gql(`
query Round($roundId: Int!) {
  round(round_id: $roundId) {
    round_id
    event_id
    ulid
    round_name
    round_type
    round_order
    round_start_at
    round_finish_at
    vote_start_at
    vote_finish_at
    round_type
    is_current
    winner_count
    min_word_count
    max_word_count
    tag
    created_at
    updated_at
    deleted_at
  }
}
`);
