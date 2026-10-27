import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, ExecuteQueryOptions, MutationRef, MutationPromise, DataConnectSettings } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;
export const dataConnectSettings: DataConnectSettings;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface AddLibraryEntryData {
  libraryEntry_insert: LibraryEntry_Key;
}

export interface AddLibraryEntryVariables {
  gameId: UUIDString;
  status: string;
}

export interface CreateDiscussionData {
  discussion_insert: Discussion_Key;
}

export interface CreateDiscussionVariables {
  gameId: UUIDString;
  title: string;
  content?: string | null;
}

export interface CreateGameData {
  game_insert: Game_Key;
}

export interface CreateGameVariables {
  title: string;
  developer: string;
  releaseDate: DateString;
}

export interface CreateReviewData {
  review_insert: Review_Key;
}

export interface CreateReviewVariables {
  gameId: UUIDString;
  rating: number;
  comment?: string | null;
}

export interface CreateUserData {
  user_insert: User_Key;
}

export interface DeleteDiscussionData {
  discussion_delete?: Discussion_Key | null;
}

export interface DeleteDiscussionVariables {
  id: UUIDString;
}

export interface DeleteGameData {
  game_delete?: Game_Key | null;
}

export interface DeleteGameVariables {
  id: UUIDString;
}

export interface DeleteLibraryEntryData {
  libraryEntry_delete?: LibraryEntry_Key | null;
}

export interface DeleteLibraryEntryVariables {
  id: UUIDString;
}

export interface DeleteReviewData {
  review_delete?: Review_Key | null;
}

export interface DeleteReviewVariables {
  id: UUIDString;
}

export interface DeleteUserData {
  user_delete?: User_Key | null;
}

export interface Discussion_Key {
  id: UUIDString;
  __typename?: 'Discussion_Key';
}

export interface FollowUserData {
  follow_insert: Follow_Key;
}

export interface FollowUserVariables {
  followingId: UUIDString;
}

export interface Follow_Key {
  id: UUIDString;
  __typename?: 'Follow_Key';
}

export interface Game_Key {
  id: UUIDString;
  __typename?: 'Game_Key';
}

export interface GetDiscussionData {
  discussion?: {
    title: string;
    content?: string | null;
    creator: {
      username: string;
    };
  };
}

export interface GetDiscussionVariables {
  id: UUIDString;
}

export interface GetGameData {
  game?: {
    title: string;
    developer: string;
    genre?: string | null;
    description?: string | null;
    imageUrl?: string | null;
  };
}

export interface GetGameVariables {
  id: UUIDString;
}

export interface GetMyFollowsData {
  follows: ({
    following: {
      username: string;
    };
  })[];
}

export interface GetMyLibraryData {
  libraryEntries: ({
    game: {
      title: string;
    };
    status: string;
    hoursPlayed?: number | null;
  })[];
}

export interface GetMyReviewsData {
  reviews: ({
    game: {
      title: string;
    };
    rating: number;
    comment?: string | null;
  })[];
}

export interface GetMyUserData {
  user?: {
    username: string;
    email: string;
    bio?: string | null;
    avatarUrl?: string | null;
  };
}

export interface LibraryEntry_Key {
  id: UUIDString;
  __typename?: 'LibraryEntry_Key';
}

export interface ListDiscussionsData {
  discussions: ({
    title: string;
    game: {
      title: string;
    };
  })[];
}

export interface ListFollowersData {
  follows: ({
    follower: {
      username: string;
    };
  })[];
}

export interface ListFollowersVariables {
  userId: UUIDString;
}

export interface ListGameReviewsData {
  reviews: ({
    user: {
      username: string;
    };
    rating: number;
    comment?: string | null;
  })[];
}

export interface ListGameReviewsVariables {
  gameId: UUIDString;
}

export interface ListGamesData {
  games: ({
    title: string;
    developer: string;
    releaseDate: DateString;
  })[];
}

export interface ListLibraryEntriesData {
  libraryEntries: ({
    user: {
      username: string;
    };
    game: {
      title: string;
    };
    status: string;
  })[];
}

export interface ListUsersData {
  users: ({
    username: string;
    bio?: string | null;
    avatarUrl?: string | null;
  })[];
}

export interface Review_Key {
  id: UUIDString;
  __typename?: 'Review_Key';
}

export interface UnfollowUserData {
  follow_delete?: Follow_Key | null;
}

export interface UnfollowUserVariables {
  id: UUIDString;
}

export interface UpdateDiscussionData {
  discussion_update?: Discussion_Key | null;
}

export interface UpdateDiscussionVariables {
  id: UUIDString;
  content?: string | null;
}

export interface UpdateGameData {
  game_update?: Game_Key | null;
}

export interface UpdateGameVariables {
  id: UUIDString;
  description?: string | null;
}

export interface UpdateLibraryEntryData {
  libraryEntry_update?: LibraryEntry_Key | null;
}

export interface UpdateLibraryEntryVariables {
  id: UUIDString;
  hoursPlayed?: number | null;
  status?: string | null;
}

export interface UpdateReviewData {
  review_update?: Review_Key | null;
}

export interface UpdateReviewVariables {
  id: UUIDString;
  rating?: number | null;
  comment?: string | null;
}

export interface UpdateUserData {
  user_update?: User_Key | null;
}

export interface UpdateUserVariables {
  username?: string | null;
  bio?: string | null;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<CreateUserData, undefined>;
  operationName: string;
}
export const createUserRef: CreateUserRef;

export function createUser(): MutationPromise<CreateUserData, undefined>;
export function createUser(dc: DataConnect): MutationPromise<CreateUserData, undefined>;

interface UpdateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars?: UpdateUserVariables): MutationRef<UpdateUserData, UpdateUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars?: UpdateUserVariables): MutationRef<UpdateUserData, UpdateUserVariables>;
  operationName: string;
}
export const updateUserRef: UpdateUserRef;

export function updateUser(vars?: UpdateUserVariables): MutationPromise<UpdateUserData, UpdateUserVariables>;
export function updateUser(dc: DataConnect, vars?: UpdateUserVariables): MutationPromise<UpdateUserData, UpdateUserVariables>;

interface DeleteUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<DeleteUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<DeleteUserData, undefined>;
  operationName: string;
}
export const deleteUserRef: DeleteUserRef;

export function deleteUser(): MutationPromise<DeleteUserData, undefined>;
export function deleteUser(dc: DataConnect): MutationPromise<DeleteUserData, undefined>;

interface GetMyUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetMyUserData, undefined>;
  operationName: string;
}
export const getMyUserRef: GetMyUserRef;

export function getMyUser(options?: ExecuteQueryOptions): QueryPromise<GetMyUserData, undefined>;
export function getMyUser(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetMyUserData, undefined>;

interface ListUsersRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListUsersData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListUsersData, undefined>;
  operationName: string;
}
export const listUsersRef: ListUsersRef;

export function listUsers(options?: ExecuteQueryOptions): QueryPromise<ListUsersData, undefined>;
export function listUsers(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListUsersData, undefined>;

interface CreateGameRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateGameVariables): MutationRef<CreateGameData, CreateGameVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateGameVariables): MutationRef<CreateGameData, CreateGameVariables>;
  operationName: string;
}
export const createGameRef: CreateGameRef;

export function createGame(vars: CreateGameVariables): MutationPromise<CreateGameData, CreateGameVariables>;
export function createGame(dc: DataConnect, vars: CreateGameVariables): MutationPromise<CreateGameData, CreateGameVariables>;

interface UpdateGameRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateGameVariables): MutationRef<UpdateGameData, UpdateGameVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateGameVariables): MutationRef<UpdateGameData, UpdateGameVariables>;
  operationName: string;
}
export const updateGameRef: UpdateGameRef;

export function updateGame(vars: UpdateGameVariables): MutationPromise<UpdateGameData, UpdateGameVariables>;
export function updateGame(dc: DataConnect, vars: UpdateGameVariables): MutationPromise<UpdateGameData, UpdateGameVariables>;

interface DeleteGameRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteGameVariables): MutationRef<DeleteGameData, DeleteGameVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteGameVariables): MutationRef<DeleteGameData, DeleteGameVariables>;
  operationName: string;
}
export const deleteGameRef: DeleteGameRef;

export function deleteGame(vars: DeleteGameVariables): MutationPromise<DeleteGameData, DeleteGameVariables>;
export function deleteGame(dc: DataConnect, vars: DeleteGameVariables): MutationPromise<DeleteGameData, DeleteGameVariables>;

interface GetGameRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetGameVariables): QueryRef<GetGameData, GetGameVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetGameVariables): QueryRef<GetGameData, GetGameVariables>;
  operationName: string;
}
export const getGameRef: GetGameRef;

export function getGame(vars: GetGameVariables, options?: ExecuteQueryOptions): QueryPromise<GetGameData, GetGameVariables>;
export function getGame(dc: DataConnect, vars: GetGameVariables, options?: ExecuteQueryOptions): QueryPromise<GetGameData, GetGameVariables>;

interface ListGamesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListGamesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListGamesData, undefined>;
  operationName: string;
}
export const listGamesRef: ListGamesRef;

export function listGames(options?: ExecuteQueryOptions): QueryPromise<ListGamesData, undefined>;
export function listGames(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListGamesData, undefined>;

interface AddLibraryEntryRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddLibraryEntryVariables): MutationRef<AddLibraryEntryData, AddLibraryEntryVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AddLibraryEntryVariables): MutationRef<AddLibraryEntryData, AddLibraryEntryVariables>;
  operationName: string;
}
export const addLibraryEntryRef: AddLibraryEntryRef;

export function addLibraryEntry(vars: AddLibraryEntryVariables): MutationPromise<AddLibraryEntryData, AddLibraryEntryVariables>;
export function addLibraryEntry(dc: DataConnect, vars: AddLibraryEntryVariables): MutationPromise<AddLibraryEntryData, AddLibraryEntryVariables>;

interface UpdateLibraryEntryRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateLibraryEntryVariables): MutationRef<UpdateLibraryEntryData, UpdateLibraryEntryVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateLibraryEntryVariables): MutationRef<UpdateLibraryEntryData, UpdateLibraryEntryVariables>;
  operationName: string;
}
export const updateLibraryEntryRef: UpdateLibraryEntryRef;

export function updateLibraryEntry(vars: UpdateLibraryEntryVariables): MutationPromise<UpdateLibraryEntryData, UpdateLibraryEntryVariables>;
export function updateLibraryEntry(dc: DataConnect, vars: UpdateLibraryEntryVariables): MutationPromise<UpdateLibraryEntryData, UpdateLibraryEntryVariables>;

interface DeleteLibraryEntryRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteLibraryEntryVariables): MutationRef<DeleteLibraryEntryData, DeleteLibraryEntryVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteLibraryEntryVariables): MutationRef<DeleteLibraryEntryData, DeleteLibraryEntryVariables>;
  operationName: string;
}
export const deleteLibraryEntryRef: DeleteLibraryEntryRef;

export function deleteLibraryEntry(vars: DeleteLibraryEntryVariables): MutationPromise<DeleteLibraryEntryData, DeleteLibraryEntryVariables>;
export function deleteLibraryEntry(dc: DataConnect, vars: DeleteLibraryEntryVariables): MutationPromise<DeleteLibraryEntryData, DeleteLibraryEntryVariables>;

interface GetMyLibraryRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyLibraryData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetMyLibraryData, undefined>;
  operationName: string;
}
export const getMyLibraryRef: GetMyLibraryRef;

export function getMyLibrary(options?: ExecuteQueryOptions): QueryPromise<GetMyLibraryData, undefined>;
export function getMyLibrary(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetMyLibraryData, undefined>;

interface ListLibraryEntriesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListLibraryEntriesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListLibraryEntriesData, undefined>;
  operationName: string;
}
export const listLibraryEntriesRef: ListLibraryEntriesRef;

export function listLibraryEntries(options?: ExecuteQueryOptions): QueryPromise<ListLibraryEntriesData, undefined>;
export function listLibraryEntries(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListLibraryEntriesData, undefined>;

interface CreateReviewRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateReviewVariables): MutationRef<CreateReviewData, CreateReviewVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateReviewVariables): MutationRef<CreateReviewData, CreateReviewVariables>;
  operationName: string;
}
export const createReviewRef: CreateReviewRef;

export function createReview(vars: CreateReviewVariables): MutationPromise<CreateReviewData, CreateReviewVariables>;
export function createReview(dc: DataConnect, vars: CreateReviewVariables): MutationPromise<CreateReviewData, CreateReviewVariables>;

interface UpdateReviewRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateReviewVariables): MutationRef<UpdateReviewData, UpdateReviewVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateReviewVariables): MutationRef<UpdateReviewData, UpdateReviewVariables>;
  operationName: string;
}
export const updateReviewRef: UpdateReviewRef;

export function updateReview(vars: UpdateReviewVariables): MutationPromise<UpdateReviewData, UpdateReviewVariables>;
export function updateReview(dc: DataConnect, vars: UpdateReviewVariables): MutationPromise<UpdateReviewData, UpdateReviewVariables>;

interface DeleteReviewRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteReviewVariables): MutationRef<DeleteReviewData, DeleteReviewVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteReviewVariables): MutationRef<DeleteReviewData, DeleteReviewVariables>;
  operationName: string;
}
export const deleteReviewRef: DeleteReviewRef;

export function deleteReview(vars: DeleteReviewVariables): MutationPromise<DeleteReviewData, DeleteReviewVariables>;
export function deleteReview(dc: DataConnect, vars: DeleteReviewVariables): MutationPromise<DeleteReviewData, DeleteReviewVariables>;

interface GetMyReviewsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyReviewsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetMyReviewsData, undefined>;
  operationName: string;
}
export const getMyReviewsRef: GetMyReviewsRef;

export function getMyReviews(options?: ExecuteQueryOptions): QueryPromise<GetMyReviewsData, undefined>;
export function getMyReviews(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetMyReviewsData, undefined>;

interface ListGameReviewsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListGameReviewsVariables): QueryRef<ListGameReviewsData, ListGameReviewsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListGameReviewsVariables): QueryRef<ListGameReviewsData, ListGameReviewsVariables>;
  operationName: string;
}
export const listGameReviewsRef: ListGameReviewsRef;

export function listGameReviews(vars: ListGameReviewsVariables, options?: ExecuteQueryOptions): QueryPromise<ListGameReviewsData, ListGameReviewsVariables>;
export function listGameReviews(dc: DataConnect, vars: ListGameReviewsVariables, options?: ExecuteQueryOptions): QueryPromise<ListGameReviewsData, ListGameReviewsVariables>;

interface CreateDiscussionRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateDiscussionVariables): MutationRef<CreateDiscussionData, CreateDiscussionVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateDiscussionVariables): MutationRef<CreateDiscussionData, CreateDiscussionVariables>;
  operationName: string;
}
export const createDiscussionRef: CreateDiscussionRef;

export function createDiscussion(vars: CreateDiscussionVariables): MutationPromise<CreateDiscussionData, CreateDiscussionVariables>;
export function createDiscussion(dc: DataConnect, vars: CreateDiscussionVariables): MutationPromise<CreateDiscussionData, CreateDiscussionVariables>;

interface UpdateDiscussionRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateDiscussionVariables): MutationRef<UpdateDiscussionData, UpdateDiscussionVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateDiscussionVariables): MutationRef<UpdateDiscussionData, UpdateDiscussionVariables>;
  operationName: string;
}
export const updateDiscussionRef: UpdateDiscussionRef;

export function updateDiscussion(vars: UpdateDiscussionVariables): MutationPromise<UpdateDiscussionData, UpdateDiscussionVariables>;
export function updateDiscussion(dc: DataConnect, vars: UpdateDiscussionVariables): MutationPromise<UpdateDiscussionData, UpdateDiscussionVariables>;

interface DeleteDiscussionRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteDiscussionVariables): MutationRef<DeleteDiscussionData, DeleteDiscussionVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteDiscussionVariables): MutationRef<DeleteDiscussionData, DeleteDiscussionVariables>;
  operationName: string;
}
export const deleteDiscussionRef: DeleteDiscussionRef;

export function deleteDiscussion(vars: DeleteDiscussionVariables): MutationPromise<DeleteDiscussionData, DeleteDiscussionVariables>;
export function deleteDiscussion(dc: DataConnect, vars: DeleteDiscussionVariables): MutationPromise<DeleteDiscussionData, DeleteDiscussionVariables>;

interface GetDiscussionRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetDiscussionVariables): QueryRef<GetDiscussionData, GetDiscussionVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetDiscussionVariables): QueryRef<GetDiscussionData, GetDiscussionVariables>;
  operationName: string;
}
export const getDiscussionRef: GetDiscussionRef;

export function getDiscussion(vars: GetDiscussionVariables, options?: ExecuteQueryOptions): QueryPromise<GetDiscussionData, GetDiscussionVariables>;
export function getDiscussion(dc: DataConnect, vars: GetDiscussionVariables, options?: ExecuteQueryOptions): QueryPromise<GetDiscussionData, GetDiscussionVariables>;

interface ListDiscussionsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListDiscussionsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListDiscussionsData, undefined>;
  operationName: string;
}
export const listDiscussionsRef: ListDiscussionsRef;

export function listDiscussions(options?: ExecuteQueryOptions): QueryPromise<ListDiscussionsData, undefined>;
export function listDiscussions(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListDiscussionsData, undefined>;

interface FollowUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: FollowUserVariables): MutationRef<FollowUserData, FollowUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: FollowUserVariables): MutationRef<FollowUserData, FollowUserVariables>;
  operationName: string;
}
export const followUserRef: FollowUserRef;

export function followUser(vars: FollowUserVariables): MutationPromise<FollowUserData, FollowUserVariables>;
export function followUser(dc: DataConnect, vars: FollowUserVariables): MutationPromise<FollowUserData, FollowUserVariables>;

interface UnfollowUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UnfollowUserVariables): MutationRef<UnfollowUserData, UnfollowUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UnfollowUserVariables): MutationRef<UnfollowUserData, UnfollowUserVariables>;
  operationName: string;
}
export const unfollowUserRef: UnfollowUserRef;

export function unfollowUser(vars: UnfollowUserVariables): MutationPromise<UnfollowUserData, UnfollowUserVariables>;
export function unfollowUser(dc: DataConnect, vars: UnfollowUserVariables): MutationPromise<UnfollowUserData, UnfollowUserVariables>;

interface GetMyFollowsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyFollowsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetMyFollowsData, undefined>;
  operationName: string;
}
export const getMyFollowsRef: GetMyFollowsRef;

export function getMyFollows(options?: ExecuteQueryOptions): QueryPromise<GetMyFollowsData, undefined>;
export function getMyFollows(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetMyFollowsData, undefined>;

interface ListFollowersRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListFollowersVariables): QueryRef<ListFollowersData, ListFollowersVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListFollowersVariables): QueryRef<ListFollowersData, ListFollowersVariables>;
  operationName: string;
}
export const listFollowersRef: ListFollowersRef;

export function listFollowers(vars: ListFollowersVariables, options?: ExecuteQueryOptions): QueryPromise<ListFollowersData, ListFollowersVariables>;
export function listFollowers(dc: DataConnect, vars: ListFollowersVariables, options?: ExecuteQueryOptions): QueryPromise<ListFollowersData, ListFollowersVariables>;

