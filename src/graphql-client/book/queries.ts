import {gql} from '__generated__/gql.ts'


export const GET_USERS:any = gql(`
    query GetUsers {
        getUsers {
        user_id
        user_uuid
        name
        s3_url
        first_login_at
        last_login_at
        novel_like {
            title
        }
        created_at
        updated_at
        deleted_at
        }
    }
`);

