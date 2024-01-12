/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type CreateUserResponse = {
  __typename?: 'CreateUserResponse';
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type Episode = {
  __typename?: 'Episode';
  created_at?: Maybe<Scalars['DateTime']['output']>;
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  episode_id?: Maybe<Scalars['Int']['output']>;
  episode_title?: Maybe<Scalars['String']['output']>;
  episode_type?: Maybe<Scalars['Int']['output']>;
  episode_ulid?: Maybe<Scalars['String']['output']>;
  episode_url?: Maybe<Scalars['String']['output']>;
  first_novel_publish_at?: Maybe<Scalars['DateTime']['output']>;
  is_publish?: Maybe<Scalars['Boolean']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  publish_at?: Maybe<Scalars['DateTime']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type EpisodeInput = {
  episode_title?: InputMaybe<Scalars['String']['input']>;
  episode_type?: InputMaybe<Scalars['Int']['input']>;
  episode_ulid?: InputMaybe<Scalars['String']['input']>;
  episode_url?: InputMaybe<Scalars['String']['input']>;
  first_novel_publish_at?: InputMaybe<Scalars['DateTime']['input']>;
  is_publish?: InputMaybe<Scalars['Boolean']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  publish_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Event = {
  __typename?: 'Event';
  created_at?: Maybe<Scalars['DateTime']['output']>;
  current_round_id?: Maybe<Scalars['Int']['output']>;
  current_round_name?: Maybe<Scalars['String']['output']>;
  current_round_order?: Maybe<Scalars['Int']['output']>;
  decision_type?: Maybe<Scalars['Int']['output']>;
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  event_1_url?: Maybe<Scalars['String']['output']>;
  event_2_url?: Maybe<Scalars['String']['output']>;
  event_3_url?: Maybe<Scalars['String']['output']>;
  event_4_url?: Maybe<Scalars['String']['output']>;
  event_5_url?: Maybe<Scalars['String']['output']>;
  event_content?: Maybe<Scalars['String']['output']>;
  event_finish_at?: Maybe<Scalars['DateTime']['output']>;
  event_id?: Maybe<Scalars['Int']['output']>;
  event_lp_url?: Maybe<Scalars['String']['output']>;
  event_name?: Maybe<Scalars['String']['output']>;
  event_start_at?: Maybe<Scalars['DateTime']['output']>;
  event_type?: Maybe<Scalars['Int']['output']>;
  event_ulid?: Maybe<Scalars['String']['output']>;
  is_anonymous?: Maybe<Scalars['Boolean']['output']>;
  is_comment?: Maybe<Scalars['Boolean']['output']>;
  is_comment_publish?: Maybe<Scalars['Boolean']['output']>;
  is_multiple?: Maybe<Scalars['Boolean']['output']>;
  max_participants?: Maybe<Scalars['Int']['output']>;
  max_round_order?: Maybe<Scalars['Int']['output']>;
  min_participants?: Maybe<Scalars['Int']['output']>;
  registration_finish_at?: Maybe<Scalars['DateTime']['output']>;
  registration_start_at?: Maybe<Scalars['DateTime']['output']>;
  s3_url?: Maybe<Scalars['String']['output']>;
  tag_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type EventInput = {
  current_round_id?: InputMaybe<Scalars['Int']['input']>;
  current_round_name?: InputMaybe<Scalars['String']['input']>;
  current_round_order?: InputMaybe<Scalars['Int']['input']>;
  decision_type?: InputMaybe<Scalars['Int']['input']>;
  event_1_url?: InputMaybe<Scalars['String']['input']>;
  event_2_url?: InputMaybe<Scalars['String']['input']>;
  event_3_url?: InputMaybe<Scalars['String']['input']>;
  event_4_url?: InputMaybe<Scalars['String']['input']>;
  event_5_url?: InputMaybe<Scalars['String']['input']>;
  event_content?: InputMaybe<Scalars['String']['input']>;
  event_finish_at?: InputMaybe<Scalars['DateTime']['input']>;
  event_lp_url?: InputMaybe<Scalars['String']['input']>;
  event_name?: InputMaybe<Scalars['String']['input']>;
  event_start_at?: InputMaybe<Scalars['DateTime']['input']>;
  event_type?: InputMaybe<Scalars['Int']['input']>;
  event_ulid?: InputMaybe<Scalars['String']['input']>;
  is_anonymous?: InputMaybe<Scalars['Boolean']['input']>;
  is_comment?: InputMaybe<Scalars['Boolean']['input']>;
  is_comment_publish?: InputMaybe<Scalars['Boolean']['input']>;
  is_multiple?: InputMaybe<Scalars['Boolean']['input']>;
  max_participants?: InputMaybe<Scalars['Int']['input']>;
  max_round_order?: InputMaybe<Scalars['Int']['input']>;
  min_participants?: InputMaybe<Scalars['Int']['input']>;
  registration_finish_at?: InputMaybe<Scalars['DateTime']['input']>;
  registration_start_at?: InputMaybe<Scalars['DateTime']['input']>;
  s3_url?: InputMaybe<Scalars['String']['input']>;
  tag_id?: InputMaybe<Scalars['Int']['input']>;
};

export type Match = {
  __typename?: 'Match';
  created_at?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['String']['output']>;
  match_id: Scalars['ID']['output'];
  match_name?: Maybe<Scalars['String']['output']>;
  match_uuid?: Maybe<Scalars['String']['output']>;
  round_id: Scalars['Int']['output'];
  updated_at?: Maybe<Scalars['String']['output']>;
  vote_count?: Maybe<Scalars['Int']['output']>;
  winner_count?: Maybe<Scalars['Int']['output']>;
  winner_type?: Maybe<Scalars['Int']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createEpisode?: Maybe<Episode>;
  createEvent?: Maybe<Event>;
  createMatch?: Maybe<Match>;
  createNovel?: Maybe<Novel>;
  createOfficialBadge?: Maybe<OfficialBadge>;
  createOfficialTag?: Maybe<OfficialTag>;
  createRound?: Maybe<Round>;
  createUser: CreateUserResponse;
  createUserBadge?: Maybe<UserBadges>;
  createUserLike?: Maybe<UserLike>;
  deleteEpisode?: Maybe<Scalars['String']['output']>;
  deleteEvent?: Maybe<Scalars['String']['output']>;
  deleteMatch?: Maybe<Match>;
  deleteNovel?: Maybe<Scalars['String']['output']>;
  deleteOfficialBadge?: Maybe<Scalars['String']['output']>;
  deleteOfficialTag?: Maybe<Scalars['String']['output']>;
  deleteRound?: Maybe<Scalars['String']['output']>;
  deleteUserBadge?: Maybe<UserBadges>;
  deleteUserLike?: Maybe<Scalars['String']['output']>;
  updateEpisode?: Maybe<Episode>;
  updateEvent?: Maybe<Event>;
  updateMatch?: Maybe<Array<Maybe<Match>>>;
  updateMultipleRound?: Maybe<Scalars['String']['output']>;
  updateNovel?: Maybe<Novel>;
  updateOfficialBadge?: Maybe<OfficialBadge>;
  updateOfficialTag?: Maybe<OfficialTag>;
  updateRound?: Maybe<Round>;
  updateUserBadge?: Maybe<UserBadges>;
};


export type MutationCreateEpisodeArgs = {
  input: EpisodeInput;
};


export type MutationCreateEventArgs = {
  input: EventInput;
};


export type MutationCreateMatchArgs = {
  match_name: Scalars['String']['input'];
  match_uuid: Scalars['String']['input'];
  round_id: Scalars['Int']['input'];
  vote_count?: InputMaybe<Scalars['Int']['input']>;
  winner_count?: InputMaybe<Scalars['Int']['input']>;
  winner_type?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationCreateNovelArgs = {
  input: NovelInput;
};


export type MutationCreateOfficialBadgeArgs = {
  badges_name?: InputMaybe<Scalars['String']['input']>;
  badges_ulid?: InputMaybe<Scalars['String']['input']>;
  badges_url?: InputMaybe<Scalars['String']['input']>;
  finish_at?: InputMaybe<Scalars['DateTime']['input']>;
  start_at?: InputMaybe<Scalars['DateTime']['input']>;
};


export type MutationCreateOfficialTagArgs = {
  finish_at?: InputMaybe<Scalars['DateTime']['input']>;
  start_at?: InputMaybe<Scalars['DateTime']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  tag_ulid?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateRoundArgs = {
  input: RoundInput;
};


export type MutationCreateUserArgs = {
  input?: InputMaybe<CreateUserInput>;
};


export type MutationCreateUserBadgeArgs = {
  badges_id?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationCreateUserLikeArgs = {
  novel_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationDeleteEpisodeArgs = {
  episode_id: Scalars['Int']['input'];
};


export type MutationDeleteEventArgs = {
  event_id: Scalars['Int']['input'];
};


export type MutationDeleteMatchArgs = {
  match_id: Scalars['ID']['input'];
};


export type MutationDeleteNovelArgs = {
  novel_id: Scalars['Int']['input'];
};


export type MutationDeleteOfficialBadgeArgs = {
  badges_id: Scalars['ID']['input'];
};


export type MutationDeleteOfficialTagArgs = {
  tag_id: Scalars['ID']['input'];
};


export type MutationDeleteRoundArgs = {
  round_id: Scalars['Int']['input'];
};


export type MutationDeleteUserBadgeArgs = {
  badges_id?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationDeleteUserLikeArgs = {
  novel_id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateEpisodeArgs = {
  episode_id: Scalars['Int']['input'];
  input: EpisodeInput;
};


export type MutationUpdateEventArgs = {
  event_id: Scalars['Int']['input'];
  input: EventInput;
};


export type MutationUpdateMatchArgs = {
  updates: Array<UpdateMatchInput>;
};


export type MutationUpdateMultipleRoundArgs = {
  event_id: Scalars['Int']['input'];
  input: RoundInput;
};


export type MutationUpdateNovelArgs = {
  input: NovelInput;
  novel_id: Scalars['Int']['input'];
};


export type MutationUpdateOfficialBadgeArgs = {
  badges_id: Scalars['ID']['input'];
  badges_name?: InputMaybe<Scalars['String']['input']>;
  badges_ulid?: InputMaybe<Scalars['String']['input']>;
  badges_url?: InputMaybe<Scalars['String']['input']>;
  finish_at?: InputMaybe<Scalars['DateTime']['input']>;
  start_at?: InputMaybe<Scalars['DateTime']['input']>;
};


export type MutationUpdateOfficialTagArgs = {
  finish_at?: InputMaybe<Scalars['DateTime']['input']>;
  start_at?: InputMaybe<Scalars['DateTime']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  tag_id: Scalars['ID']['input'];
  tag_ulid?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateRoundArgs = {
  input: RoundInput;
  round_id: Scalars['Int']['input'];
};


export type MutationUpdateUserBadgeArgs = {
  badges_id?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

export type Novel = {
  __typename?: 'Novel';
  afterword_url?: Maybe<Scalars['String']['output']>;
  cover_picture_url?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  dictionary_url?: Maybe<Scalars['String']['output']>;
  first_completed_at?: Maybe<Scalars['DateTime']['output']>;
  first_name_publish_at?: Maybe<Scalars['DateTime']['output']>;
  first_novel_publish_at?: Maybe<Scalars['DateTime']['output']>;
  foreword_url?: Maybe<Scalars['String']['output']>;
  is_anonymous?: Maybe<Scalars['Boolean']['output']>;
  is_comment?: Maybe<Scalars['Boolean']['output']>;
  is_comment_publish?: Maybe<Scalars['Boolean']['output']>;
  is_completed?: Maybe<Scalars['Boolean']['output']>;
  is_publish?: Maybe<Scalars['Boolean']['output']>;
  is_ranking_visible?: Maybe<Scalars['Boolean']['output']>;
  note_url?: Maybe<Scalars['String']['output']>;
  novel_id?: Maybe<Scalars['Int']['output']>;
  novel_ulid?: Maybe<Scalars['String']['output']>;
  setting_url?: Maybe<Scalars['String']['output']>;
  synopsis?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

export type NovelInput = {
  afterword_url?: InputMaybe<Scalars['String']['input']>;
  cover_picture_url?: InputMaybe<Scalars['String']['input']>;
  dictionary_url?: InputMaybe<Scalars['String']['input']>;
  first_completed_at?: InputMaybe<Scalars['String']['input']>;
  first_name_publish_at?: InputMaybe<Scalars['String']['input']>;
  first_novel_publish_at?: InputMaybe<Scalars['String']['input']>;
  foreword_url?: InputMaybe<Scalars['String']['input']>;
  is_anonymous?: InputMaybe<Scalars['Boolean']['input']>;
  is_comment?: InputMaybe<Scalars['Boolean']['input']>;
  is_comment_publish?: InputMaybe<Scalars['Boolean']['input']>;
  is_completed?: InputMaybe<Scalars['Boolean']['input']>;
  is_publish?: InputMaybe<Scalars['Boolean']['input']>;
  is_ranking_visible?: InputMaybe<Scalars['Boolean']['input']>;
  note_url?: InputMaybe<Scalars['String']['input']>;
  novel_ulid?: InputMaybe<Scalars['String']['input']>;
  setting_url?: InputMaybe<Scalars['String']['input']>;
  synopsis?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

export type NovelPagination = {
  __typename?: 'NovelPagination';
  currentPage: Scalars['Int']['output'];
  totalItems: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type NovelResult = {
  __typename?: 'NovelResult';
  novel_pagination: NovelPagination;
  novels: Array<Novel>;
};

export type OfficialBadge = {
  __typename?: 'OfficialBadge';
  badges_id: Scalars['ID']['output'];
  badges_name?: Maybe<Scalars['String']['output']>;
  badges_ulid?: Maybe<Scalars['String']['output']>;
  badges_url?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  finish_at?: Maybe<Scalars['DateTime']['output']>;
  start_at?: Maybe<Scalars['DateTime']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type OfficialTag = {
  __typename?: 'OfficialTag';
  created_at?: Maybe<Scalars['DateTime']['output']>;
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  finish_at?: Maybe<Scalars['DateTime']['output']>;
  start_at?: Maybe<Scalars['DateTime']['output']>;
  tag?: Maybe<Scalars['String']['output']>;
  tag_id: Scalars['ID']['output'];
  tag_ulid?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type Query = {
  __typename?: 'Query';
  episode?: Maybe<Episode>;
  episodes?: Maybe<Array<Maybe<Episode>>>;
  event?: Maybe<Event>;
  events?: Maybe<Array<Maybe<Event>>>;
  getAllMatches?: Maybe<Array<Maybe<Match>>>;
  getAllOfficialBadges?: Maybe<Array<Maybe<OfficialBadge>>>;
  getAllOfficialTags?: Maybe<Array<Maybe<OfficialTag>>>;
  getMatchById?: Maybe<Match>;
  getOfficialBadgeById?: Maybe<OfficialBadge>;
  getOfficialTagById?: Maybe<OfficialTag>;
  getUserAndBadge?: Maybe<UserBadges>;
  getUserLike?: Maybe<UserLike>;
  getUsers?: Maybe<Array<Maybe<User>>>;
  getUsersPaginate?: Maybe<UserPagination>;
  novel?: Maybe<Novel>;
  novels: NovelResult;
  round?: Maybe<Round>;
  rounds?: Maybe<Array<Maybe<Round>>>;
};


export type QueryEpisodeArgs = {
  episode_id: Scalars['Int']['input'];
};


export type QueryEventArgs = {
  event_id: Scalars['Int']['input'];
};


export type QueryGetMatchByIdArgs = {
  match_id: Scalars['ID']['input'];
};


export type QueryGetOfficialBadgeByIdArgs = {
  badge: Scalars['ID']['input'];
};


export type QueryGetOfficialTagByIdArgs = {
  tag_id: Scalars['ID']['input'];
};


export type QueryGetUsersPaginateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryNovelArgs = {
  novel_id: Scalars['Int']['input'];
};


export type QueryNovelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRoundArgs = {
  round_id: Scalars['Int']['input'];
};

export type Round = {
  __typename?: 'Round';
  created_at?: Maybe<Scalars['DateTime']['output']>;
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  event?: Maybe<Event>;
  event_id?: Maybe<Scalars['Int']['output']>;
  is_current?: Maybe<Scalars['Boolean']['output']>;
  max_word_count?: Maybe<Scalars['Int']['output']>;
  min_word_count?: Maybe<Scalars['Int']['output']>;
  round_finish_at?: Maybe<Scalars['DateTime']['output']>;
  round_id?: Maybe<Scalars['Int']['output']>;
  round_name?: Maybe<Scalars['String']['output']>;
  round_order?: Maybe<Scalars['Int']['output']>;
  round_start_at?: Maybe<Scalars['DateTime']['output']>;
  round_type?: Maybe<Scalars['Int']['output']>;
  tag?: Maybe<Scalars['String']['output']>;
  ulid?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  vote_finish_at?: Maybe<Scalars['DateTime']['output']>;
  vote_start_at?: Maybe<Scalars['DateTime']['output']>;
  winner_count?: Maybe<Scalars['Int']['output']>;
};

export type RoundInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  deleted_at?: InputMaybe<Scalars['DateTime']['input']>;
  event_id?: InputMaybe<Scalars['Int']['input']>;
  is_current?: InputMaybe<Scalars['Boolean']['input']>;
  max_word_count?: InputMaybe<Scalars['Int']['input']>;
  min_word_count?: InputMaybe<Scalars['Int']['input']>;
  round_finish_at?: InputMaybe<Scalars['DateTime']['input']>;
  round_name?: InputMaybe<Scalars['String']['input']>;
  round_order?: InputMaybe<Scalars['Int']['input']>;
  round_start_at?: InputMaybe<Scalars['DateTime']['input']>;
  round_type?: InputMaybe<Scalars['Int']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  ulid?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  vote_finish_at?: InputMaybe<Scalars['DateTime']['input']>;
  vote_start_at?: InputMaybe<Scalars['DateTime']['input']>;
  winner_count?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateMatchInput = {
  match_id: Scalars['ID']['input'];
  match_name?: InputMaybe<Scalars['String']['input']>;
  match_uuid?: InputMaybe<Scalars['String']['input']>;
  round_id?: InputMaybe<Scalars['Int']['input']>;
  vote_count?: InputMaybe<Scalars['Int']['input']>;
  winner_count?: InputMaybe<Scalars['Int']['input']>;
  winner_type?: InputMaybe<Scalars['Int']['input']>;
};

export type User = {
  __typename?: 'User';
  created_at?: Maybe<Scalars['DateTime']['output']>;
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  first_login_at: Scalars['DateTime']['output'];
  last_login_at: Scalars['DateTime']['output'];
  name: Scalars['String']['output'];
  novel_like?: Maybe<Array<Maybe<Novel>>>;
  s3_url: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  user_id: Scalars['ID']['output'];
  user_uuid: Scalars['String']['output'];
};

export type UserBadges = {
  __typename?: 'UserBadges';
  badge_id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

export type UserLike = {
  __typename?: 'UserLike';
  created_at?: Maybe<Scalars['DateTime']['output']>;
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  novel_id: Scalars['Int']['output'];
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  user_id: Scalars['Int']['output'];
};

export type UserLikeNovel = {
  __typename?: 'UserLikeNovel';
  novel_id: Scalars['Int']['output'];
  user_id: Scalars['Int']['output'];
};

export type UserPagination = {
  __typename?: 'UserPagination';
  currentPage?: Maybe<Scalars['Int']['output']>;
  totalItems?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
  users?: Maybe<Array<User>>;
};

export type CreateUserInput = {
  first_login_at: Scalars['DateTime']['input'];
  last_login_at: Scalars['DateTime']['input'];
  name: Scalars['String']['input'];
  s3_url: Scalars['String']['input'];
  user_uuid: Scalars['String']['input'];
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', getUsers?: Array<{ __typename?: 'User', user_id: string, user_uuid: string, name: string, s3_url: string, first_login_at: any, last_login_at: any, created_at?: any | null, updated_at?: any | null, deleted_at?: any | null, novel_like?: Array<{ __typename?: 'Novel', title?: string | null } | null> | null } | null> | null };

export type QueryQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type QueryQuery = { __typename?: 'Query', novels: { __typename?: 'NovelResult', novels: Array<{ __typename?: 'Novel', novel_id?: number | null, novel_ulid?: string | null, user_id?: number | null, title?: string | null, synopsis?: string | null, cover_picture_url?: string | null, foreword_url?: string | null, afterword_url?: string | null, setting_url?: string | null, note_url?: string | null, dictionary_url?: string | null, is_anonymous?: boolean | null, is_publish?: boolean | null, is_ranking_visible?: boolean | null, is_completed?: boolean | null, is_comment?: boolean | null, is_comment_publish?: boolean | null, first_novel_publish_at?: any | null, first_name_publish_at?: any | null, first_completed_at?: any | null, created_at?: any | null, updated_at?: any | null, deleted_at?: any | null }>, novel_pagination: { __typename?: 'NovelPagination', totalItems: number, totalPages: number, currentPage: number } } };

export type MutationMutationVariables = Exact<{
  input: NovelInput;
}>;


export type MutationMutation = { __typename?: 'Mutation', createNovel?: { __typename?: 'Novel', novel_id?: number | null, novel_ulid?: string | null, user_id?: number | null, title?: string | null, synopsis?: string | null, cover_picture_url?: string | null, foreword_url?: string | null, afterword_url?: string | null, setting_url?: string | null, note_url?: string | null, dictionary_url?: string | null, is_anonymous?: boolean | null, is_publish?: boolean | null, is_ranking_visible?: boolean | null, is_completed?: boolean | null, is_comment?: boolean | null, is_comment_publish?: boolean | null, first_novel_publish_at?: any | null, first_name_publish_at?: any | null, first_completed_at?: any | null, created_at?: any | null, updated_at?: any | null, deleted_at?: any | null } | null };


export const GetUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_uuid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"s3_url"}},{"kind":"Field","name":{"kind":"Name","value":"first_login_at"}},{"kind":"Field","name":{"kind":"Name","value":"last_login_at"}},{"kind":"Field","name":{"kind":"Name","value":"novel_like"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"deleted_at"}}]}}]}}]} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;
export const QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Query"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"novels"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"novels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"novel_id"}},{"kind":"Field","name":{"kind":"Name","value":"novel_ulid"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"synopsis"}},{"kind":"Field","name":{"kind":"Name","value":"cover_picture_url"}},{"kind":"Field","name":{"kind":"Name","value":"foreword_url"}},{"kind":"Field","name":{"kind":"Name","value":"afterword_url"}},{"kind":"Field","name":{"kind":"Name","value":"setting_url"}},{"kind":"Field","name":{"kind":"Name","value":"note_url"}},{"kind":"Field","name":{"kind":"Name","value":"dictionary_url"}},{"kind":"Field","name":{"kind":"Name","value":"is_anonymous"}},{"kind":"Field","name":{"kind":"Name","value":"is_publish"}},{"kind":"Field","name":{"kind":"Name","value":"is_ranking_visible"}},{"kind":"Field","name":{"kind":"Name","value":"is_completed"}},{"kind":"Field","name":{"kind":"Name","value":"is_comment"}},{"kind":"Field","name":{"kind":"Name","value":"is_comment_publish"}},{"kind":"Field","name":{"kind":"Name","value":"first_novel_publish_at"}},{"kind":"Field","name":{"kind":"Name","value":"first_name_publish_at"}},{"kind":"Field","name":{"kind":"Name","value":"first_completed_at"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"deleted_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"novel_pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalItems"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}}]}}]}}]}}]} as unknown as DocumentNode<QueryQuery, QueryQueryVariables>;
export const MutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Mutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NovelInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createNovel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"novel_id"}},{"kind":"Field","name":{"kind":"Name","value":"novel_ulid"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"synopsis"}},{"kind":"Field","name":{"kind":"Name","value":"cover_picture_url"}},{"kind":"Field","name":{"kind":"Name","value":"foreword_url"}},{"kind":"Field","name":{"kind":"Name","value":"afterword_url"}},{"kind":"Field","name":{"kind":"Name","value":"setting_url"}},{"kind":"Field","name":{"kind":"Name","value":"note_url"}},{"kind":"Field","name":{"kind":"Name","value":"dictionary_url"}},{"kind":"Field","name":{"kind":"Name","value":"is_anonymous"}},{"kind":"Field","name":{"kind":"Name","value":"is_publish"}},{"kind":"Field","name":{"kind":"Name","value":"is_ranking_visible"}},{"kind":"Field","name":{"kind":"Name","value":"is_completed"}},{"kind":"Field","name":{"kind":"Name","value":"is_comment"}},{"kind":"Field","name":{"kind":"Name","value":"is_comment_publish"}},{"kind":"Field","name":{"kind":"Name","value":"first_novel_publish_at"}},{"kind":"Field","name":{"kind":"Name","value":"first_name_publish_at"}},{"kind":"Field","name":{"kind":"Name","value":"first_completed_at"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"deleted_at"}}]}}]}}]} as unknown as DocumentNode<MutationMutation, MutationMutationVariables>;