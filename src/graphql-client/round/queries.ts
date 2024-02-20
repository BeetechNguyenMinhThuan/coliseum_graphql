import { gql } from "@/__generated__/gql";



export const GET_ROUNDS_BASE = gql(`
       query Rounds($search:String) {
          rounds(search: $search) {
            round_id
            round_name
            round_start_at
            round_type
          }
        }
    `);

export const GET_ROUNDS = gql(`
        query GetRounds($page: Int!, $limit: Int!, $filter:filterRound) {
            getRoundsPaginate(page: $page, limit: $limit, filter: $filter) {
                rounds {
                   round_id
                   round_name
                   round_start_at
                   round_type
                }
                totalItems
                totalPages
                currentPage
            }
        }
    `);
