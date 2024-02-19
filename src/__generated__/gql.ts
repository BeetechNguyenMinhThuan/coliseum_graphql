/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n      query Login($input: LoginInput!) {\n          login(input: $input) {\n            token\n          }\n}\n    ": types.LoginDocument,
    "\n       query VerifyToken($token: String!) {\n          verifyToken(token: $token) {\n            success\n            message\n          }\n        }\n    ": types.VerifyTokenDocument,
    "\nmutation Mutation($input: NovelInput!) {\n    createNovel(input: $input) {\n      novel_id\n      novel_ulid\n      user_id\n      title\n      synopsis\n      cover_picture_url\n      foreword_url\n      afterword_url\n      setting_url\n      note_url\n      dictionary_url\n      is_anonymous\n      is_publish\n      is_ranking_visible\n      is_completed\n      is_comment\n      is_comment_publish\n      first_novel_publish_at\n      first_name_publish_at\n      first_completed_at\n      created_at\n      updated_at\n      deleted_at\n    }\n  }\n": types.MutationDocument,
    "\nmutation CreateRound($input: RoundInput!) {\n  createRound(input: $input) {\n    round_id\n    ulid\n    round_name\n    round_start_at\n    round_type\n  }\n}\n": types.CreateRoundDocument,
    "\nmutation exportCSV($modelName: String) {\n  exportCSV(modelName: $modelName) {\n   csvString\n   fileName\n  }\n}\n": types.ExportCsvDocument,
    "\nmutation DeleteRound($roundId: Int!) {\n  deleteRound(round_id: $roundId)\n}\n": types.DeleteRoundDocument,
    "\nmutation UpdateRound($roundId: Int!, $input: RoundInput!) {\n  updateRound(round_id: $roundId, input: $input) {\n    round_id\n    event_id\n    ulid\n    round_name\n    round_order\n    round_start_at\n    round_finish_at\n    vote_start_at\n    vote_finish_at\n    round_type\n    is_current\n    winner_count\n    min_word_count\n    max_word_count\n    tag\n    created_at\n    updated_at\n    deleted_at\n  }\n}\n": types.UpdateRoundDocument,
    "\nquery Round($roundId: Int!) {\n  round(round_id: $roundId) {\n    round_id\n    event_id\n    ulid\n    round_name\n    round_type\n    round_order\n    round_start_at\n    round_finish_at\n    vote_start_at\n    vote_finish_at\n    round_type\n    is_current\n    winner_count\n    min_word_count\n    max_word_count\n    tag\n    created_at\n    updated_at\n    deleted_at\n  }\n}\n": types.RoundDocument,
    "\n        query GetUsers($page: Int!, $limit: Int!) {\n            getUsersPaginate(page: $page, limit: $limit) {\n                users {\n                    user_id\n                    name\n                }\n                totalItems\n                totalPages\n                currentPage\n            }\n        }\n    ": types.GetUsersDocument,
    "\nquery GetUsersBase {\n  getUsers {\n    user_id\n    user_uuid\n    name\n    s3_url\n    first_login_at\n    last_login_at\n    created_at\n    updated_at\n    deleted_at\n    isSpaceShipPassenger @client\n  }\n}\n": types.GetUsersBaseDocument,
    "\n       query Rounds($search:String) {\n          rounds(search: $search) {\n            round_id\n            round_name\n            round_start_at\n            round_type\n          }\n        }\n    ": types.RoundsDocument,
    "\n        query GetRounds($page: Int!, $limit: Int!, $search:String) {\n            getRoundsPaginate(page: $page, limit: $limit, search: $search) {\n                rounds {\n                   round_id\n                   round_name\n                   round_start_at\n                   round_type\n                }\n                totalItems\n                totalPages\n                currentPage\n            }\n        }\n    ": types.GetRoundsDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      query Login($input: LoginInput!) {\n          login(input: $input) {\n            token\n          }\n}\n    "): (typeof documents)["\n      query Login($input: LoginInput!) {\n          login(input: $input) {\n            token\n          }\n}\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n       query VerifyToken($token: String!) {\n          verifyToken(token: $token) {\n            success\n            message\n          }\n        }\n    "): (typeof documents)["\n       query VerifyToken($token: String!) {\n          verifyToken(token: $token) {\n            success\n            message\n          }\n        }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation Mutation($input: NovelInput!) {\n    createNovel(input: $input) {\n      novel_id\n      novel_ulid\n      user_id\n      title\n      synopsis\n      cover_picture_url\n      foreword_url\n      afterword_url\n      setting_url\n      note_url\n      dictionary_url\n      is_anonymous\n      is_publish\n      is_ranking_visible\n      is_completed\n      is_comment\n      is_comment_publish\n      first_novel_publish_at\n      first_name_publish_at\n      first_completed_at\n      created_at\n      updated_at\n      deleted_at\n    }\n  }\n"): (typeof documents)["\nmutation Mutation($input: NovelInput!) {\n    createNovel(input: $input) {\n      novel_id\n      novel_ulid\n      user_id\n      title\n      synopsis\n      cover_picture_url\n      foreword_url\n      afterword_url\n      setting_url\n      note_url\n      dictionary_url\n      is_anonymous\n      is_publish\n      is_ranking_visible\n      is_completed\n      is_comment\n      is_comment_publish\n      first_novel_publish_at\n      first_name_publish_at\n      first_completed_at\n      created_at\n      updated_at\n      deleted_at\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation CreateRound($input: RoundInput!) {\n  createRound(input: $input) {\n    round_id\n    ulid\n    round_name\n    round_start_at\n    round_type\n  }\n}\n"): (typeof documents)["\nmutation CreateRound($input: RoundInput!) {\n  createRound(input: $input) {\n    round_id\n    ulid\n    round_name\n    round_start_at\n    round_type\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation exportCSV($modelName: String) {\n  exportCSV(modelName: $modelName) {\n   csvString\n   fileName\n  }\n}\n"): (typeof documents)["\nmutation exportCSV($modelName: String) {\n  exportCSV(modelName: $modelName) {\n   csvString\n   fileName\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation DeleteRound($roundId: Int!) {\n  deleteRound(round_id: $roundId)\n}\n"): (typeof documents)["\nmutation DeleteRound($roundId: Int!) {\n  deleteRound(round_id: $roundId)\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation UpdateRound($roundId: Int!, $input: RoundInput!) {\n  updateRound(round_id: $roundId, input: $input) {\n    round_id\n    event_id\n    ulid\n    round_name\n    round_order\n    round_start_at\n    round_finish_at\n    vote_start_at\n    vote_finish_at\n    round_type\n    is_current\n    winner_count\n    min_word_count\n    max_word_count\n    tag\n    created_at\n    updated_at\n    deleted_at\n  }\n}\n"): (typeof documents)["\nmutation UpdateRound($roundId: Int!, $input: RoundInput!) {\n  updateRound(round_id: $roundId, input: $input) {\n    round_id\n    event_id\n    ulid\n    round_name\n    round_order\n    round_start_at\n    round_finish_at\n    vote_start_at\n    vote_finish_at\n    round_type\n    is_current\n    winner_count\n    min_word_count\n    max_word_count\n    tag\n    created_at\n    updated_at\n    deleted_at\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery Round($roundId: Int!) {\n  round(round_id: $roundId) {\n    round_id\n    event_id\n    ulid\n    round_name\n    round_type\n    round_order\n    round_start_at\n    round_finish_at\n    vote_start_at\n    vote_finish_at\n    round_type\n    is_current\n    winner_count\n    min_word_count\n    max_word_count\n    tag\n    created_at\n    updated_at\n    deleted_at\n  }\n}\n"): (typeof documents)["\nquery Round($roundId: Int!) {\n  round(round_id: $roundId) {\n    round_id\n    event_id\n    ulid\n    round_name\n    round_type\n    round_order\n    round_start_at\n    round_finish_at\n    vote_start_at\n    vote_finish_at\n    round_type\n    is_current\n    winner_count\n    min_word_count\n    max_word_count\n    tag\n    created_at\n    updated_at\n    deleted_at\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n        query GetUsers($page: Int!, $limit: Int!) {\n            getUsersPaginate(page: $page, limit: $limit) {\n                users {\n                    user_id\n                    name\n                }\n                totalItems\n                totalPages\n                currentPage\n            }\n        }\n    "): (typeof documents)["\n        query GetUsers($page: Int!, $limit: Int!) {\n            getUsersPaginate(page: $page, limit: $limit) {\n                users {\n                    user_id\n                    name\n                }\n                totalItems\n                totalPages\n                currentPage\n            }\n        }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetUsersBase {\n  getUsers {\n    user_id\n    user_uuid\n    name\n    s3_url\n    first_login_at\n    last_login_at\n    created_at\n    updated_at\n    deleted_at\n    isSpaceShipPassenger @client\n  }\n}\n"): (typeof documents)["\nquery GetUsersBase {\n  getUsers {\n    user_id\n    user_uuid\n    name\n    s3_url\n    first_login_at\n    last_login_at\n    created_at\n    updated_at\n    deleted_at\n    isSpaceShipPassenger @client\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n       query Rounds($search:String) {\n          rounds(search: $search) {\n            round_id\n            round_name\n            round_start_at\n            round_type\n          }\n        }\n    "): (typeof documents)["\n       query Rounds($search:String) {\n          rounds(search: $search) {\n            round_id\n            round_name\n            round_start_at\n            round_type\n          }\n        }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n        query GetRounds($page: Int!, $limit: Int!, $search:String) {\n            getRoundsPaginate(page: $page, limit: $limit, search: $search) {\n                rounds {\n                   round_id\n                   round_name\n                   round_start_at\n                   round_type\n                }\n                totalItems\n                totalPages\n                currentPage\n            }\n        }\n    "): (typeof documents)["\n        query GetRounds($page: Int!, $limit: Int!, $search:String) {\n            getRoundsPaginate(page: $page, limit: $limit, search: $search) {\n                rounds {\n                   round_id\n                   round_name\n                   round_start_at\n                   round_type\n                }\n                totalItems\n                totalPages\n                currentPage\n            }\n        }\n    "];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;