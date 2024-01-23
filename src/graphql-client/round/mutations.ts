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
