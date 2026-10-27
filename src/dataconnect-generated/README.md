# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetMyUser*](#getmyuser)
  - [*ListUsers*](#listusers)
  - [*GetGame*](#getgame)
  - [*ListGames*](#listgames)
  - [*GetMyLibrary*](#getmylibrary)
  - [*ListLibraryEntries*](#listlibraryentries)
  - [*GetMyReviews*](#getmyreviews)
  - [*ListGameReviews*](#listgamereviews)
  - [*GetDiscussion*](#getdiscussion)
  - [*ListDiscussions*](#listdiscussions)
  - [*GetMyFollows*](#getmyfollows)
  - [*ListFollowers*](#listfollowers)
- [**Mutations**](#mutations)
  - [*CreateUser*](#createuser)
  - [*UpdateUser*](#updateuser)
  - [*DeleteUser*](#deleteuser)
  - [*CreateGame*](#creategame)
  - [*UpdateGame*](#updategame)
  - [*DeleteGame*](#deletegame)
  - [*AddLibraryEntry*](#addlibraryentry)
  - [*UpdateLibraryEntry*](#updatelibraryentry)
  - [*DeleteLibraryEntry*](#deletelibraryentry)
  - [*CreateReview*](#createreview)
  - [*UpdateReview*](#updatereview)
  - [*DeleteReview*](#deletereview)
  - [*CreateDiscussion*](#creatediscussion)
  - [*UpdateDiscussion*](#updatediscussion)
  - [*DeleteDiscussion*](#deletediscussion)
  - [*FollowUser*](#followuser)
  - [*UnfollowUser*](#unfollowuser)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetMyUser
You can execute the `GetMyUser` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getMyUser(options?: ExecuteQueryOptions): QueryPromise<GetMyUserData, undefined>;

interface GetMyUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyUserData, undefined>;
}
export const getMyUserRef: GetMyUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getMyUser(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetMyUserData, undefined>;

interface GetMyUserRef {
  ...
  (dc: DataConnect): QueryRef<GetMyUserData, undefined>;
}
export const getMyUserRef: GetMyUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getMyUserRef:
```typescript
const name = getMyUserRef.operationName;
console.log(name);
```

### Variables
The `GetMyUser` query has no variables.
### Return Type
Recall that executing the `GetMyUser` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetMyUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetMyUserData {
  user?: {
    username: string;
    email: string;
    bio?: string | null;
    avatarUrl?: string | null;
  };
}
```
### Using `GetMyUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getMyUser } from '@dataconnect/generated';


// Call the `getMyUser()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getMyUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getMyUser(dataConnect);

console.log(data.user);

// Or, you can use the `Promise` API.
getMyUser().then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

### Using `GetMyUser`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getMyUserRef } from '@dataconnect/generated';


// Call the `getMyUserRef()` function to get a reference to the query.
const ref = getMyUserRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getMyUserRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.user);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

## ListUsers
You can execute the `ListUsers` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listUsers(options?: ExecuteQueryOptions): QueryPromise<ListUsersData, undefined>;

interface ListUsersRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListUsersData, undefined>;
}
export const listUsersRef: ListUsersRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listUsers(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListUsersData, undefined>;

interface ListUsersRef {
  ...
  (dc: DataConnect): QueryRef<ListUsersData, undefined>;
}
export const listUsersRef: ListUsersRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listUsersRef:
```typescript
const name = listUsersRef.operationName;
console.log(name);
```

### Variables
The `ListUsers` query has no variables.
### Return Type
Recall that executing the `ListUsers` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListUsersData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListUsersData {
  users: ({
    username: string;
    bio?: string | null;
    avatarUrl?: string | null;
  })[];
}
```
### Using `ListUsers`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listUsers } from '@dataconnect/generated';


// Call the `listUsers()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listUsers();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listUsers(dataConnect);

console.log(data.users);

// Or, you can use the `Promise` API.
listUsers().then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

### Using `ListUsers`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listUsersRef } from '@dataconnect/generated';


// Call the `listUsersRef()` function to get a reference to the query.
const ref = listUsersRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listUsersRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.users);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

## GetGame
You can execute the `GetGame` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getGame(vars: GetGameVariables, options?: ExecuteQueryOptions): QueryPromise<GetGameData, GetGameVariables>;

interface GetGameRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetGameVariables): QueryRef<GetGameData, GetGameVariables>;
}
export const getGameRef: GetGameRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getGame(dc: DataConnect, vars: GetGameVariables, options?: ExecuteQueryOptions): QueryPromise<GetGameData, GetGameVariables>;

interface GetGameRef {
  ...
  (dc: DataConnect, vars: GetGameVariables): QueryRef<GetGameData, GetGameVariables>;
}
export const getGameRef: GetGameRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getGameRef:
```typescript
const name = getGameRef.operationName;
console.log(name);
```

### Variables
The `GetGame` query requires an argument of type `GetGameVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetGameVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetGame` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetGameData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetGameData {
  game?: {
    title: string;
    developer: string;
    genre?: string | null;
    description?: string | null;
    imageUrl?: string | null;
  };
}
```
### Using `GetGame`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getGame, GetGameVariables } from '@dataconnect/generated';

// The `GetGame` query requires an argument of type `GetGameVariables`:
const getGameVars: GetGameVariables = {
  id: ..., 
};

// Call the `getGame()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getGame(getGameVars);
// Variables can be defined inline as well.
const { data } = await getGame({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getGame(dataConnect, getGameVars);

console.log(data.game);

// Or, you can use the `Promise` API.
getGame(getGameVars).then((response) => {
  const data = response.data;
  console.log(data.game);
});
```

### Using `GetGame`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getGameRef, GetGameVariables } from '@dataconnect/generated';

// The `GetGame` query requires an argument of type `GetGameVariables`:
const getGameVars: GetGameVariables = {
  id: ..., 
};

// Call the `getGameRef()` function to get a reference to the query.
const ref = getGameRef(getGameVars);
// Variables can be defined inline as well.
const ref = getGameRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getGameRef(dataConnect, getGameVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.game);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.game);
});
```

## ListGames
You can execute the `ListGames` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listGames(options?: ExecuteQueryOptions): QueryPromise<ListGamesData, undefined>;

interface ListGamesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListGamesData, undefined>;
}
export const listGamesRef: ListGamesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listGames(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListGamesData, undefined>;

interface ListGamesRef {
  ...
  (dc: DataConnect): QueryRef<ListGamesData, undefined>;
}
export const listGamesRef: ListGamesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listGamesRef:
```typescript
const name = listGamesRef.operationName;
console.log(name);
```

### Variables
The `ListGames` query has no variables.
### Return Type
Recall that executing the `ListGames` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListGamesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListGamesData {
  games: ({
    title: string;
    developer: string;
    releaseDate: DateString;
  })[];
}
```
### Using `ListGames`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listGames } from '@dataconnect/generated';


// Call the `listGames()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listGames();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listGames(dataConnect);

console.log(data.games);

// Or, you can use the `Promise` API.
listGames().then((response) => {
  const data = response.data;
  console.log(data.games);
});
```

### Using `ListGames`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listGamesRef } from '@dataconnect/generated';


// Call the `listGamesRef()` function to get a reference to the query.
const ref = listGamesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listGamesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.games);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.games);
});
```

## GetMyLibrary
You can execute the `GetMyLibrary` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getMyLibrary(options?: ExecuteQueryOptions): QueryPromise<GetMyLibraryData, undefined>;

interface GetMyLibraryRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyLibraryData, undefined>;
}
export const getMyLibraryRef: GetMyLibraryRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getMyLibrary(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetMyLibraryData, undefined>;

interface GetMyLibraryRef {
  ...
  (dc: DataConnect): QueryRef<GetMyLibraryData, undefined>;
}
export const getMyLibraryRef: GetMyLibraryRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getMyLibraryRef:
```typescript
const name = getMyLibraryRef.operationName;
console.log(name);
```

### Variables
The `GetMyLibrary` query has no variables.
### Return Type
Recall that executing the `GetMyLibrary` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetMyLibraryData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetMyLibraryData {
  libraryEntries: ({
    game: {
      title: string;
    };
    status: string;
    hoursPlayed?: number | null;
  })[];
}
```
### Using `GetMyLibrary`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getMyLibrary } from '@dataconnect/generated';


// Call the `getMyLibrary()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getMyLibrary();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getMyLibrary(dataConnect);

console.log(data.libraryEntries);

// Or, you can use the `Promise` API.
getMyLibrary().then((response) => {
  const data = response.data;
  console.log(data.libraryEntries);
});
```

### Using `GetMyLibrary`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getMyLibraryRef } from '@dataconnect/generated';


// Call the `getMyLibraryRef()` function to get a reference to the query.
const ref = getMyLibraryRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getMyLibraryRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.libraryEntries);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.libraryEntries);
});
```

## ListLibraryEntries
You can execute the `ListLibraryEntries` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listLibraryEntries(options?: ExecuteQueryOptions): QueryPromise<ListLibraryEntriesData, undefined>;

interface ListLibraryEntriesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListLibraryEntriesData, undefined>;
}
export const listLibraryEntriesRef: ListLibraryEntriesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listLibraryEntries(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListLibraryEntriesData, undefined>;

interface ListLibraryEntriesRef {
  ...
  (dc: DataConnect): QueryRef<ListLibraryEntriesData, undefined>;
}
export const listLibraryEntriesRef: ListLibraryEntriesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listLibraryEntriesRef:
```typescript
const name = listLibraryEntriesRef.operationName;
console.log(name);
```

### Variables
The `ListLibraryEntries` query has no variables.
### Return Type
Recall that executing the `ListLibraryEntries` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListLibraryEntriesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `ListLibraryEntries`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listLibraryEntries } from '@dataconnect/generated';


// Call the `listLibraryEntries()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listLibraryEntries();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listLibraryEntries(dataConnect);

console.log(data.libraryEntries);

// Or, you can use the `Promise` API.
listLibraryEntries().then((response) => {
  const data = response.data;
  console.log(data.libraryEntries);
});
```

### Using `ListLibraryEntries`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listLibraryEntriesRef } from '@dataconnect/generated';


// Call the `listLibraryEntriesRef()` function to get a reference to the query.
const ref = listLibraryEntriesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listLibraryEntriesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.libraryEntries);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.libraryEntries);
});
```

## GetMyReviews
You can execute the `GetMyReviews` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getMyReviews(options?: ExecuteQueryOptions): QueryPromise<GetMyReviewsData, undefined>;

interface GetMyReviewsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyReviewsData, undefined>;
}
export const getMyReviewsRef: GetMyReviewsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getMyReviews(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetMyReviewsData, undefined>;

interface GetMyReviewsRef {
  ...
  (dc: DataConnect): QueryRef<GetMyReviewsData, undefined>;
}
export const getMyReviewsRef: GetMyReviewsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getMyReviewsRef:
```typescript
const name = getMyReviewsRef.operationName;
console.log(name);
```

### Variables
The `GetMyReviews` query has no variables.
### Return Type
Recall that executing the `GetMyReviews` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetMyReviewsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetMyReviewsData {
  reviews: ({
    game: {
      title: string;
    };
    rating: number;
    comment?: string | null;
  })[];
}
```
### Using `GetMyReviews`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getMyReviews } from '@dataconnect/generated';


// Call the `getMyReviews()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getMyReviews();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getMyReviews(dataConnect);

console.log(data.reviews);

// Or, you can use the `Promise` API.
getMyReviews().then((response) => {
  const data = response.data;
  console.log(data.reviews);
});
```

### Using `GetMyReviews`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getMyReviewsRef } from '@dataconnect/generated';


// Call the `getMyReviewsRef()` function to get a reference to the query.
const ref = getMyReviewsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getMyReviewsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.reviews);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.reviews);
});
```

## ListGameReviews
You can execute the `ListGameReviews` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listGameReviews(vars: ListGameReviewsVariables, options?: ExecuteQueryOptions): QueryPromise<ListGameReviewsData, ListGameReviewsVariables>;

interface ListGameReviewsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListGameReviewsVariables): QueryRef<ListGameReviewsData, ListGameReviewsVariables>;
}
export const listGameReviewsRef: ListGameReviewsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listGameReviews(dc: DataConnect, vars: ListGameReviewsVariables, options?: ExecuteQueryOptions): QueryPromise<ListGameReviewsData, ListGameReviewsVariables>;

interface ListGameReviewsRef {
  ...
  (dc: DataConnect, vars: ListGameReviewsVariables): QueryRef<ListGameReviewsData, ListGameReviewsVariables>;
}
export const listGameReviewsRef: ListGameReviewsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listGameReviewsRef:
```typescript
const name = listGameReviewsRef.operationName;
console.log(name);
```

### Variables
The `ListGameReviews` query requires an argument of type `ListGameReviewsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListGameReviewsVariables {
  gameId: UUIDString;
}
```
### Return Type
Recall that executing the `ListGameReviews` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListGameReviewsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListGameReviewsData {
  reviews: ({
    user: {
      username: string;
    };
    rating: number;
    comment?: string | null;
  })[];
}
```
### Using `ListGameReviews`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listGameReviews, ListGameReviewsVariables } from '@dataconnect/generated';

// The `ListGameReviews` query requires an argument of type `ListGameReviewsVariables`:
const listGameReviewsVars: ListGameReviewsVariables = {
  gameId: ..., 
};

// Call the `listGameReviews()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listGameReviews(listGameReviewsVars);
// Variables can be defined inline as well.
const { data } = await listGameReviews({ gameId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listGameReviews(dataConnect, listGameReviewsVars);

console.log(data.reviews);

// Or, you can use the `Promise` API.
listGameReviews(listGameReviewsVars).then((response) => {
  const data = response.data;
  console.log(data.reviews);
});
```

### Using `ListGameReviews`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listGameReviewsRef, ListGameReviewsVariables } from '@dataconnect/generated';

// The `ListGameReviews` query requires an argument of type `ListGameReviewsVariables`:
const listGameReviewsVars: ListGameReviewsVariables = {
  gameId: ..., 
};

// Call the `listGameReviewsRef()` function to get a reference to the query.
const ref = listGameReviewsRef(listGameReviewsVars);
// Variables can be defined inline as well.
const ref = listGameReviewsRef({ gameId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listGameReviewsRef(dataConnect, listGameReviewsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.reviews);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.reviews);
});
```

## GetDiscussion
You can execute the `GetDiscussion` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getDiscussion(vars: GetDiscussionVariables, options?: ExecuteQueryOptions): QueryPromise<GetDiscussionData, GetDiscussionVariables>;

interface GetDiscussionRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetDiscussionVariables): QueryRef<GetDiscussionData, GetDiscussionVariables>;
}
export const getDiscussionRef: GetDiscussionRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getDiscussion(dc: DataConnect, vars: GetDiscussionVariables, options?: ExecuteQueryOptions): QueryPromise<GetDiscussionData, GetDiscussionVariables>;

interface GetDiscussionRef {
  ...
  (dc: DataConnect, vars: GetDiscussionVariables): QueryRef<GetDiscussionData, GetDiscussionVariables>;
}
export const getDiscussionRef: GetDiscussionRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getDiscussionRef:
```typescript
const name = getDiscussionRef.operationName;
console.log(name);
```

### Variables
The `GetDiscussion` query requires an argument of type `GetDiscussionVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetDiscussionVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetDiscussion` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetDiscussionData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetDiscussionData {
  discussion?: {
    title: string;
    content?: string | null;
    creator: {
      username: string;
    };
  };
}
```
### Using `GetDiscussion`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getDiscussion, GetDiscussionVariables } from '@dataconnect/generated';

// The `GetDiscussion` query requires an argument of type `GetDiscussionVariables`:
const getDiscussionVars: GetDiscussionVariables = {
  id: ..., 
};

// Call the `getDiscussion()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getDiscussion(getDiscussionVars);
// Variables can be defined inline as well.
const { data } = await getDiscussion({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getDiscussion(dataConnect, getDiscussionVars);

console.log(data.discussion);

// Or, you can use the `Promise` API.
getDiscussion(getDiscussionVars).then((response) => {
  const data = response.data;
  console.log(data.discussion);
});
```

### Using `GetDiscussion`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getDiscussionRef, GetDiscussionVariables } from '@dataconnect/generated';

// The `GetDiscussion` query requires an argument of type `GetDiscussionVariables`:
const getDiscussionVars: GetDiscussionVariables = {
  id: ..., 
};

// Call the `getDiscussionRef()` function to get a reference to the query.
const ref = getDiscussionRef(getDiscussionVars);
// Variables can be defined inline as well.
const ref = getDiscussionRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getDiscussionRef(dataConnect, getDiscussionVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.discussion);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.discussion);
});
```

## ListDiscussions
You can execute the `ListDiscussions` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listDiscussions(options?: ExecuteQueryOptions): QueryPromise<ListDiscussionsData, undefined>;

interface ListDiscussionsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListDiscussionsData, undefined>;
}
export const listDiscussionsRef: ListDiscussionsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listDiscussions(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListDiscussionsData, undefined>;

interface ListDiscussionsRef {
  ...
  (dc: DataConnect): QueryRef<ListDiscussionsData, undefined>;
}
export const listDiscussionsRef: ListDiscussionsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listDiscussionsRef:
```typescript
const name = listDiscussionsRef.operationName;
console.log(name);
```

### Variables
The `ListDiscussions` query has no variables.
### Return Type
Recall that executing the `ListDiscussions` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListDiscussionsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListDiscussionsData {
  discussions: ({
    title: string;
    game: {
      title: string;
    };
  })[];
}
```
### Using `ListDiscussions`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listDiscussions } from '@dataconnect/generated';


// Call the `listDiscussions()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listDiscussions();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listDiscussions(dataConnect);

console.log(data.discussions);

// Or, you can use the `Promise` API.
listDiscussions().then((response) => {
  const data = response.data;
  console.log(data.discussions);
});
```

### Using `ListDiscussions`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listDiscussionsRef } from '@dataconnect/generated';


// Call the `listDiscussionsRef()` function to get a reference to the query.
const ref = listDiscussionsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listDiscussionsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.discussions);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.discussions);
});
```

## GetMyFollows
You can execute the `GetMyFollows` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getMyFollows(options?: ExecuteQueryOptions): QueryPromise<GetMyFollowsData, undefined>;

interface GetMyFollowsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyFollowsData, undefined>;
}
export const getMyFollowsRef: GetMyFollowsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getMyFollows(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetMyFollowsData, undefined>;

interface GetMyFollowsRef {
  ...
  (dc: DataConnect): QueryRef<GetMyFollowsData, undefined>;
}
export const getMyFollowsRef: GetMyFollowsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getMyFollowsRef:
```typescript
const name = getMyFollowsRef.operationName;
console.log(name);
```

### Variables
The `GetMyFollows` query has no variables.
### Return Type
Recall that executing the `GetMyFollows` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetMyFollowsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetMyFollowsData {
  follows: ({
    following: {
      username: string;
    };
  })[];
}
```
### Using `GetMyFollows`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getMyFollows } from '@dataconnect/generated';


// Call the `getMyFollows()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getMyFollows();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getMyFollows(dataConnect);

console.log(data.follows);

// Or, you can use the `Promise` API.
getMyFollows().then((response) => {
  const data = response.data;
  console.log(data.follows);
});
```

### Using `GetMyFollows`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getMyFollowsRef } from '@dataconnect/generated';


// Call the `getMyFollowsRef()` function to get a reference to the query.
const ref = getMyFollowsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getMyFollowsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.follows);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.follows);
});
```

## ListFollowers
You can execute the `ListFollowers` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listFollowers(vars: ListFollowersVariables, options?: ExecuteQueryOptions): QueryPromise<ListFollowersData, ListFollowersVariables>;

interface ListFollowersRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListFollowersVariables): QueryRef<ListFollowersData, ListFollowersVariables>;
}
export const listFollowersRef: ListFollowersRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listFollowers(dc: DataConnect, vars: ListFollowersVariables, options?: ExecuteQueryOptions): QueryPromise<ListFollowersData, ListFollowersVariables>;

interface ListFollowersRef {
  ...
  (dc: DataConnect, vars: ListFollowersVariables): QueryRef<ListFollowersData, ListFollowersVariables>;
}
export const listFollowersRef: ListFollowersRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listFollowersRef:
```typescript
const name = listFollowersRef.operationName;
console.log(name);
```

### Variables
The `ListFollowers` query requires an argument of type `ListFollowersVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListFollowersVariables {
  userId: UUIDString;
}
```
### Return Type
Recall that executing the `ListFollowers` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListFollowersData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListFollowersData {
  follows: ({
    follower: {
      username: string;
    };
  })[];
}
```
### Using `ListFollowers`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listFollowers, ListFollowersVariables } from '@dataconnect/generated';

// The `ListFollowers` query requires an argument of type `ListFollowersVariables`:
const listFollowersVars: ListFollowersVariables = {
  userId: ..., 
};

// Call the `listFollowers()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listFollowers(listFollowersVars);
// Variables can be defined inline as well.
const { data } = await listFollowers({ userId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listFollowers(dataConnect, listFollowersVars);

console.log(data.follows);

// Or, you can use the `Promise` API.
listFollowers(listFollowersVars).then((response) => {
  const data = response.data;
  console.log(data.follows);
});
```

### Using `ListFollowers`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listFollowersRef, ListFollowersVariables } from '@dataconnect/generated';

// The `ListFollowers` query requires an argument of type `ListFollowersVariables`:
const listFollowersVars: ListFollowersVariables = {
  userId: ..., 
};

// Call the `listFollowersRef()` function to get a reference to the query.
const ref = listFollowersRef(listFollowersVars);
// Variables can be defined inline as well.
const ref = listFollowersRef({ userId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listFollowersRef(dataConnect, listFollowersVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.follows);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.follows);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateUser
You can execute the `CreateUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createUser(): MutationPromise<CreateUserData, undefined>;

interface CreateUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateUserData, undefined>;
}
export const createUserRef: CreateUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createUser(dc: DataConnect): MutationPromise<CreateUserData, undefined>;

interface CreateUserRef {
  ...
  (dc: DataConnect): MutationRef<CreateUserData, undefined>;
}
export const createUserRef: CreateUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createUserRef:
```typescript
const name = createUserRef.operationName;
console.log(name);
```

### Variables
The `CreateUser` mutation has no variables.
### Return Type
Recall that executing the `CreateUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateUserData {
  user_insert: User_Key;
}
```
### Using `CreateUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createUser } from '@dataconnect/generated';


// Call the `createUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createUser(dataConnect);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
createUser().then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

### Using `CreateUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createUserRef } from '@dataconnect/generated';


// Call the `createUserRef()` function to get a reference to the mutation.
const ref = createUserRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createUserRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

## UpdateUser
You can execute the `UpdateUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateUser(vars?: UpdateUserVariables): MutationPromise<UpdateUserData, UpdateUserVariables>;

interface UpdateUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars?: UpdateUserVariables): MutationRef<UpdateUserData, UpdateUserVariables>;
}
export const updateUserRef: UpdateUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateUser(dc: DataConnect, vars?: UpdateUserVariables): MutationPromise<UpdateUserData, UpdateUserVariables>;

interface UpdateUserRef {
  ...
  (dc: DataConnect, vars?: UpdateUserVariables): MutationRef<UpdateUserData, UpdateUserVariables>;
}
export const updateUserRef: UpdateUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateUserRef:
```typescript
const name = updateUserRef.operationName;
console.log(name);
```

### Variables
The `UpdateUser` mutation has an optional argument of type `UpdateUserVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateUserVariables {
  username?: string | null;
  bio?: string | null;
}
```
### Return Type
Recall that executing the `UpdateUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateUserData {
  user_update?: User_Key | null;
}
```
### Using `UpdateUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateUser, UpdateUserVariables } from '@dataconnect/generated';

// The `UpdateUser` mutation has an optional argument of type `UpdateUserVariables`:
const updateUserVars: UpdateUserVariables = {
  username: ..., // optional
  bio: ..., // optional
};

// Call the `updateUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateUser(updateUserVars);
// Variables can be defined inline as well.
const { data } = await updateUser({ username: ..., bio: ..., });
// Since all variables are optional for this mutation, you can omit the `UpdateUserVariables` argument.
const { data } = await updateUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateUser(dataConnect, updateUserVars);

console.log(data.user_update);

// Or, you can use the `Promise` API.
updateUser(updateUserVars).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

### Using `UpdateUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateUserRef, UpdateUserVariables } from '@dataconnect/generated';

// The `UpdateUser` mutation has an optional argument of type `UpdateUserVariables`:
const updateUserVars: UpdateUserVariables = {
  username: ..., // optional
  bio: ..., // optional
};

// Call the `updateUserRef()` function to get a reference to the mutation.
const ref = updateUserRef(updateUserVars);
// Variables can be defined inline as well.
const ref = updateUserRef({ username: ..., bio: ..., });
// Since all variables are optional for this mutation, you can omit the `UpdateUserVariables` argument.
const ref = updateUserRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateUserRef(dataConnect, updateUserVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

## DeleteUser
You can execute the `DeleteUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteUser(): MutationPromise<DeleteUserData, undefined>;

interface DeleteUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<DeleteUserData, undefined>;
}
export const deleteUserRef: DeleteUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteUser(dc: DataConnect): MutationPromise<DeleteUserData, undefined>;

interface DeleteUserRef {
  ...
  (dc: DataConnect): MutationRef<DeleteUserData, undefined>;
}
export const deleteUserRef: DeleteUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteUserRef:
```typescript
const name = deleteUserRef.operationName;
console.log(name);
```

### Variables
The `DeleteUser` mutation has no variables.
### Return Type
Recall that executing the `DeleteUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteUserData {
  user_delete?: User_Key | null;
}
```
### Using `DeleteUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteUser } from '@dataconnect/generated';


// Call the `deleteUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteUser(dataConnect);

console.log(data.user_delete);

// Or, you can use the `Promise` API.
deleteUser().then((response) => {
  const data = response.data;
  console.log(data.user_delete);
});
```

### Using `DeleteUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteUserRef } from '@dataconnect/generated';


// Call the `deleteUserRef()` function to get a reference to the mutation.
const ref = deleteUserRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteUserRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_delete);
});
```

## CreateGame
You can execute the `CreateGame` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createGame(vars: CreateGameVariables): MutationPromise<CreateGameData, CreateGameVariables>;

interface CreateGameRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateGameVariables): MutationRef<CreateGameData, CreateGameVariables>;
}
export const createGameRef: CreateGameRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createGame(dc: DataConnect, vars: CreateGameVariables): MutationPromise<CreateGameData, CreateGameVariables>;

interface CreateGameRef {
  ...
  (dc: DataConnect, vars: CreateGameVariables): MutationRef<CreateGameData, CreateGameVariables>;
}
export const createGameRef: CreateGameRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createGameRef:
```typescript
const name = createGameRef.operationName;
console.log(name);
```

### Variables
The `CreateGame` mutation requires an argument of type `CreateGameVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateGameVariables {
  title: string;
  developer: string;
  releaseDate: DateString;
}
```
### Return Type
Recall that executing the `CreateGame` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateGameData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateGameData {
  game_insert: Game_Key;
}
```
### Using `CreateGame`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createGame, CreateGameVariables } from '@dataconnect/generated';

// The `CreateGame` mutation requires an argument of type `CreateGameVariables`:
const createGameVars: CreateGameVariables = {
  title: ..., 
  developer: ..., 
  releaseDate: ..., 
};

// Call the `createGame()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createGame(createGameVars);
// Variables can be defined inline as well.
const { data } = await createGame({ title: ..., developer: ..., releaseDate: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createGame(dataConnect, createGameVars);

console.log(data.game_insert);

// Or, you can use the `Promise` API.
createGame(createGameVars).then((response) => {
  const data = response.data;
  console.log(data.game_insert);
});
```

### Using `CreateGame`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createGameRef, CreateGameVariables } from '@dataconnect/generated';

// The `CreateGame` mutation requires an argument of type `CreateGameVariables`:
const createGameVars: CreateGameVariables = {
  title: ..., 
  developer: ..., 
  releaseDate: ..., 
};

// Call the `createGameRef()` function to get a reference to the mutation.
const ref = createGameRef(createGameVars);
// Variables can be defined inline as well.
const ref = createGameRef({ title: ..., developer: ..., releaseDate: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createGameRef(dataConnect, createGameVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.game_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.game_insert);
});
```

## UpdateGame
You can execute the `UpdateGame` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateGame(vars: UpdateGameVariables): MutationPromise<UpdateGameData, UpdateGameVariables>;

interface UpdateGameRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateGameVariables): MutationRef<UpdateGameData, UpdateGameVariables>;
}
export const updateGameRef: UpdateGameRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateGame(dc: DataConnect, vars: UpdateGameVariables): MutationPromise<UpdateGameData, UpdateGameVariables>;

interface UpdateGameRef {
  ...
  (dc: DataConnect, vars: UpdateGameVariables): MutationRef<UpdateGameData, UpdateGameVariables>;
}
export const updateGameRef: UpdateGameRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateGameRef:
```typescript
const name = updateGameRef.operationName;
console.log(name);
```

### Variables
The `UpdateGame` mutation requires an argument of type `UpdateGameVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateGameVariables {
  id: UUIDString;
  description?: string | null;
}
```
### Return Type
Recall that executing the `UpdateGame` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateGameData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateGameData {
  game_update?: Game_Key | null;
}
```
### Using `UpdateGame`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateGame, UpdateGameVariables } from '@dataconnect/generated';

// The `UpdateGame` mutation requires an argument of type `UpdateGameVariables`:
const updateGameVars: UpdateGameVariables = {
  id: ..., 
  description: ..., // optional
};

// Call the `updateGame()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateGame(updateGameVars);
// Variables can be defined inline as well.
const { data } = await updateGame({ id: ..., description: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateGame(dataConnect, updateGameVars);

console.log(data.game_update);

// Or, you can use the `Promise` API.
updateGame(updateGameVars).then((response) => {
  const data = response.data;
  console.log(data.game_update);
});
```

### Using `UpdateGame`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateGameRef, UpdateGameVariables } from '@dataconnect/generated';

// The `UpdateGame` mutation requires an argument of type `UpdateGameVariables`:
const updateGameVars: UpdateGameVariables = {
  id: ..., 
  description: ..., // optional
};

// Call the `updateGameRef()` function to get a reference to the mutation.
const ref = updateGameRef(updateGameVars);
// Variables can be defined inline as well.
const ref = updateGameRef({ id: ..., description: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateGameRef(dataConnect, updateGameVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.game_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.game_update);
});
```

## DeleteGame
You can execute the `DeleteGame` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteGame(vars: DeleteGameVariables): MutationPromise<DeleteGameData, DeleteGameVariables>;

interface DeleteGameRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteGameVariables): MutationRef<DeleteGameData, DeleteGameVariables>;
}
export const deleteGameRef: DeleteGameRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteGame(dc: DataConnect, vars: DeleteGameVariables): MutationPromise<DeleteGameData, DeleteGameVariables>;

interface DeleteGameRef {
  ...
  (dc: DataConnect, vars: DeleteGameVariables): MutationRef<DeleteGameData, DeleteGameVariables>;
}
export const deleteGameRef: DeleteGameRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteGameRef:
```typescript
const name = deleteGameRef.operationName;
console.log(name);
```

### Variables
The `DeleteGame` mutation requires an argument of type `DeleteGameVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteGameVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteGame` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteGameData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteGameData {
  game_delete?: Game_Key | null;
}
```
### Using `DeleteGame`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteGame, DeleteGameVariables } from '@dataconnect/generated';

// The `DeleteGame` mutation requires an argument of type `DeleteGameVariables`:
const deleteGameVars: DeleteGameVariables = {
  id: ..., 
};

// Call the `deleteGame()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteGame(deleteGameVars);
// Variables can be defined inline as well.
const { data } = await deleteGame({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteGame(dataConnect, deleteGameVars);

console.log(data.game_delete);

// Or, you can use the `Promise` API.
deleteGame(deleteGameVars).then((response) => {
  const data = response.data;
  console.log(data.game_delete);
});
```

### Using `DeleteGame`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteGameRef, DeleteGameVariables } from '@dataconnect/generated';

// The `DeleteGame` mutation requires an argument of type `DeleteGameVariables`:
const deleteGameVars: DeleteGameVariables = {
  id: ..., 
};

// Call the `deleteGameRef()` function to get a reference to the mutation.
const ref = deleteGameRef(deleteGameVars);
// Variables can be defined inline as well.
const ref = deleteGameRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteGameRef(dataConnect, deleteGameVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.game_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.game_delete);
});
```

## AddLibraryEntry
You can execute the `AddLibraryEntry` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
addLibraryEntry(vars: AddLibraryEntryVariables): MutationPromise<AddLibraryEntryData, AddLibraryEntryVariables>;

interface AddLibraryEntryRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddLibraryEntryVariables): MutationRef<AddLibraryEntryData, AddLibraryEntryVariables>;
}
export const addLibraryEntryRef: AddLibraryEntryRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
addLibraryEntry(dc: DataConnect, vars: AddLibraryEntryVariables): MutationPromise<AddLibraryEntryData, AddLibraryEntryVariables>;

interface AddLibraryEntryRef {
  ...
  (dc: DataConnect, vars: AddLibraryEntryVariables): MutationRef<AddLibraryEntryData, AddLibraryEntryVariables>;
}
export const addLibraryEntryRef: AddLibraryEntryRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the addLibraryEntryRef:
```typescript
const name = addLibraryEntryRef.operationName;
console.log(name);
```

### Variables
The `AddLibraryEntry` mutation requires an argument of type `AddLibraryEntryVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AddLibraryEntryVariables {
  gameId: UUIDString;
  status: string;
}
```
### Return Type
Recall that executing the `AddLibraryEntry` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AddLibraryEntryData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AddLibraryEntryData {
  libraryEntry_insert: LibraryEntry_Key;
}
```
### Using `AddLibraryEntry`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, addLibraryEntry, AddLibraryEntryVariables } from '@dataconnect/generated';

// The `AddLibraryEntry` mutation requires an argument of type `AddLibraryEntryVariables`:
const addLibraryEntryVars: AddLibraryEntryVariables = {
  gameId: ..., 
  status: ..., 
};

// Call the `addLibraryEntry()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await addLibraryEntry(addLibraryEntryVars);
// Variables can be defined inline as well.
const { data } = await addLibraryEntry({ gameId: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await addLibraryEntry(dataConnect, addLibraryEntryVars);

console.log(data.libraryEntry_insert);

// Or, you can use the `Promise` API.
addLibraryEntry(addLibraryEntryVars).then((response) => {
  const data = response.data;
  console.log(data.libraryEntry_insert);
});
```

### Using `AddLibraryEntry`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, addLibraryEntryRef, AddLibraryEntryVariables } from '@dataconnect/generated';

// The `AddLibraryEntry` mutation requires an argument of type `AddLibraryEntryVariables`:
const addLibraryEntryVars: AddLibraryEntryVariables = {
  gameId: ..., 
  status: ..., 
};

// Call the `addLibraryEntryRef()` function to get a reference to the mutation.
const ref = addLibraryEntryRef(addLibraryEntryVars);
// Variables can be defined inline as well.
const ref = addLibraryEntryRef({ gameId: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = addLibraryEntryRef(dataConnect, addLibraryEntryVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.libraryEntry_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.libraryEntry_insert);
});
```

## UpdateLibraryEntry
You can execute the `UpdateLibraryEntry` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateLibraryEntry(vars: UpdateLibraryEntryVariables): MutationPromise<UpdateLibraryEntryData, UpdateLibraryEntryVariables>;

interface UpdateLibraryEntryRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateLibraryEntryVariables): MutationRef<UpdateLibraryEntryData, UpdateLibraryEntryVariables>;
}
export const updateLibraryEntryRef: UpdateLibraryEntryRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateLibraryEntry(dc: DataConnect, vars: UpdateLibraryEntryVariables): MutationPromise<UpdateLibraryEntryData, UpdateLibraryEntryVariables>;

interface UpdateLibraryEntryRef {
  ...
  (dc: DataConnect, vars: UpdateLibraryEntryVariables): MutationRef<UpdateLibraryEntryData, UpdateLibraryEntryVariables>;
}
export const updateLibraryEntryRef: UpdateLibraryEntryRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateLibraryEntryRef:
```typescript
const name = updateLibraryEntryRef.operationName;
console.log(name);
```

### Variables
The `UpdateLibraryEntry` mutation requires an argument of type `UpdateLibraryEntryVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateLibraryEntryVariables {
  id: UUIDString;
  hoursPlayed?: number | null;
  status?: string | null;
}
```
### Return Type
Recall that executing the `UpdateLibraryEntry` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateLibraryEntryData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateLibraryEntryData {
  libraryEntry_update?: LibraryEntry_Key | null;
}
```
### Using `UpdateLibraryEntry`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateLibraryEntry, UpdateLibraryEntryVariables } from '@dataconnect/generated';

// The `UpdateLibraryEntry` mutation requires an argument of type `UpdateLibraryEntryVariables`:
const updateLibraryEntryVars: UpdateLibraryEntryVariables = {
  id: ..., 
  hoursPlayed: ..., // optional
  status: ..., // optional
};

// Call the `updateLibraryEntry()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateLibraryEntry(updateLibraryEntryVars);
// Variables can be defined inline as well.
const { data } = await updateLibraryEntry({ id: ..., hoursPlayed: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateLibraryEntry(dataConnect, updateLibraryEntryVars);

console.log(data.libraryEntry_update);

// Or, you can use the `Promise` API.
updateLibraryEntry(updateLibraryEntryVars).then((response) => {
  const data = response.data;
  console.log(data.libraryEntry_update);
});
```

### Using `UpdateLibraryEntry`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateLibraryEntryRef, UpdateLibraryEntryVariables } from '@dataconnect/generated';

// The `UpdateLibraryEntry` mutation requires an argument of type `UpdateLibraryEntryVariables`:
const updateLibraryEntryVars: UpdateLibraryEntryVariables = {
  id: ..., 
  hoursPlayed: ..., // optional
  status: ..., // optional
};

// Call the `updateLibraryEntryRef()` function to get a reference to the mutation.
const ref = updateLibraryEntryRef(updateLibraryEntryVars);
// Variables can be defined inline as well.
const ref = updateLibraryEntryRef({ id: ..., hoursPlayed: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateLibraryEntryRef(dataConnect, updateLibraryEntryVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.libraryEntry_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.libraryEntry_update);
});
```

## DeleteLibraryEntry
You can execute the `DeleteLibraryEntry` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteLibraryEntry(vars: DeleteLibraryEntryVariables): MutationPromise<DeleteLibraryEntryData, DeleteLibraryEntryVariables>;

interface DeleteLibraryEntryRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteLibraryEntryVariables): MutationRef<DeleteLibraryEntryData, DeleteLibraryEntryVariables>;
}
export const deleteLibraryEntryRef: DeleteLibraryEntryRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteLibraryEntry(dc: DataConnect, vars: DeleteLibraryEntryVariables): MutationPromise<DeleteLibraryEntryData, DeleteLibraryEntryVariables>;

interface DeleteLibraryEntryRef {
  ...
  (dc: DataConnect, vars: DeleteLibraryEntryVariables): MutationRef<DeleteLibraryEntryData, DeleteLibraryEntryVariables>;
}
export const deleteLibraryEntryRef: DeleteLibraryEntryRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteLibraryEntryRef:
```typescript
const name = deleteLibraryEntryRef.operationName;
console.log(name);
```

### Variables
The `DeleteLibraryEntry` mutation requires an argument of type `DeleteLibraryEntryVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteLibraryEntryVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteLibraryEntry` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteLibraryEntryData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteLibraryEntryData {
  libraryEntry_delete?: LibraryEntry_Key | null;
}
```
### Using `DeleteLibraryEntry`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteLibraryEntry, DeleteLibraryEntryVariables } from '@dataconnect/generated';

// The `DeleteLibraryEntry` mutation requires an argument of type `DeleteLibraryEntryVariables`:
const deleteLibraryEntryVars: DeleteLibraryEntryVariables = {
  id: ..., 
};

// Call the `deleteLibraryEntry()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteLibraryEntry(deleteLibraryEntryVars);
// Variables can be defined inline as well.
const { data } = await deleteLibraryEntry({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteLibraryEntry(dataConnect, deleteLibraryEntryVars);

console.log(data.libraryEntry_delete);

// Or, you can use the `Promise` API.
deleteLibraryEntry(deleteLibraryEntryVars).then((response) => {
  const data = response.data;
  console.log(data.libraryEntry_delete);
});
```

### Using `DeleteLibraryEntry`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteLibraryEntryRef, DeleteLibraryEntryVariables } from '@dataconnect/generated';

// The `DeleteLibraryEntry` mutation requires an argument of type `DeleteLibraryEntryVariables`:
const deleteLibraryEntryVars: DeleteLibraryEntryVariables = {
  id: ..., 
};

// Call the `deleteLibraryEntryRef()` function to get a reference to the mutation.
const ref = deleteLibraryEntryRef(deleteLibraryEntryVars);
// Variables can be defined inline as well.
const ref = deleteLibraryEntryRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteLibraryEntryRef(dataConnect, deleteLibraryEntryVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.libraryEntry_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.libraryEntry_delete);
});
```

## CreateReview
You can execute the `CreateReview` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createReview(vars: CreateReviewVariables): MutationPromise<CreateReviewData, CreateReviewVariables>;

interface CreateReviewRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateReviewVariables): MutationRef<CreateReviewData, CreateReviewVariables>;
}
export const createReviewRef: CreateReviewRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createReview(dc: DataConnect, vars: CreateReviewVariables): MutationPromise<CreateReviewData, CreateReviewVariables>;

interface CreateReviewRef {
  ...
  (dc: DataConnect, vars: CreateReviewVariables): MutationRef<CreateReviewData, CreateReviewVariables>;
}
export const createReviewRef: CreateReviewRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createReviewRef:
```typescript
const name = createReviewRef.operationName;
console.log(name);
```

### Variables
The `CreateReview` mutation requires an argument of type `CreateReviewVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateReviewVariables {
  gameId: UUIDString;
  rating: number;
  comment?: string | null;
}
```
### Return Type
Recall that executing the `CreateReview` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateReviewData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateReviewData {
  review_insert: Review_Key;
}
```
### Using `CreateReview`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createReview, CreateReviewVariables } from '@dataconnect/generated';

// The `CreateReview` mutation requires an argument of type `CreateReviewVariables`:
const createReviewVars: CreateReviewVariables = {
  gameId: ..., 
  rating: ..., 
  comment: ..., // optional
};

// Call the `createReview()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createReview(createReviewVars);
// Variables can be defined inline as well.
const { data } = await createReview({ gameId: ..., rating: ..., comment: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createReview(dataConnect, createReviewVars);

console.log(data.review_insert);

// Or, you can use the `Promise` API.
createReview(createReviewVars).then((response) => {
  const data = response.data;
  console.log(data.review_insert);
});
```

### Using `CreateReview`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createReviewRef, CreateReviewVariables } from '@dataconnect/generated';

// The `CreateReview` mutation requires an argument of type `CreateReviewVariables`:
const createReviewVars: CreateReviewVariables = {
  gameId: ..., 
  rating: ..., 
  comment: ..., // optional
};

// Call the `createReviewRef()` function to get a reference to the mutation.
const ref = createReviewRef(createReviewVars);
// Variables can be defined inline as well.
const ref = createReviewRef({ gameId: ..., rating: ..., comment: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createReviewRef(dataConnect, createReviewVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.review_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.review_insert);
});
```

## UpdateReview
You can execute the `UpdateReview` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateReview(vars: UpdateReviewVariables): MutationPromise<UpdateReviewData, UpdateReviewVariables>;

interface UpdateReviewRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateReviewVariables): MutationRef<UpdateReviewData, UpdateReviewVariables>;
}
export const updateReviewRef: UpdateReviewRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateReview(dc: DataConnect, vars: UpdateReviewVariables): MutationPromise<UpdateReviewData, UpdateReviewVariables>;

interface UpdateReviewRef {
  ...
  (dc: DataConnect, vars: UpdateReviewVariables): MutationRef<UpdateReviewData, UpdateReviewVariables>;
}
export const updateReviewRef: UpdateReviewRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateReviewRef:
```typescript
const name = updateReviewRef.operationName;
console.log(name);
```

### Variables
The `UpdateReview` mutation requires an argument of type `UpdateReviewVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateReviewVariables {
  id: UUIDString;
  rating?: number | null;
  comment?: string | null;
}
```
### Return Type
Recall that executing the `UpdateReview` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateReviewData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateReviewData {
  review_update?: Review_Key | null;
}
```
### Using `UpdateReview`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateReview, UpdateReviewVariables } from '@dataconnect/generated';

// The `UpdateReview` mutation requires an argument of type `UpdateReviewVariables`:
const updateReviewVars: UpdateReviewVariables = {
  id: ..., 
  rating: ..., // optional
  comment: ..., // optional
};

// Call the `updateReview()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateReview(updateReviewVars);
// Variables can be defined inline as well.
const { data } = await updateReview({ id: ..., rating: ..., comment: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateReview(dataConnect, updateReviewVars);

console.log(data.review_update);

// Or, you can use the `Promise` API.
updateReview(updateReviewVars).then((response) => {
  const data = response.data;
  console.log(data.review_update);
});
```

### Using `UpdateReview`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateReviewRef, UpdateReviewVariables } from '@dataconnect/generated';

// The `UpdateReview` mutation requires an argument of type `UpdateReviewVariables`:
const updateReviewVars: UpdateReviewVariables = {
  id: ..., 
  rating: ..., // optional
  comment: ..., // optional
};

// Call the `updateReviewRef()` function to get a reference to the mutation.
const ref = updateReviewRef(updateReviewVars);
// Variables can be defined inline as well.
const ref = updateReviewRef({ id: ..., rating: ..., comment: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateReviewRef(dataConnect, updateReviewVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.review_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.review_update);
});
```

## DeleteReview
You can execute the `DeleteReview` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteReview(vars: DeleteReviewVariables): MutationPromise<DeleteReviewData, DeleteReviewVariables>;

interface DeleteReviewRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteReviewVariables): MutationRef<DeleteReviewData, DeleteReviewVariables>;
}
export const deleteReviewRef: DeleteReviewRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteReview(dc: DataConnect, vars: DeleteReviewVariables): MutationPromise<DeleteReviewData, DeleteReviewVariables>;

interface DeleteReviewRef {
  ...
  (dc: DataConnect, vars: DeleteReviewVariables): MutationRef<DeleteReviewData, DeleteReviewVariables>;
}
export const deleteReviewRef: DeleteReviewRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteReviewRef:
```typescript
const name = deleteReviewRef.operationName;
console.log(name);
```

### Variables
The `DeleteReview` mutation requires an argument of type `DeleteReviewVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteReviewVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteReview` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteReviewData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteReviewData {
  review_delete?: Review_Key | null;
}
```
### Using `DeleteReview`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteReview, DeleteReviewVariables } from '@dataconnect/generated';

// The `DeleteReview` mutation requires an argument of type `DeleteReviewVariables`:
const deleteReviewVars: DeleteReviewVariables = {
  id: ..., 
};

// Call the `deleteReview()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteReview(deleteReviewVars);
// Variables can be defined inline as well.
const { data } = await deleteReview({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteReview(dataConnect, deleteReviewVars);

console.log(data.review_delete);

// Or, you can use the `Promise` API.
deleteReview(deleteReviewVars).then((response) => {
  const data = response.data;
  console.log(data.review_delete);
});
```

### Using `DeleteReview`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteReviewRef, DeleteReviewVariables } from '@dataconnect/generated';

// The `DeleteReview` mutation requires an argument of type `DeleteReviewVariables`:
const deleteReviewVars: DeleteReviewVariables = {
  id: ..., 
};

// Call the `deleteReviewRef()` function to get a reference to the mutation.
const ref = deleteReviewRef(deleteReviewVars);
// Variables can be defined inline as well.
const ref = deleteReviewRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteReviewRef(dataConnect, deleteReviewVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.review_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.review_delete);
});
```

## CreateDiscussion
You can execute the `CreateDiscussion` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createDiscussion(vars: CreateDiscussionVariables): MutationPromise<CreateDiscussionData, CreateDiscussionVariables>;

interface CreateDiscussionRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateDiscussionVariables): MutationRef<CreateDiscussionData, CreateDiscussionVariables>;
}
export const createDiscussionRef: CreateDiscussionRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createDiscussion(dc: DataConnect, vars: CreateDiscussionVariables): MutationPromise<CreateDiscussionData, CreateDiscussionVariables>;

interface CreateDiscussionRef {
  ...
  (dc: DataConnect, vars: CreateDiscussionVariables): MutationRef<CreateDiscussionData, CreateDiscussionVariables>;
}
export const createDiscussionRef: CreateDiscussionRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createDiscussionRef:
```typescript
const name = createDiscussionRef.operationName;
console.log(name);
```

### Variables
The `CreateDiscussion` mutation requires an argument of type `CreateDiscussionVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateDiscussionVariables {
  gameId: UUIDString;
  title: string;
  content?: string | null;
}
```
### Return Type
Recall that executing the `CreateDiscussion` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateDiscussionData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateDiscussionData {
  discussion_insert: Discussion_Key;
}
```
### Using `CreateDiscussion`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createDiscussion, CreateDiscussionVariables } from '@dataconnect/generated';

// The `CreateDiscussion` mutation requires an argument of type `CreateDiscussionVariables`:
const createDiscussionVars: CreateDiscussionVariables = {
  gameId: ..., 
  title: ..., 
  content: ..., // optional
};

// Call the `createDiscussion()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createDiscussion(createDiscussionVars);
// Variables can be defined inline as well.
const { data } = await createDiscussion({ gameId: ..., title: ..., content: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createDiscussion(dataConnect, createDiscussionVars);

console.log(data.discussion_insert);

// Or, you can use the `Promise` API.
createDiscussion(createDiscussionVars).then((response) => {
  const data = response.data;
  console.log(data.discussion_insert);
});
```

### Using `CreateDiscussion`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createDiscussionRef, CreateDiscussionVariables } from '@dataconnect/generated';

// The `CreateDiscussion` mutation requires an argument of type `CreateDiscussionVariables`:
const createDiscussionVars: CreateDiscussionVariables = {
  gameId: ..., 
  title: ..., 
  content: ..., // optional
};

// Call the `createDiscussionRef()` function to get a reference to the mutation.
const ref = createDiscussionRef(createDiscussionVars);
// Variables can be defined inline as well.
const ref = createDiscussionRef({ gameId: ..., title: ..., content: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createDiscussionRef(dataConnect, createDiscussionVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.discussion_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.discussion_insert);
});
```

## UpdateDiscussion
You can execute the `UpdateDiscussion` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateDiscussion(vars: UpdateDiscussionVariables): MutationPromise<UpdateDiscussionData, UpdateDiscussionVariables>;

interface UpdateDiscussionRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateDiscussionVariables): MutationRef<UpdateDiscussionData, UpdateDiscussionVariables>;
}
export const updateDiscussionRef: UpdateDiscussionRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateDiscussion(dc: DataConnect, vars: UpdateDiscussionVariables): MutationPromise<UpdateDiscussionData, UpdateDiscussionVariables>;

interface UpdateDiscussionRef {
  ...
  (dc: DataConnect, vars: UpdateDiscussionVariables): MutationRef<UpdateDiscussionData, UpdateDiscussionVariables>;
}
export const updateDiscussionRef: UpdateDiscussionRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateDiscussionRef:
```typescript
const name = updateDiscussionRef.operationName;
console.log(name);
```

### Variables
The `UpdateDiscussion` mutation requires an argument of type `UpdateDiscussionVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateDiscussionVariables {
  id: UUIDString;
  content?: string | null;
}
```
### Return Type
Recall that executing the `UpdateDiscussion` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateDiscussionData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateDiscussionData {
  discussion_update?: Discussion_Key | null;
}
```
### Using `UpdateDiscussion`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateDiscussion, UpdateDiscussionVariables } from '@dataconnect/generated';

// The `UpdateDiscussion` mutation requires an argument of type `UpdateDiscussionVariables`:
const updateDiscussionVars: UpdateDiscussionVariables = {
  id: ..., 
  content: ..., // optional
};

// Call the `updateDiscussion()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateDiscussion(updateDiscussionVars);
// Variables can be defined inline as well.
const { data } = await updateDiscussion({ id: ..., content: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateDiscussion(dataConnect, updateDiscussionVars);

console.log(data.discussion_update);

// Or, you can use the `Promise` API.
updateDiscussion(updateDiscussionVars).then((response) => {
  const data = response.data;
  console.log(data.discussion_update);
});
```

### Using `UpdateDiscussion`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateDiscussionRef, UpdateDiscussionVariables } from '@dataconnect/generated';

// The `UpdateDiscussion` mutation requires an argument of type `UpdateDiscussionVariables`:
const updateDiscussionVars: UpdateDiscussionVariables = {
  id: ..., 
  content: ..., // optional
};

// Call the `updateDiscussionRef()` function to get a reference to the mutation.
const ref = updateDiscussionRef(updateDiscussionVars);
// Variables can be defined inline as well.
const ref = updateDiscussionRef({ id: ..., content: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateDiscussionRef(dataConnect, updateDiscussionVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.discussion_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.discussion_update);
});
```

## DeleteDiscussion
You can execute the `DeleteDiscussion` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteDiscussion(vars: DeleteDiscussionVariables): MutationPromise<DeleteDiscussionData, DeleteDiscussionVariables>;

interface DeleteDiscussionRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteDiscussionVariables): MutationRef<DeleteDiscussionData, DeleteDiscussionVariables>;
}
export const deleteDiscussionRef: DeleteDiscussionRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteDiscussion(dc: DataConnect, vars: DeleteDiscussionVariables): MutationPromise<DeleteDiscussionData, DeleteDiscussionVariables>;

interface DeleteDiscussionRef {
  ...
  (dc: DataConnect, vars: DeleteDiscussionVariables): MutationRef<DeleteDiscussionData, DeleteDiscussionVariables>;
}
export const deleteDiscussionRef: DeleteDiscussionRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteDiscussionRef:
```typescript
const name = deleteDiscussionRef.operationName;
console.log(name);
```

### Variables
The `DeleteDiscussion` mutation requires an argument of type `DeleteDiscussionVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteDiscussionVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteDiscussion` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteDiscussionData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteDiscussionData {
  discussion_delete?: Discussion_Key | null;
}
```
### Using `DeleteDiscussion`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteDiscussion, DeleteDiscussionVariables } from '@dataconnect/generated';

// The `DeleteDiscussion` mutation requires an argument of type `DeleteDiscussionVariables`:
const deleteDiscussionVars: DeleteDiscussionVariables = {
  id: ..., 
};

// Call the `deleteDiscussion()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteDiscussion(deleteDiscussionVars);
// Variables can be defined inline as well.
const { data } = await deleteDiscussion({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteDiscussion(dataConnect, deleteDiscussionVars);

console.log(data.discussion_delete);

// Or, you can use the `Promise` API.
deleteDiscussion(deleteDiscussionVars).then((response) => {
  const data = response.data;
  console.log(data.discussion_delete);
});
```

### Using `DeleteDiscussion`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteDiscussionRef, DeleteDiscussionVariables } from '@dataconnect/generated';

// The `DeleteDiscussion` mutation requires an argument of type `DeleteDiscussionVariables`:
const deleteDiscussionVars: DeleteDiscussionVariables = {
  id: ..., 
};

// Call the `deleteDiscussionRef()` function to get a reference to the mutation.
const ref = deleteDiscussionRef(deleteDiscussionVars);
// Variables can be defined inline as well.
const ref = deleteDiscussionRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteDiscussionRef(dataConnect, deleteDiscussionVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.discussion_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.discussion_delete);
});
```

## FollowUser
You can execute the `FollowUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
followUser(vars: FollowUserVariables): MutationPromise<FollowUserData, FollowUserVariables>;

interface FollowUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: FollowUserVariables): MutationRef<FollowUserData, FollowUserVariables>;
}
export const followUserRef: FollowUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
followUser(dc: DataConnect, vars: FollowUserVariables): MutationPromise<FollowUserData, FollowUserVariables>;

interface FollowUserRef {
  ...
  (dc: DataConnect, vars: FollowUserVariables): MutationRef<FollowUserData, FollowUserVariables>;
}
export const followUserRef: FollowUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the followUserRef:
```typescript
const name = followUserRef.operationName;
console.log(name);
```

### Variables
The `FollowUser` mutation requires an argument of type `FollowUserVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface FollowUserVariables {
  followingId: UUIDString;
}
```
### Return Type
Recall that executing the `FollowUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `FollowUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface FollowUserData {
  follow_insert: Follow_Key;
}
```
### Using `FollowUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, followUser, FollowUserVariables } from '@dataconnect/generated';

// The `FollowUser` mutation requires an argument of type `FollowUserVariables`:
const followUserVars: FollowUserVariables = {
  followingId: ..., 
};

// Call the `followUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await followUser(followUserVars);
// Variables can be defined inline as well.
const { data } = await followUser({ followingId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await followUser(dataConnect, followUserVars);

console.log(data.follow_insert);

// Or, you can use the `Promise` API.
followUser(followUserVars).then((response) => {
  const data = response.data;
  console.log(data.follow_insert);
});
```

### Using `FollowUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, followUserRef, FollowUserVariables } from '@dataconnect/generated';

// The `FollowUser` mutation requires an argument of type `FollowUserVariables`:
const followUserVars: FollowUserVariables = {
  followingId: ..., 
};

// Call the `followUserRef()` function to get a reference to the mutation.
const ref = followUserRef(followUserVars);
// Variables can be defined inline as well.
const ref = followUserRef({ followingId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = followUserRef(dataConnect, followUserVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.follow_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.follow_insert);
});
```

## UnfollowUser
You can execute the `UnfollowUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
unfollowUser(vars: UnfollowUserVariables): MutationPromise<UnfollowUserData, UnfollowUserVariables>;

interface UnfollowUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UnfollowUserVariables): MutationRef<UnfollowUserData, UnfollowUserVariables>;
}
export const unfollowUserRef: UnfollowUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
unfollowUser(dc: DataConnect, vars: UnfollowUserVariables): MutationPromise<UnfollowUserData, UnfollowUserVariables>;

interface UnfollowUserRef {
  ...
  (dc: DataConnect, vars: UnfollowUserVariables): MutationRef<UnfollowUserData, UnfollowUserVariables>;
}
export const unfollowUserRef: UnfollowUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the unfollowUserRef:
```typescript
const name = unfollowUserRef.operationName;
console.log(name);
```

### Variables
The `UnfollowUser` mutation requires an argument of type `UnfollowUserVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UnfollowUserVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `UnfollowUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UnfollowUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UnfollowUserData {
  follow_delete?: Follow_Key | null;
}
```
### Using `UnfollowUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, unfollowUser, UnfollowUserVariables } from '@dataconnect/generated';

// The `UnfollowUser` mutation requires an argument of type `UnfollowUserVariables`:
const unfollowUserVars: UnfollowUserVariables = {
  id: ..., 
};

// Call the `unfollowUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await unfollowUser(unfollowUserVars);
// Variables can be defined inline as well.
const { data } = await unfollowUser({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await unfollowUser(dataConnect, unfollowUserVars);

console.log(data.follow_delete);

// Or, you can use the `Promise` API.
unfollowUser(unfollowUserVars).then((response) => {
  const data = response.data;
  console.log(data.follow_delete);
});
```

### Using `UnfollowUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, unfollowUserRef, UnfollowUserVariables } from '@dataconnect/generated';

// The `UnfollowUser` mutation requires an argument of type `UnfollowUserVariables`:
const unfollowUserVars: UnfollowUserVariables = {
  id: ..., 
};

// Call the `unfollowUserRef()` function to get a reference to the mutation.
const ref = unfollowUserRef(unfollowUserVars);
// Variables can be defined inline as well.
const ref = unfollowUserRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = unfollowUserRef(dataConnect, unfollowUserVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.follow_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.follow_delete);
});
```

