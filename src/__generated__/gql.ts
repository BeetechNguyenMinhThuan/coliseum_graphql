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
    "\n    query GetUsers {\n        getUsers {\n        user_id\n        user_uuid\n        name\n        s3_url\n        first_login_at\n        last_login_at\n        novel_like {\n            title\n        }\n        created_at\n        updated_at\n        deleted_at\n        }\n    }\n": types.GetUsersDocument,
    "\nquery Query($page: Int, $limit: Int) {\n    novels(page: $page, limit: $limit) {\n      novels {\n        novel_id\n        novel_ulid\n        user_id\n        title\n        synopsis\n        cover_picture_url\n        foreword_url\n        afterword_url\n        setting_url\n        note_url\n        dictionary_url\n        is_anonymous\n        is_publish\n        is_ranking_visible\n        is_completed\n        is_comment\n        is_comment_publish\n        first_novel_publish_at\n        first_name_publish_at\n        first_completed_at\n        created_at\n        updated_at\n        deleted_at\n      }\n      novel_pagination {\n        totalItems\n        totalPages\n        currentPage\n      }\n    }\n  }\n": types.QueryDocument,
    "\nmutation Mutation($input: NovelInput!) {\n    createNovel(input: $input) {\n      novel_id\n      novel_ulid\n      user_id\n      title\n      synopsis\n      cover_picture_url\n      foreword_url\n      afterword_url\n      setting_url\n      note_url\n      dictionary_url\n      is_anonymous\n      is_publish\n      is_ranking_visible\n      is_completed\n      is_comment\n      is_comment_publish\n      first_novel_publish_at\n      first_name_publish_at\n      first_completed_at\n      created_at\n      updated_at\n      deleted_at\n    }\n  }\n": types.MutationDocument,
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
export function gql(source: "\n    query GetUsers {\n        getUsers {\n        user_id\n        user_uuid\n        name\n        s3_url\n        first_login_at\n        last_login_at\n        novel_like {\n            title\n        }\n        created_at\n        updated_at\n        deleted_at\n        }\n    }\n"): (typeof documents)["\n    query GetUsers {\n        getUsers {\n        user_id\n        user_uuid\n        name\n        s3_url\n        first_login_at\n        last_login_at\n        novel_like {\n            title\n        }\n        created_at\n        updated_at\n        deleted_at\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery Query($page: Int, $limit: Int) {\n    novels(page: $page, limit: $limit) {\n      novels {\n        novel_id\n        novel_ulid\n        user_id\n        title\n        synopsis\n        cover_picture_url\n        foreword_url\n        afterword_url\n        setting_url\n        note_url\n        dictionary_url\n        is_anonymous\n        is_publish\n        is_ranking_visible\n        is_completed\n        is_comment\n        is_comment_publish\n        first_novel_publish_at\n        first_name_publish_at\n        first_completed_at\n        created_at\n        updated_at\n        deleted_at\n      }\n      novel_pagination {\n        totalItems\n        totalPages\n        currentPage\n      }\n    }\n  }\n"): (typeof documents)["\nquery Query($page: Int, $limit: Int) {\n    novels(page: $page, limit: $limit) {\n      novels {\n        novel_id\n        novel_ulid\n        user_id\n        title\n        synopsis\n        cover_picture_url\n        foreword_url\n        afterword_url\n        setting_url\n        note_url\n        dictionary_url\n        is_anonymous\n        is_publish\n        is_ranking_visible\n        is_completed\n        is_comment\n        is_comment_publish\n        first_novel_publish_at\n        first_name_publish_at\n        first_completed_at\n        created_at\n        updated_at\n        deleted_at\n      }\n      novel_pagination {\n        totalItems\n        totalPages\n        currentPage\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation Mutation($input: NovelInput!) {\n    createNovel(input: $input) {\n      novel_id\n      novel_ulid\n      user_id\n      title\n      synopsis\n      cover_picture_url\n      foreword_url\n      afterword_url\n      setting_url\n      note_url\n      dictionary_url\n      is_anonymous\n      is_publish\n      is_ranking_visible\n      is_completed\n      is_comment\n      is_comment_publish\n      first_novel_publish_at\n      first_name_publish_at\n      first_completed_at\n      created_at\n      updated_at\n      deleted_at\n    }\n  }\n"): (typeof documents)["\nmutation Mutation($input: NovelInput!) {\n    createNovel(input: $input) {\n      novel_id\n      novel_ulid\n      user_id\n      title\n      synopsis\n      cover_picture_url\n      foreword_url\n      afterword_url\n      setting_url\n      note_url\n      dictionary_url\n      is_anonymous\n      is_publish\n      is_ranking_visible\n      is_completed\n      is_comment\n      is_comment_publish\n      first_novel_publish_at\n      first_name_publish_at\n      first_completed_at\n      created_at\n      updated_at\n      deleted_at\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;