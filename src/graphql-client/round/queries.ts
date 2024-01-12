import { gql } from "@/__generated__/gql";

export const GET_USERS = gql(`
        query GetUsers($page: Int!, $limit: Int!) {
            getUsersPaginate(page: $page, limit: $limit) {
                users {
                    user_id
                    name
                }
                totalItems
                totalPages
                currentPage
            }
        }
    `);

export const GET_ROUNDS = gql(`
       query Rounds {
          rounds {
            round_name
            round_start_at
            round_type
          }
        }
    `);
