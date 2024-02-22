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
  }
}
`);

export const GET_DETAIL_USER = gql(`
query GetDetailUser($user_id: ID) {
  getDetailUser(user_id: $user_id) {
    user_id
    user_uuid
    name
    s3_url
    first_login_at
    last_login_at
    created_at
    updated_at
    deleted_at
    isSpaceShipPassenger
  }
}

`);
