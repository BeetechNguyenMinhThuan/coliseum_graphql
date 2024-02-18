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

export const GET_USER_BASE = gql(`
query GetUsersBase {
  getUsers {
    user_id
    user_uuid
    name
    s3_url
    first_login_at
    last_login_at
    created_at
    updated_at
    deleted_at
    isSpaceShipPassenger @client
  }
}
`);

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
