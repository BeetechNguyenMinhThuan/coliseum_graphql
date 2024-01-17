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
    "\nmutation CreateRound($input: RoundInput!) {\n  createRound(input: $input) {\n    round_id\n    ulid\n    round_name\n    round_start_at\n    round_type\n\n  }\n}\n": types.CreateRoundDocument,
    "\nmutation exportCSV($modelName: String) {\n  exportCSV(modelName: $modelName) {\n   downloadUrl\n  }\n}\n": types.ExportCsvDocument,
    "\n        query GetUsers($page: Int!, $limit: Int!) {\n            getUsersPaginate(page: $page, limit: $limit) {\n                users {\n                    user_id\n                    name\n                }\n                totalItems\n                totalPages\n                currentPage\n            }\n        }\n    ": types.GetUsersDocument,
    "\n       query Rounds {\n          rounds {\n            round_name\n            round_start_at\n            round_type\n          }\n        }\n    ": types.RoundsDocument,
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
export function gql(source: "\nmutation CreateRound($input: RoundInput!) {\n  createRound(input: $input) {\n    round_id\n    ulid\n    round_name\n    round_start_at\n    round_type\n\n  }\n}\n"): (typeof documents)["\nmutation CreateRound($input: RoundInput!) {\n  createRound(input: $input) {\n    round_id\n    ulid\n    round_name\n    round_start_at\n    round_type\n\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation exportCSV($modelName: String) {\n  exportCSV(modelName: $modelName) {\n   downloadUrl\n  }\n}\n"): (typeof documents)["\nmutation exportCSV($modelName: String) {\n  exportCSV(modelName: $modelName) {\n   downloadUrl\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n        query GetUsers($page: Int!, $limit: Int!) {\n            getUsersPaginate(page: $page, limit: $limit) {\n                users {\n                    user_id\n                    name\n                }\n                totalItems\n                totalPages\n                currentPage\n            }\n        }\n    "): (typeof documents)["\n        query GetUsers($page: Int!, $limit: Int!) {\n            getUsersPaginate(page: $page, limit: $limit) {\n                users {\n                    user_id\n                    name\n                }\n                totalItems\n                totalPages\n                currentPage\n            }\n        }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n       query Rounds {\n          rounds {\n            round_name\n            round_start_at\n            round_type\n          }\n        }\n    "): (typeof documents)["\n       query Rounds {\n          rounds {\n            round_name\n            round_start_at\n            round_type\n          }\n        }\n    "];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;