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

export type Content = {
  __typename?: 'Content';
  content?: Maybe<Scalars['String']['output']>;
  content_id?: Maybe<Scalars['Int']['output']>;
  content_url?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['String']['output']>;
  destination_url?: Maybe<Scalars['String']['output']>;
  information_type?: Maybe<Scalars['Int']['output']>;
  position_type?: Maybe<Scalars['Int']['output']>;
  publication_finish_at?: Maybe<Scalars['String']['output']>;
  publication_start_at?: Maybe<Scalars['String']['output']>;
  sort_order?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
};

export type CreateUserMutationResponse = MutationResponse & {
  __typename?: 'CreateUserMutationResponse';
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  user?: Maybe<User>;
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

export type EpisodePagination = {
  __typename?: 'EpisodePagination';
  currentPage?: Maybe<Scalars['Int']['output']>;
  episodes?: Maybe<Array<Episode>>;
  totalItems?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type EpisodeResponse = {
  __typename?: 'EpisodeResponse';
  episode?: Maybe<Episode>;
  totalEpisodes?: Maybe<Scalars['Int']['output']>;
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

export type EventComment = {
  __typename?: 'EventComment';
  comment?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['String']['output']>;
  event_comment_id: Scalars['ID']['output'];
  event_id: Scalars['Int']['output'];
  is_official_allow?: Maybe<Scalars['Boolean']['output']>;
  response_comment_id?: Maybe<Scalars['Int']['output']>;
  score?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  user_id: Scalars['Int']['output'];
};

export type EventCommentInputCreate = {
  comment?: InputMaybe<Scalars['String']['input']>;
  event_id: Scalars['Int']['input'];
  is_official_allow?: InputMaybe<Scalars['Boolean']['input']>;
  response_comment_id?: InputMaybe<Scalars['Int']['input']>;
  score?: InputMaybe<Scalars['Int']['input']>;
  user_id: Scalars['Int']['input'];
};

export type EventCommentInputUpdate = {
  comment?: InputMaybe<Scalars['String']['input']>;
  event_id: Scalars['Int']['input'];
  is_official_allow?: InputMaybe<Scalars['Boolean']['input']>;
  response_comment_id?: InputMaybe<Scalars['Int']['input']>;
  score?: InputMaybe<Scalars['Int']['input']>;
  user_id: Scalars['Int']['input'];
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

export type EventParticipant = {
  __typename?: 'EventParticipant';
  created_at?: Maybe<Scalars['DateTime']['output']>;
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  event_id?: Maybe<Scalars['Int']['output']>;
  novel_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type ExportCsvSuccess = {
  __typename?: 'ExportCSVSuccess';
  csvString?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
};

export type FilterNovel = {
  searchValue?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type LoginInput = {
  account_id?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  token?: Maybe<Scalars['String']['output']>;
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

export type MatchNovel = {
  __typename?: 'MatchNovel';
  created_at?: Maybe<Scalars['DateTime']['output']>;
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  is_post?: Maybe<Scalars['Boolean']['output']>;
  match_id?: Maybe<Scalars['Int']['output']>;
  novel_id?: Maybe<Scalars['Int']['output']>;
  result_type?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  vote_count?: Maybe<Scalars['Int']['output']>;
};

export type MatchNovelCreate = {
  is_post?: InputMaybe<Scalars['Boolean']['input']>;
  match_id?: InputMaybe<Scalars['Int']['input']>;
  novel_id?: InputMaybe<Scalars['Int']['input']>;
  result_type?: InputMaybe<Scalars['Int']['input']>;
  vote_count?: InputMaybe<Scalars['Int']['input']>;
};

export type MatchNovelUpdate = {
  is_post?: InputMaybe<Scalars['Boolean']['input']>;
  result_type?: InputMaybe<Scalars['Int']['input']>;
  vote_count?: InputMaybe<Scalars['Int']['input']>;
};

export type MatchVote = {
  __typename?: 'MatchVote';
  created_at?: Maybe<Scalars['DateTime']['output']>;
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  is_titaling?: Maybe<Scalars['Boolean']['output']>;
  match_vote_id?: Maybe<Scalars['Int']['output']>;
  novel_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  vote_count?: Maybe<Scalars['Int']['output']>;
};

export type MatchVoteCreate = {
  is_titaling?: InputMaybe<Scalars['Boolean']['input']>;
  match_vote_id?: InputMaybe<Scalars['Int']['input']>;
  novel_id?: InputMaybe<Scalars['Int']['input']>;
  vote_count?: InputMaybe<Scalars['Int']['input']>;
};

export type MatchVoteUpdate = {
  is_titaling?: InputMaybe<Scalars['Boolean']['input']>;
  vote_count?: InputMaybe<Scalars['Int']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createEpisode?: Maybe<Episode>;
  createEvent?: Maybe<Event>;
  createEventComment?: Maybe<EventComment>;
  createEventParticipant?: Maybe<EventParticipant>;
  createMatch?: Maybe<Match>;
  createMatchNovel?: Maybe<MatchNovel>;
  createMatchVote?: Maybe<MatchVote>;
  createNovel?: Maybe<Novel>;
  createNovelComment?: Maybe<NovelComment>;
  createOfficialBadge?: Maybe<OfficialBadge>;
  createOfficialTag?: Maybe<OfficialTag>;
  createRound?: Maybe<Round>;
  createUser: CreateUserMutationResponse;
  createUserBadge?: Maybe<UserBadges>;
  createUserBookmark?: Maybe<UserBookmark>;
  createUserLike?: Maybe<UserLike>;
  deleteEpisode?: Maybe<Scalars['String']['output']>;
  deleteEvent?: Maybe<Scalars['String']['output']>;
  deleteEventComment?: Maybe<Scalars['String']['output']>;
  deleteEventParticipant?: Maybe<Scalars['String']['output']>;
  deleteMatch?: Maybe<Match>;
  deleteMatchNovel?: Maybe<Scalars['String']['output']>;
  deleteMatchVote?: Maybe<Scalars['String']['output']>;
  deleteNovel?: Maybe<Scalars['String']['output']>;
  deleteNovelComment?: Maybe<NovelComment>;
  deleteOfficialBadge?: Maybe<Scalars['String']['output']>;
  deleteOfficialTag?: Maybe<Scalars['String']['output']>;
  deleteRound?: Maybe<Scalars['String']['output']>;
  deleteUserBadge?: Maybe<UserBadges>;
  deleteUserBookmark?: Maybe<Scalars['String']['output']>;
  deleteUserLike?: Maybe<Scalars['String']['output']>;
  exportCSV?: Maybe<ExportCsvSuccess>;
  toggleUserBookmark?: Maybe<UserBookmarkNovelResponse>;
  toggleUserLike?: Maybe<UserLikeNovelResponse>;
  updateEpisode?: Maybe<Episode>;
  updateEvent?: Maybe<Event>;
  updateEventComment?: Maybe<EventComment>;
  updateMatch?: Maybe<Array<Maybe<Match>>>;
  updateMatchNovel?: Maybe<MatchNovel>;
  updateMatchVote?: Maybe<MatchVote>;
  updateMultipleRound?: Maybe<Scalars['String']['output']>;
  updateNovel?: Maybe<Novel>;
  updateNovelComment?: Maybe<Array<Maybe<NovelComment>>>;
  updateOfficialBadge?: Maybe<OfficialBadge>;
  updateOfficialTag?: Maybe<OfficialTag>;
  updateRound?: Maybe<Round>;
};


export type MutationCreateEpisodeArgs = {
  input: EpisodeInput;
};


export type MutationCreateEventArgs = {
  input: EventInput;
};


export type MutationCreateEventCommentArgs = {
  input?: InputMaybe<EventCommentInputCreate>;
};


export type MutationCreateEventParticipantArgs = {
  event_id?: InputMaybe<Scalars['Int']['input']>;
  novel_id?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationCreateMatchArgs = {
  match_name: Scalars['String']['input'];
  match_uuid: Scalars['String']['input'];
  round_id: Scalars['Int']['input'];
  vote_count?: InputMaybe<Scalars['Int']['input']>;
  winner_count?: InputMaybe<Scalars['Int']['input']>;
  winner_type?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationCreateMatchNovelArgs = {
  input?: InputMaybe<MatchNovelCreate>;
};


export type MutationCreateMatchVoteArgs = {
  input?: InputMaybe<MatchVoteCreate>;
};


export type MutationCreateNovelArgs = {
  input: NovelInput;
};


export type MutationCreateNovelCommentArgs = {
  comment?: InputMaybe<Scalars['String']['input']>;
  episode_id?: InputMaybe<Scalars['Int']['input']>;
  is_official_allow?: InputMaybe<Scalars['Int']['input']>;
  is_publish?: InputMaybe<Scalars['Int']['input']>;
  novel_id: Scalars['Int']['input'];
  response_comment_id?: InputMaybe<Scalars['Int']['input']>;
  score?: InputMaybe<Scalars['Int']['input']>;
  user_id: Scalars['Int']['input'];
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


export type MutationCreateUserBookmarkArgs = {
  novel_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationCreateUserLikeArgs = {
  novel_id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationDeleteEpisodeArgs = {
  episode_id: Scalars['Int']['input'];
};


export type MutationDeleteEventArgs = {
  event_id: Scalars['Int']['input'];
};


export type MutationDeleteEventCommentArgs = {
  event_comment_id: Scalars['ID']['input'];
};


export type MutationDeleteEventParticipantArgs = {
  event_id?: InputMaybe<Scalars['Int']['input']>;
  novel_id?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationDeleteMatchArgs = {
  match_id: Scalars['ID']['input'];
};


export type MutationDeleteMatchNovelArgs = {
  match_id?: InputMaybe<Scalars['Int']['input']>;
  novel_id?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationDeleteMatchVoteArgs = {
  match_vote_id?: InputMaybe<Scalars['Int']['input']>;
  novel_id?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationDeleteNovelArgs = {
  novel_id: Scalars['Int']['input'];
};


export type MutationDeleteNovelCommentArgs = {
  novel_comment_id: Scalars['ID']['input'];
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


export type MutationDeleteUserBookmarkArgs = {
  novel_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationDeleteUserLikeArgs = {
  novel_id?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationExportCsvArgs = {
  modelName?: InputMaybe<Scalars['String']['input']>;
};


export type MutationToggleUserBookmarkArgs = {
  episodeId?: InputMaybe<Scalars['Int']['input']>;
  novelId: Scalars['Int']['input'];
};


export type MutationToggleUserLikeArgs = {
  novelId: Scalars['Int']['input'];
};


export type MutationUpdateEpisodeArgs = {
  episode_id: Scalars['Int']['input'];
  input: EpisodeInput;
};


export type MutationUpdateEventArgs = {
  event_id: Scalars['Int']['input'];
  input: EventInput;
};


export type MutationUpdateEventCommentArgs = {
  event_comment_id?: InputMaybe<Scalars['Int']['input']>;
  input: EventCommentInputUpdate;
};


export type MutationUpdateMatchArgs = {
  updates: Array<UpdateMatchInput>;
};


export type MutationUpdateMatchNovelArgs = {
  input?: InputMaybe<MatchNovelUpdate>;
  match_id?: InputMaybe<Scalars['Int']['input']>;
  novel_id?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateMatchVoteArgs = {
  input?: InputMaybe<MatchVoteUpdate>;
  match_vote_id?: InputMaybe<Scalars['Int']['input']>;
  novel_id?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateMultipleRoundArgs = {
  event_id: Scalars['Int']['input'];
  input: RoundInput;
};


export type MutationUpdateNovelArgs = {
  input: NovelInput;
  novel_id: Scalars['Int']['input'];
};


export type MutationUpdateNovelCommentArgs = {
  updates: Array<NovelCommentInput>;
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

export type MutationResponse = {
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type Novel = {
  __typename?: 'Novel';
  afterword_url?: Maybe<Scalars['String']['output']>;
  author?: Maybe<Scalars['String']['output']>;
  badges?: Maybe<Scalars['Int']['output']>;
  bookmarks?: Maybe<Scalars['Int']['output']>;
  comments?: Maybe<Scalars['Int']['output']>;
  cover_picture_url?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  dictionary_url?: Maybe<Scalars['String']['output']>;
  episode_count?: Maybe<Scalars['Int']['output']>;
  episodes?: Maybe<Array<Maybe<Episode>>>;
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
  likes?: Maybe<Scalars['Int']['output']>;
  note_url?: Maybe<Scalars['String']['output']>;
  novel_badges?: Maybe<Array<Maybe<OfficialBadge>>>;
  novel_comments?: Maybe<Array<Maybe<NovelComment>>>;
  novel_id?: Maybe<Scalars['Int']['output']>;
  novel_ulid?: Maybe<Scalars['String']['output']>;
  rank?: Maybe<Rank>;
  setting_url?: Maybe<Scalars['String']['output']>;
  synopsis?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Maybe<OfficialTag>>>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
  user_bookmarks?: Maybe<Array<Maybe<User>>>;
  user_id?: Maybe<Scalars['Int']['output']>;
  user_likes?: Maybe<Array<Maybe<User>>>;
};

export type NovelComment = {
  __typename?: 'NovelComment';
  comment?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['String']['output']>;
  episode_id?: Maybe<Scalars['Int']['output']>;
  is_official_allow?: Maybe<Scalars['Int']['output']>;
  is_publish?: Maybe<Scalars['Int']['output']>;
  novel_comment_id: Scalars['ID']['output'];
  novel_id: Scalars['Int']['output'];
  response_comment_id?: Maybe<Scalars['Int']['output']>;
  score?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  user_id: Scalars['Int']['output'];
};

export type NovelCommentInput = {
  episode_id?: InputMaybe<Scalars['Int']['input']>;
  is_official_allow?: InputMaybe<Scalars['Int']['input']>;
  is_publish?: InputMaybe<Scalars['Int']['input']>;
  match_name?: InputMaybe<Scalars['String']['input']>;
  novel_comment_id: Scalars['ID']['input'];
  novel_id: Scalars['Int']['input'];
  response_comment_id?: InputMaybe<Scalars['Int']['input']>;
  score?: InputMaybe<Scalars['Int']['input']>;
  user_id: Scalars['Int']['input'];
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

export type NovelLikePaginate = {
  __typename?: 'NovelLikePaginate';
  currentPage?: Maybe<Scalars['Int']['output']>;
  novels?: Maybe<Array<Maybe<Novel>>>;
  totalItems?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type NovelList = {
  __typename?: 'NovelList';
  author?: Maybe<Scalars['String']['output']>;
  badges?: Maybe<Array<Maybe<OfficialBadge>>>;
  bookmarks?: Maybe<Scalars['Int']['output']>;
  comments?: Maybe<Scalars['Int']['output']>;
  cover_picture_url?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  episode_count?: Maybe<Scalars['Int']['output']>;
  episodes?: Maybe<Array<Maybe<Episode>>>;
  first_novel_publish_at?: Maybe<Scalars['DateTime']['output']>;
  is_completed?: Maybe<Scalars['Boolean']['output']>;
  is_publish?: Maybe<Scalars['Boolean']['output']>;
  is_ranking_visible?: Maybe<Scalars['Boolean']['output']>;
  likes?: Maybe<Scalars['Int']['output']>;
  max_updated_at?: Maybe<Scalars['String']['output']>;
  novel_id?: Maybe<Scalars['Int']['output']>;
  novel_ulid?: Maybe<Scalars['String']['output']>;
  rank?: Maybe<Rank>;
  status?: Maybe<Scalars['String']['output']>;
  synopsis?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Maybe<OfficialTag>>>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
  user_bookmarks?: Maybe<Array<Maybe<User>>>;
  user_likes?: Maybe<Array<Maybe<User>>>;
  user_uuid?: Maybe<Scalars['String']['output']>;
};

export type NovelPagination = {
  __typename?: 'NovelPagination';
  currentPage?: Maybe<Scalars['Int']['output']>;
  novels?: Maybe<Array<NovelList>>;
  totalItems?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type NovelResponse = {
  __typename?: 'NovelResponse';
  novels?: Maybe<Array<Maybe<NovelList>>>;
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
  contentsAdvertisement?: Maybe<Array<Maybe<Content>>>;
  contentsBanner?: Maybe<Array<Maybe<Content>>>;
  contentsNoti?: Maybe<Array<Maybe<Content>>>;
  episode?: Maybe<EpisodeResponse>;
  episodes?: Maybe<EpisodePagination>;
  event?: Maybe<Event>;
  events?: Maybe<Array<Maybe<Event>>>;
  getAllMatches?: Maybe<Array<Maybe<Match>>>;
  getAllOfficialBadges?: Maybe<Array<Maybe<OfficialBadge>>>;
  getAllOfficialTags?: Maybe<Array<Maybe<OfficialTag>>>;
  getEventComment?: Maybe<Array<Maybe<EventComment>>>;
  getEventCommentById?: Maybe<EventComment>;
  getEventParticipant?: Maybe<Array<Maybe<EventParticipant>>>;
  getMatchById?: Maybe<Match>;
  getMatchNovel?: Maybe<Array<Maybe<MatchNovel>>>;
  getMatchVote?: Maybe<Array<Maybe<MatchVote>>>;
  getNovelComment?: Maybe<Array<Maybe<NovelComment>>>;
  getNovelCommentById?: Maybe<NovelComment>;
  getNovelsByAuthor?: Maybe<NovelPagination>;
  getNovelsPaginate?: Maybe<NovelPagination>;
  getOfficialBadgeById?: Maybe<OfficialBadge>;
  getOfficialTagById?: Maybe<OfficialTag>;
  getRoundsPaginate?: Maybe<RoundPagination>;
  getUserAndBadge?: Maybe<Array<UserBadges>>;
  getUserBookmark?: Maybe<Array<Maybe<UserBookmark>>>;
  getUserLike?: Maybe<Array<Maybe<UserLike>>>;
  getUsersPaginate?: Maybe<UserPagination>;
  login?: Maybe<LoginResponse>;
  novel?: Maybe<NovelList>;
  novels?: Maybe<NovelResponse>;
  round?: Maybe<Round>;
  rounds?: Maybe<Array<Maybe<Round>>>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
  verifyToken: VerifyTokenResponse;
};


export type QueryContentsAdvertisementArgs = {
  type: Scalars['Int']['input'];
};


export type QueryContentsBannerArgs = {
  type: Scalars['Int']['input'];
};


export type QueryContentsNotiArgs = {
  type: Scalars['Int']['input'];
};


export type QueryEpisodeArgs = {
  episodeId: Scalars['Int']['input'];
  novelId: Scalars['Int']['input'];
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryEpisodesArgs = {
  episodeId?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  novelId: Scalars['Int']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryEventArgs = {
  event_id: Scalars['Int']['input'];
};


export type QueryGetEventCommentByIdArgs = {
  novel_comment_id: Scalars['ID']['input'];
};


export type QueryGetMatchByIdArgs = {
  match_id: Scalars['ID']['input'];
};


export type QueryGetNovelCommentByIdArgs = {
  novel_comment_id: Scalars['ID']['input'];
};


export type QueryGetNovelsByAuthorArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryGetNovelsPaginateArgs = {
  filter?: InputMaybe<FilterNovel>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetOfficialBadgeByIdArgs = {
  badge: Scalars['ID']['input'];
};


export type QueryGetOfficialTagByIdArgs = {
  tag_id: Scalars['ID']['input'];
};


export type QueryGetRoundsPaginateArgs = {
  filter?: InputMaybe<FilterRound>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetUsersPaginateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryLoginArgs = {
  input: LoginInput;
};


export type QueryNovelArgs = {
  novel_id: Scalars['Int']['input'];
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryNovelsArgs = {
  type?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRoundArgs = {
  round_id: Scalars['Int']['input'];
};


export type QueryRoundsArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUserArgs = {
  userId: Scalars['Int']['input'];
};


export type QueryVerifyTokenArgs = {
  token: Scalars['String']['input'];
};

export type Rank = {
  __typename?: 'Rank';
  cumulative?: Maybe<Scalars['Int']['output']>;
  daily?: Maybe<Scalars['Int']['output']>;
  hot?: Maybe<Scalars['Int']['output']>;
  monthly?: Maybe<Scalars['Int']['output']>;
  quarterly?: Maybe<Scalars['Int']['output']>;
  weekly?: Maybe<Scalars['Int']['output']>;
  yearly?: Maybe<Scalars['Int']['output']>;
};

export type Round = {
  __typename?: 'Round';
  created_at?: Maybe<Scalars['DateTime']['output']>;
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  event?: Maybe<Event>;
  event_id?: Maybe<Scalars['Int']['output']>;
  is_current?: Maybe<Scalars['Int']['output']>;
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
  is_current?: InputMaybe<Scalars['Int']['input']>;
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

export type RoundPagination = {
  __typename?: 'RoundPagination';
  currentPage?: Maybe<Scalars['Int']['output']>;
  rounds?: Maybe<Array<Round>>;
  totalItems?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
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
  novel_bookmark?: Maybe<Array<Maybe<Novel>>>;
  novel_like?: Maybe<NovelLikePaginate>;
  novelsPaginate?: Maybe<NovelPagination>;
  s3_url: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  user_badges?: Maybe<Array<Maybe<OfficialBadge>>>;
  user_id: Scalars['ID']['output'];
  user_uuid: Scalars['String']['output'];
};


export type UserNovel_LikeArgs = {
  limitNovelLike?: InputMaybe<Scalars['Int']['input']>;
  pageNovelLike?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type UserNovelsPaginateArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type UserBadges = {
  __typename?: 'UserBadges';
  badges_id?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

export type UserBookmark = {
  __typename?: 'UserBookmark';
  created_at?: Maybe<Scalars['DateTime']['output']>;
  deleted_at?: Maybe<Scalars['DateTime']['output']>;
  novel_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

export type UserBookmarkNovelResponse = MutationResponse & {
  __typename?: 'UserBookmarkNovelResponse';
  isBookmark?: Maybe<Scalars['Boolean']['output']>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
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
  novel_id: Array<Maybe<Scalars['Int']['output']>>;
  user_id: Scalars['Int']['output'];
};

export type UserLikeNovelResponse = MutationResponse & {
  __typename?: 'UserLikeNovelResponse';
  isFavorite?: Maybe<Scalars['Boolean']['output']>;
  likedCount?: Maybe<Scalars['Int']['output']>;
  message: Scalars['String']['output'];
  novel_id?: Maybe<Scalars['Int']['output']>;
  success: Scalars['Boolean']['output'];
};

export type UserPagination = {
  __typename?: 'UserPagination';
  currentPage?: Maybe<Scalars['Int']['output']>;
  totalItems?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
  users?: Maybe<Array<User>>;
};

export type VerifyTokenResponse = {
  __typename?: 'VerifyTokenResponse';
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type CreateUserInput = {
  first_login_at: Scalars['DateTime']['input'];
  last_login_at: Scalars['DateTime']['input'];
  name: Scalars['String']['input'];
  s3_url: Scalars['String']['input'];
  user_uuid: Scalars['String']['input'];
};

export type FilterRound = {
  isColiseum?: InputMaybe<Scalars['Boolean']['input']>;
  isLeageMatch?: InputMaybe<Scalars['Boolean']['input']>;
  searchValue?: InputMaybe<Scalars['String']['input']>;
};

export type LoginQueryVariables = Exact<{
  input: LoginInput;
}>;


export type LoginQuery = { __typename?: 'Query', login?: { __typename?: 'LoginResponse', token?: string | null } | null };

export type VerifyTokenQueryVariables = Exact<{
  token: Scalars['String']['input'];
}>;


export type VerifyTokenQuery = { __typename?: 'Query', verifyToken: { __typename?: 'VerifyTokenResponse', success: boolean, message?: string | null } };

export type CreateNovelCommentMutationVariables = Exact<{
  userId: Scalars['Int']['input'];
  novelId: Scalars['Int']['input'];
  comment?: InputMaybe<Scalars['String']['input']>;
  episodeId?: InputMaybe<Scalars['Int']['input']>;
  score?: InputMaybe<Scalars['Int']['input']>;
  isOfficialAllow?: InputMaybe<Scalars['Int']['input']>;
  isPublish?: InputMaybe<Scalars['Int']['input']>;
  responseCommentId?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CreateNovelCommentMutation = { __typename?: 'Mutation', createNovelComment?: { __typename?: 'NovelComment', novel_comment_id: string, user_id: number, novel_id: number, episode_id?: number | null, comment?: string | null, score?: number | null, is_official_allow?: number | null, is_publish?: number | null, response_comment_id?: number | null, created_at?: string | null, updated_at?: string | null, deleted_at?: string | null } | null };

export type SlideBannerQueryVariables = Exact<{
  type: Scalars['Int']['input'];
}>;


export type SlideBannerQuery = { __typename?: 'Query', contentsBanner?: Array<{ __typename?: 'Content', content_url?: string | null, destination_url?: string | null } | null> | null };

export type ContentsNotiQueryVariables = Exact<{
  type: Scalars['Int']['input'];
}>;


export type ContentsNotiQuery = { __typename?: 'Query', contentsNoti?: Array<{ __typename?: 'Content', title?: string | null, content_url?: string | null, destination_url?: string | null, information_type?: number | null, content?: string | null, publication_start_at?: string | null } | null> | null };

export type ContentsAdvertisementQueryVariables = Exact<{
  type: Scalars['Int']['input'];
}>;


export type ContentsAdvertisementQuery = { __typename?: 'Query', contentsAdvertisement?: Array<{ __typename?: 'Content', content_url?: string | null, destination_url?: string | null } | null> | null };

export type EpisodesQueryVariables = Exact<{
  novelId: Scalars['Int']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  episodeId?: InputMaybe<Scalars['Int']['input']>;
}>;


export type EpisodesQuery = { __typename?: 'Query', episodes?: { __typename?: 'EpisodePagination', totalItems?: number | null, totalPages?: number | null, currentPage?: number | null, episodes?: Array<{ __typename?: 'Episode', episode_id?: number | null, episode_ulid?: string | null, episode_title?: string | null, episode_type?: number | null, order?: number | null, episode_url?: string | null, is_publish?: boolean | null, publish_at?: any | null, first_novel_publish_at?: any | null, created_at?: any | null, updated_at?: any | null, deleted_at?: any | null }> | null } | null };

export type MutationMutationVariables = Exact<{
  input: NovelInput;
}>;


export type MutationMutation = { __typename?: 'Mutation', createNovel?: { __typename?: 'Novel', novel_id?: number | null, novel_ulid?: string | null, user_id?: number | null, title?: string | null, synopsis?: string | null, cover_picture_url?: string | null, foreword_url?: string | null, afterword_url?: string | null, setting_url?: string | null, note_url?: string | null, dictionary_url?: string | null, is_anonymous?: boolean | null, is_publish?: boolean | null, is_ranking_visible?: boolean | null, is_completed?: boolean | null, is_comment?: boolean | null, is_comment_publish?: boolean | null, first_novel_publish_at?: any | null, first_name_publish_at?: any | null, first_completed_at?: any | null, created_at?: any | null, updated_at?: any | null, deleted_at?: any | null } | null };

export type ToggleUserLikeMutationVariables = Exact<{
  novelId: Scalars['Int']['input'];
}>;


export type ToggleUserLikeMutation = { __typename?: 'Mutation', toggleUserLike?: { __typename?: 'UserLikeNovelResponse', success: boolean, message: string, novel_id?: number | null, likedCount?: number | null, isFavorite?: boolean | null } | null };

export type ToggleUserBookmarkMutationVariables = Exact<{
  novelId: Scalars['Int']['input'];
}>;


export type ToggleUserBookmarkMutation = { __typename?: 'Mutation', toggleUserBookmark?: { __typename?: 'UserBookmarkNovelResponse', success: boolean, message: string, isBookmark?: boolean | null } | null };

export type GetNovelsPaginateHomeQueryVariables = Exact<{
  type?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FilterNovel>;
  page?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetNovelsPaginateHomeQuery = { __typename?: 'Query', getNovelsPaginate?: { __typename?: 'NovelPagination', totalPages?: number | null, totalItems?: number | null, currentPage?: number | null, novels?: Array<{ __typename?: 'NovelList', novel_id?: number | null, novel_ulid?: string | null, title?: string | null, synopsis?: string | null, cover_picture_url?: string | null, user_uuid?: string | null, first_novel_publish_at?: any | null, max_updated_at?: string | null, episode_count?: number | null, likes?: number | null, bookmarks?: number | null, comments?: number | null, is_completed?: boolean | null, created_at?: any | null, rank?: { __typename?: 'Rank', hot?: number | null } | null, user?: { __typename?: 'User', user_id: string, name: string } | null, user_likes?: Array<{ __typename?: 'User', user_id: string, name: string } | null> | null, user_bookmarks?: Array<{ __typename?: 'User', user_id: string } | null> | null, badges?: Array<{ __typename?: 'OfficialBadge', badges_name?: string | null } | null> | null, tags?: Array<{ __typename?: 'OfficialTag', tag?: string | null } | null> | null }> | null } | null };

export type QueryQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FilterNovel>;
}>;


export type QueryQuery = { __typename?: 'Query', getNovelsPaginate?: { __typename?: 'NovelPagination', totalItems?: number | null, totalPages?: number | null, currentPage?: number | null, novels?: Array<{ __typename?: 'NovelList', novel_id?: number | null, novel_ulid?: string | null, title?: string | null, synopsis?: string | null, cover_picture_url?: string | null, user_uuid?: string | null, author?: string | null, first_novel_publish_at?: any | null, max_updated_at?: string | null, episode_count?: number | null, likes?: number | null, bookmarks?: number | null, comments?: number | null, is_completed?: boolean | null, created_at?: any | null, rank?: { __typename?: 'Rank', hot?: number | null, monthly?: number | null, quarterly?: number | null, weekly?: number | null, yearly?: number | null, daily?: number | null, cumulative?: number | null } | null, user?: { __typename?: 'User', user_id: string, name: string } | null, user_likes?: Array<{ __typename?: 'User', user_id: string } | null> | null, badges?: Array<{ __typename?: 'OfficialBadge', badges_name?: string | null } | null> | null, tags?: Array<{ __typename?: 'OfficialTag', tag?: string | null } | null> | null, user_bookmarks?: Array<{ __typename?: 'User', user_id: string } | null> | null }> | null } | null };

export type NovelQueryVariables = Exact<{
  novelId: Scalars['Int']['input'];
  type?: InputMaybe<Scalars['String']['input']>;
}>;


export type NovelQuery = { __typename?: 'Query', novel?: { __typename?: 'NovelList', novel_id?: number | null, novel_ulid?: string | null, title?: string | null, cover_picture_url?: string | null, user_uuid?: string | null, author?: string | null, synopsis?: string | null, first_novel_publish_at?: any | null, max_updated_at?: string | null, episode_count?: number | null, likes?: number | null, bookmarks?: number | null, comments?: number | null, is_completed?: boolean | null, created_at?: any | null, updated_at?: any | null, is_ranking_visible?: boolean | null, is_publish?: boolean | null, user?: { __typename?: 'User', user_id: string, name: string } | null, rank?: { __typename?: 'Rank', hot?: number | null, daily?: number | null, weekly?: number | null, monthly?: number | null, quarterly?: number | null, yearly?: number | null, cumulative?: number | null } | null, user_likes?: Array<{ __typename?: 'User', user_id: string } | null> | null, user_bookmarks?: Array<{ __typename?: 'User', user_id: string } | null> | null, badges?: Array<{ __typename?: 'OfficialBadge', badges_name?: string | null } | null> | null, tags?: Array<{ __typename?: 'OfficialTag', tag?: string | null } | null> | null, episodes?: Array<{ __typename?: 'Episode', episode_id?: number | null, episode_title?: string | null, is_publish?: boolean | null, publish_at?: any | null, first_novel_publish_at?: any | null, updated_at?: any | null } | null> | null } | null };

export type NovelCreateOrUpdateQueryVariables = Exact<{
  type?: InputMaybe<Scalars['Int']['input']>;
}>;


export type NovelCreateOrUpdateQuery = { __typename?: 'Query', novels?: { __typename?: 'NovelResponse', novels?: Array<{ __typename?: 'NovelList', novel_id?: number | null, novel_ulid?: string | null, title?: string | null, synopsis?: string | null, cover_picture_url?: string | null, user_uuid?: string | null, author?: string | null, is_publish?: boolean | null, is_ranking_visible?: boolean | null, first_novel_publish_at?: any | null, max_updated_at?: string | null, episode_count?: number | null, likes?: number | null, bookmarks?: number | null, comments?: number | null, is_completed?: boolean | null, created_at?: any | null, updated_at?: any | null, user?: { __typename?: 'User', name: string, user_id: string } | null, user_likes?: Array<{ __typename?: 'User', user_id: string } | null> | null, user_bookmarks?: Array<{ __typename?: 'User', user_id: string } | null> | null, badges?: Array<{ __typename?: 'OfficialBadge', badges_name?: string | null } | null> | null, tags?: Array<{ __typename?: 'OfficialTag', tag?: string | null } | null> | null } | null> | null } | null };

export type CreateRoundMutationVariables = Exact<{
  input: RoundInput;
}>;


export type CreateRoundMutation = { __typename?: 'Mutation', createRound?: { __typename?: 'Round', round_id?: number | null, ulid?: string | null, round_name?: string | null, round_start_at?: any | null, round_type?: number | null } | null };

export type ExportCsvMutationVariables = Exact<{
  modelName?: InputMaybe<Scalars['String']['input']>;
}>;


export type ExportCsvMutation = { __typename?: 'Mutation', exportCSV?: { __typename?: 'ExportCSVSuccess', csvString?: string | null, fileName?: string | null } | null };

export type DeleteRoundMutationVariables = Exact<{
  roundId: Scalars['Int']['input'];
}>;


export type DeleteRoundMutation = { __typename?: 'Mutation', deleteRound?: string | null };

export type UpdateRoundMutationVariables = Exact<{
  roundId: Scalars['Int']['input'];
  input: RoundInput;
}>;


export type UpdateRoundMutation = { __typename?: 'Mutation', updateRound?: { __typename?: 'Round', round_id?: number | null, event_id?: number | null, ulid?: string | null, round_name?: string | null, round_order?: number | null, round_start_at?: any | null, round_finish_at?: any | null, vote_start_at?: any | null, vote_finish_at?: any | null, round_type?: number | null, is_current?: number | null, winner_count?: number | null, min_word_count?: number | null, max_word_count?: number | null, tag?: string | null, created_at?: any | null, updated_at?: any | null, deleted_at?: any | null } | null };

export type RoundQueryVariables = Exact<{
  roundId: Scalars['Int']['input'];
}>;


export type RoundQuery = { __typename?: 'Query', round?: { __typename?: 'Round', round_id?: number | null, event_id?: number | null, ulid?: string | null, round_name?: string | null, round_type?: number | null, round_order?: number | null, round_start_at?: any | null, round_finish_at?: any | null, vote_start_at?: any | null, vote_finish_at?: any | null, is_current?: number | null, winner_count?: number | null, min_word_count?: number | null, max_word_count?: number | null, tag?: string | null, created_at?: any | null, updated_at?: any | null, deleted_at?: any | null } | null };

export type RoundsQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
}>;


export type RoundsQuery = { __typename?: 'Query', rounds?: Array<{ __typename?: 'Round', round_id?: number | null, round_name?: string | null, round_start_at?: any | null, round_type?: number | null } | null> | null };

export type GetRoundsQueryVariables = Exact<{
  page: Scalars['Int']['input'];
  limit: Scalars['Int']['input'];
  filter?: InputMaybe<FilterRound>;
}>;


export type GetRoundsQuery = { __typename?: 'Query', getRoundsPaginate?: { __typename?: 'RoundPagination', totalItems?: number | null, totalPages?: number | null, currentPage?: number | null, rounds?: Array<{ __typename?: 'Round', round_id?: number | null, round_name?: string | null, round_start_at?: any | null, round_type?: number | null }> | null } | null };

export type GetAllOfficialTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllOfficialTagsQuery = { __typename?: 'Query', getAllOfficialTags?: Array<{ __typename?: 'OfficialTag', tag_id: string, tag_ulid?: string | null, tag?: string | null, start_at?: any | null, finish_at?: any | null, created_at?: any | null, updated_at?: any | null, deleted_at?: any | null } | null> | null };

export type GetUsersQueryVariables = Exact<{
  page: Scalars['Int']['input'];
  limit: Scalars['Int']['input'];
}>;


export type GetUsersQuery = { __typename?: 'Query', getUsersPaginate?: { __typename?: 'UserPagination', totalItems?: number | null, totalPages?: number | null, currentPage?: number | null, users?: Array<{ __typename?: 'User', user_id: string, name: string }> | null } | null };

export type GetUsersBaseQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersBaseQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', user_id: string, user_uuid: string, name: string, s3_url: string, first_login_at: any, last_login_at: any, created_at?: any | null, updated_at?: any | null, deleted_at?: any | null } | null> | null };

export type UserQueryVariables = Exact<{
  userId: Scalars['Int']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageNovelLike?: InputMaybe<Scalars['Int']['input']>;
  limitNovelLike?: InputMaybe<Scalars['Int']['input']>;
}>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'User', user_id: string, novelsPaginate?: { __typename?: 'NovelPagination', totalItems?: number | null, totalPages?: number | null, currentPage?: number | null, novels?: Array<{ __typename?: 'NovelList', novel_id?: number | null, title?: string | null, cover_picture_url?: string | null, likes?: number | null, first_novel_publish_at?: any | null, bookmarks?: number | null, user_likes?: Array<{ __typename?: 'User', user_id: string } | null> | null, user_bookmarks?: Array<{ __typename?: 'User', user_id: string } | null> | null, episodes?: Array<{ __typename?: 'Episode', episode_id?: number | null, episode_title?: string | null, is_publish?: boolean | null, created_at?: any | null, updated_at?: any | null, publish_at?: any | null } | null> | null }> | null } | null, novel_like?: { __typename?: 'NovelLikePaginate', totalItems?: number | null, totalPages?: number | null, currentPage?: number | null, novels?: Array<{ __typename?: 'Novel', novel_id?: number | null, title?: string | null, cover_picture_url?: string | null, likes?: number | null, first_novel_publish_at?: any | null, bookmarks?: number | null, user_likes?: Array<{ __typename?: 'User', user_id: string } | null> | null, user_bookmarks?: Array<{ __typename?: 'User', user_id: string } | null> | null, episodes?: Array<{ __typename?: 'Episode', episode_id?: number | null, episode_title?: string | null, is_publish?: boolean | null, created_at?: any | null, updated_at?: any | null, publish_at?: any | null } | null> | null } | null> | null } | null } | null };


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<LoginQuery, LoginQueryVariables>;
export const VerifyTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"VerifyToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<VerifyTokenQuery, VerifyTokenQueryVariables>;
export const CreateNovelCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateNovelComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"novelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"comment"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"episodeId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"score"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isOfficialAllow"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isPublish"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"responseCommentId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createNovelComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"user_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"novel_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"novelId"}}},{"kind":"Argument","name":{"kind":"Name","value":"comment"},"value":{"kind":"Variable","name":{"kind":"Name","value":"comment"}}},{"kind":"Argument","name":{"kind":"Name","value":"episode_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"episodeId"}}},{"kind":"Argument","name":{"kind":"Name","value":"score"},"value":{"kind":"Variable","name":{"kind":"Name","value":"score"}}},{"kind":"Argument","name":{"kind":"Name","value":"is_official_allow"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isOfficialAllow"}}},{"kind":"Argument","name":{"kind":"Name","value":"is_publish"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isPublish"}}},{"kind":"Argument","name":{"kind":"Name","value":"response_comment_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"responseCommentId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"novel_comment_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"novel_id"}},{"kind":"Field","name":{"kind":"Name","value":"episode_id"}},{"kind":"Field","name":{"kind":"Name","value":"comment"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"is_official_allow"}},{"kind":"Field","name":{"kind":"Name","value":"is_publish"}},{"kind":"Field","name":{"kind":"Name","value":"response_comment_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"deleted_at"}}]}}]}}]} as unknown as DocumentNode<CreateNovelCommentMutation, CreateNovelCommentMutationVariables>;
export const SlideBannerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SlideBanner"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contentsBanner"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content_url"}},{"kind":"Field","name":{"kind":"Name","value":"destination_url"}}]}}]}}]} as unknown as DocumentNode<SlideBannerQuery, SlideBannerQueryVariables>;
export const ContentsNotiDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ContentsNoti"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contentsNoti"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content_url"}},{"kind":"Field","name":{"kind":"Name","value":"destination_url"}},{"kind":"Field","name":{"kind":"Name","value":"information_type"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"publication_start_at"}},{"kind":"Field","name":{"kind":"Name","value":"information_type"}}]}}]}}]} as unknown as DocumentNode<ContentsNotiQuery, ContentsNotiQueryVariables>;
export const ContentsAdvertisementDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ContentsAdvertisement"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contentsAdvertisement"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content_url"}},{"kind":"Field","name":{"kind":"Name","value":"destination_url"}}]}}]}}]} as unknown as DocumentNode<ContentsAdvertisementQuery, ContentsAdvertisementQueryVariables>;
export const EpisodesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Episodes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"novelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"episodeId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"episodes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"novelId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"novelId"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"episodeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"episodeId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"episodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"episode_id"}},{"kind":"Field","name":{"kind":"Name","value":"episode_ulid"}},{"kind":"Field","name":{"kind":"Name","value":"episode_title"}},{"kind":"Field","name":{"kind":"Name","value":"episode_type"}},{"kind":"Field","name":{"kind":"Name","value":"order"}},{"kind":"Field","name":{"kind":"Name","value":"episode_url"}},{"kind":"Field","name":{"kind":"Name","value":"is_publish"}},{"kind":"Field","name":{"kind":"Name","value":"publish_at"}},{"kind":"Field","name":{"kind":"Name","value":"first_novel_publish_at"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"deleted_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}}]}}]}}]} as unknown as DocumentNode<EpisodesQuery, EpisodesQueryVariables>;
export const MutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Mutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NovelInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createNovel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"novel_id"}},{"kind":"Field","name":{"kind":"Name","value":"novel_ulid"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"synopsis"}},{"kind":"Field","name":{"kind":"Name","value":"cover_picture_url"}},{"kind":"Field","name":{"kind":"Name","value":"foreword_url"}},{"kind":"Field","name":{"kind":"Name","value":"afterword_url"}},{"kind":"Field","name":{"kind":"Name","value":"setting_url"}},{"kind":"Field","name":{"kind":"Name","value":"note_url"}},{"kind":"Field","name":{"kind":"Name","value":"dictionary_url"}},{"kind":"Field","name":{"kind":"Name","value":"is_anonymous"}},{"kind":"Field","name":{"kind":"Name","value":"is_publish"}},{"kind":"Field","name":{"kind":"Name","value":"is_ranking_visible"}},{"kind":"Field","name":{"kind":"Name","value":"is_completed"}},{"kind":"Field","name":{"kind":"Name","value":"is_comment"}},{"kind":"Field","name":{"kind":"Name","value":"is_comment_publish"}},{"kind":"Field","name":{"kind":"Name","value":"first_novel_publish_at"}},{"kind":"Field","name":{"kind":"Name","value":"first_name_publish_at"}},{"kind":"Field","name":{"kind":"Name","value":"first_completed_at"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"deleted_at"}}]}}]}}]} as unknown as DocumentNode<MutationMutation, MutationMutationVariables>;
export const ToggleUserLikeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ToggleUserLike"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"novelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"toggleUserLike"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"novelId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"novelId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"novel_id"}},{"kind":"Field","name":{"kind":"Name","value":"likedCount"}},{"kind":"Field","name":{"kind":"Name","value":"isFavorite"}}]}}]}}]} as unknown as DocumentNode<ToggleUserLikeMutation, ToggleUserLikeMutationVariables>;
export const ToggleUserBookmarkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ToggleUserBookmark"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"novelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"toggleUserBookmark"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"novelId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"novelId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"isBookmark"}}]}}]}}]} as unknown as DocumentNode<ToggleUserBookmarkMutation, ToggleUserBookmarkMutationVariables>;
export const GetNovelsPaginateHomeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getNovelsPaginateHome"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"FilterNovel"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getNovelsPaginate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}},{"kind":"Field","name":{"kind":"Name","value":"novels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"novel_id"}},{"kind":"Field","name":{"kind":"Name","value":"novel_ulid"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"synopsis"}},{"kind":"Field","name":{"kind":"Name","value":"cover_picture_url"}},{"kind":"Field","name":{"kind":"Name","value":"user_uuid"}},{"kind":"Field","name":{"kind":"Name","value":"first_novel_publish_at"}},{"kind":"Field","name":{"kind":"Name","value":"max_updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"episode_count"}},{"kind":"Field","name":{"kind":"Name","value":"likes"}},{"kind":"Field","name":{"kind":"Name","value":"bookmarks"}},{"kind":"Field","name":{"kind":"Name","value":"comments"}},{"kind":"Field","name":{"kind":"Name","value":"is_completed"}},{"kind":"Field","name":{"kind":"Name","value":"rank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hot"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user_likes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user_bookmarks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"badges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"badges_name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tag"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}}]}}]}}]} as unknown as DocumentNode<GetNovelsPaginateHomeQuery, GetNovelsPaginateHomeQueryVariables>;
export const QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Query"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"FilterNovel"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getNovelsPaginate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"novels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"novel_id"}},{"kind":"Field","name":{"kind":"Name","value":"novel_ulid"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"synopsis"}},{"kind":"Field","name":{"kind":"Name","value":"cover_picture_url"}},{"kind":"Field","name":{"kind":"Name","value":"user_uuid"}},{"kind":"Field","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"first_novel_publish_at"}},{"kind":"Field","name":{"kind":"Name","value":"max_updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"episode_count"}},{"kind":"Field","name":{"kind":"Name","value":"likes"}},{"kind":"Field","name":{"kind":"Name","value":"bookmarks"}},{"kind":"Field","name":{"kind":"Name","value":"comments"}},{"kind":"Field","name":{"kind":"Name","value":"is_completed"}},{"kind":"Field","name":{"kind":"Name","value":"rank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hot"}},{"kind":"Field","name":{"kind":"Name","value":"monthly"}},{"kind":"Field","name":{"kind":"Name","value":"quarterly"}},{"kind":"Field","name":{"kind":"Name","value":"weekly"}},{"kind":"Field","name":{"kind":"Name","value":"yearly"}},{"kind":"Field","name":{"kind":"Name","value":"daily"}},{"kind":"Field","name":{"kind":"Name","value":"cumulative"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user_likes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"badges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"badges_name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user_bookmarks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}}]}}]}}]} as unknown as DocumentNode<QueryQuery, QueryQueryVariables>;
export const NovelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Novel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"novelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"novel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"novel_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"novelId"}}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"novel_id"}},{"kind":"Field","name":{"kind":"Name","value":"novel_ulid"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"cover_picture_url"}},{"kind":"Field","name":{"kind":"Name","value":"user_uuid"}},{"kind":"Field","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"synopsis"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"first_novel_publish_at"}},{"kind":"Field","name":{"kind":"Name","value":"max_updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"episode_count"}},{"kind":"Field","name":{"kind":"Name","value":"likes"}},{"kind":"Field","name":{"kind":"Name","value":"bookmarks"}},{"kind":"Field","name":{"kind":"Name","value":"comments"}},{"kind":"Field","name":{"kind":"Name","value":"is_completed"}},{"kind":"Field","name":{"kind":"Name","value":"rank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hot"}},{"kind":"Field","name":{"kind":"Name","value":"daily"}},{"kind":"Field","name":{"kind":"Name","value":"weekly"}},{"kind":"Field","name":{"kind":"Name","value":"monthly"}},{"kind":"Field","name":{"kind":"Name","value":"quarterly"}},{"kind":"Field","name":{"kind":"Name","value":"yearly"}},{"kind":"Field","name":{"kind":"Name","value":"cumulative"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user_likes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user_bookmarks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"badges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"badges_name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"episodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"episode_id"}},{"kind":"Field","name":{"kind":"Name","value":"episode_title"}},{"kind":"Field","name":{"kind":"Name","value":"is_publish"}},{"kind":"Field","name":{"kind":"Name","value":"publish_at"}},{"kind":"Field","name":{"kind":"Name","value":"first_novel_publish_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"is_ranking_visible"}},{"kind":"Field","name":{"kind":"Name","value":"is_publish"}}]}}]}}]} as unknown as DocumentNode<NovelQuery, NovelQueryVariables>;
export const NovelCreateOrUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"novelCreateOrUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"novels"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"novels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"novel_id"}},{"kind":"Field","name":{"kind":"Name","value":"novel_ulid"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"synopsis"}},{"kind":"Field","name":{"kind":"Name","value":"cover_picture_url"}},{"kind":"Field","name":{"kind":"Name","value":"user_uuid"}},{"kind":"Field","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"is_publish"}},{"kind":"Field","name":{"kind":"Name","value":"is_ranking_visible"}},{"kind":"Field","name":{"kind":"Name","value":"first_novel_publish_at"}},{"kind":"Field","name":{"kind":"Name","value":"max_updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"episode_count"}},{"kind":"Field","name":{"kind":"Name","value":"likes"}},{"kind":"Field","name":{"kind":"Name","value":"bookmarks"}},{"kind":"Field","name":{"kind":"Name","value":"comments"}},{"kind":"Field","name":{"kind":"Name","value":"is_completed"}},{"kind":"Field","name":{"kind":"Name","value":"user_likes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user_bookmarks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"badges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"badges_name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tag"}}]}}]}}]}}]}}]} as unknown as DocumentNode<NovelCreateOrUpdateQuery, NovelCreateOrUpdateQueryVariables>;
export const CreateRoundDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateRound"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RoundInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createRound"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"round_id"}},{"kind":"Field","name":{"kind":"Name","value":"ulid"}},{"kind":"Field","name":{"kind":"Name","value":"round_name"}},{"kind":"Field","name":{"kind":"Name","value":"round_start_at"}},{"kind":"Field","name":{"kind":"Name","value":"round_type"}}]}}]}}]} as unknown as DocumentNode<CreateRoundMutation, CreateRoundMutationVariables>;
export const ExportCsvDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"exportCSV"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"modelName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"exportCSV"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"modelName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"modelName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"csvString"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}}]}}]}}]} as unknown as DocumentNode<ExportCsvMutation, ExportCsvMutationVariables>;
export const DeleteRoundDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteRound"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"roundId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteRound"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"round_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"roundId"}}}]}]}}]} as unknown as DocumentNode<DeleteRoundMutation, DeleteRoundMutationVariables>;
export const UpdateRoundDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateRound"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"roundId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RoundInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateRound"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"round_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"roundId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"round_id"}},{"kind":"Field","name":{"kind":"Name","value":"event_id"}},{"kind":"Field","name":{"kind":"Name","value":"ulid"}},{"kind":"Field","name":{"kind":"Name","value":"round_name"}},{"kind":"Field","name":{"kind":"Name","value":"round_order"}},{"kind":"Field","name":{"kind":"Name","value":"round_start_at"}},{"kind":"Field","name":{"kind":"Name","value":"round_finish_at"}},{"kind":"Field","name":{"kind":"Name","value":"vote_start_at"}},{"kind":"Field","name":{"kind":"Name","value":"vote_finish_at"}},{"kind":"Field","name":{"kind":"Name","value":"round_type"}},{"kind":"Field","name":{"kind":"Name","value":"is_current"}},{"kind":"Field","name":{"kind":"Name","value":"winner_count"}},{"kind":"Field","name":{"kind":"Name","value":"min_word_count"}},{"kind":"Field","name":{"kind":"Name","value":"max_word_count"}},{"kind":"Field","name":{"kind":"Name","value":"tag"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"deleted_at"}}]}}]}}]} as unknown as DocumentNode<UpdateRoundMutation, UpdateRoundMutationVariables>;
export const RoundDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Round"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"roundId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"round"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"round_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"roundId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"round_id"}},{"kind":"Field","name":{"kind":"Name","value":"event_id"}},{"kind":"Field","name":{"kind":"Name","value":"ulid"}},{"kind":"Field","name":{"kind":"Name","value":"round_name"}},{"kind":"Field","name":{"kind":"Name","value":"round_type"}},{"kind":"Field","name":{"kind":"Name","value":"round_order"}},{"kind":"Field","name":{"kind":"Name","value":"round_start_at"}},{"kind":"Field","name":{"kind":"Name","value":"round_finish_at"}},{"kind":"Field","name":{"kind":"Name","value":"vote_start_at"}},{"kind":"Field","name":{"kind":"Name","value":"vote_finish_at"}},{"kind":"Field","name":{"kind":"Name","value":"round_type"}},{"kind":"Field","name":{"kind":"Name","value":"is_current"}},{"kind":"Field","name":{"kind":"Name","value":"winner_count"}},{"kind":"Field","name":{"kind":"Name","value":"min_word_count"}},{"kind":"Field","name":{"kind":"Name","value":"max_word_count"}},{"kind":"Field","name":{"kind":"Name","value":"tag"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"deleted_at"}}]}}]}}]} as unknown as DocumentNode<RoundQuery, RoundQueryVariables>;
export const RoundsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Rounds"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"search"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rounds"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"round_id"}},{"kind":"Field","name":{"kind":"Name","value":"round_name"}},{"kind":"Field","name":{"kind":"Name","value":"round_start_at"}},{"kind":"Field","name":{"kind":"Name","value":"round_type"}}]}}]}}]} as unknown as DocumentNode<RoundsQuery, RoundsQueryVariables>;
export const GetRoundsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRounds"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"filterRound"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getRoundsPaginate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rounds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"round_id"}},{"kind":"Field","name":{"kind":"Name","value":"round_name"}},{"kind":"Field","name":{"kind":"Name","value":"round_start_at"}},{"kind":"Field","name":{"kind":"Name","value":"round_type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}}]}}]}}]} as unknown as DocumentNode<GetRoundsQuery, GetRoundsQueryVariables>;
export const GetAllOfficialTagsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllOfficialTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllOfficialTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tag_id"}},{"kind":"Field","name":{"kind":"Name","value":"tag_ulid"}},{"kind":"Field","name":{"kind":"Name","value":"tag"}},{"kind":"Field","name":{"kind":"Name","value":"start_at"}},{"kind":"Field","name":{"kind":"Name","value":"finish_at"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"deleted_at"}}]}}]}}]} as unknown as DocumentNode<GetAllOfficialTagsQuery, GetAllOfficialTagsQueryVariables>;
export const GetUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUsersPaginate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}}]}}]}}]} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;
export const GetUsersBaseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsersBase"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_uuid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"s3_url"}},{"kind":"Field","name":{"kind":"Name","value":"first_login_at"}},{"kind":"Field","name":{"kind":"Name","value":"last_login_at"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"deleted_at"}}]}}]}}]} as unknown as DocumentNode<GetUsersBaseQuery, GetUsersBaseQueryVariables>;
export const UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"User"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageNovelLike"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limitNovelLike"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"novelsPaginate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"novels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"novel_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"cover_picture_url"}},{"kind":"Field","name":{"kind":"Name","value":"likes"}},{"kind":"Field","name":{"kind":"Name","value":"first_novel_publish_at"}},{"kind":"Field","name":{"kind":"Name","value":"user_likes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bookmarks"}},{"kind":"Field","name":{"kind":"Name","value":"user_bookmarks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"episodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"episode_id"}},{"kind":"Field","name":{"kind":"Name","value":"episode_title"}},{"kind":"Field","name":{"kind":"Name","value":"is_publish"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"publish_at"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"novel_like"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageNovelLike"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageNovelLike"}}},{"kind":"Argument","name":{"kind":"Name","value":"limitNovelLike"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limitNovelLike"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalItems"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"novels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"novel_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"cover_picture_url"}},{"kind":"Field","name":{"kind":"Name","value":"likes"}},{"kind":"Field","name":{"kind":"Name","value":"first_novel_publish_at"}},{"kind":"Field","name":{"kind":"Name","value":"user_likes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bookmarks"}},{"kind":"Field","name":{"kind":"Name","value":"user_bookmarks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"episodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"episode_id"}},{"kind":"Field","name":{"kind":"Name","value":"episode_title"}},{"kind":"Field","name":{"kind":"Name","value":"is_publish"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"publish_at"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<UserQuery, UserQueryVariables>;