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
