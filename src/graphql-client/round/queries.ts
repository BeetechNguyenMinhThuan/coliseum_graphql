import { gql } from "@/__generated__/gql";



export const GET_ROUNDS_BASE = gql(`
       query Rounds {
          rounds {
            round_id
            round_name
            round_start_at
            round_type
          }
        }
    `);

export const GET_ROUNDS = gql(`
        query GetRounds($page: Int!, $limit: Int!, $search:String) {
            getRoundsPaginate(page: $page, limit: $limit, search: $search) {
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
