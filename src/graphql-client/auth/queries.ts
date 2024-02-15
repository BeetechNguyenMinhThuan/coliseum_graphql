import { gql } from "@/__generated__/gql";

export const LOG_IN = gql(`
      query Login($input: LoginInput!) {
          login(input: $input) {
            token
          }
}
    `);

export const VERIFY_TOKEN = gql(`
       query VerifyToken($token: String!) {
          verifyToken(token: $token) {
            success
            message
          }
        }
    `);
