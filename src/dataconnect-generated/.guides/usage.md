# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.





## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { createUser, updateUser, deleteUser, getMyUser, listUsers, createGame, updateGame, deleteGame, getGame, listGames } from '@dataconnect/generated';


// Operation CreateUser: 
const { data } = await CreateUser(dataConnect);

// Operation UpdateUser:  For variables, look at type UpdateUserVars in ../index.d.ts
const { data } = await UpdateUser(dataConnect, updateUserVars);

// Operation DeleteUser: 
const { data } = await DeleteUser(dataConnect);

// Operation GetMyUser: 
const { data } = await GetMyUser(dataConnect);

// Operation ListUsers: 
const { data } = await ListUsers(dataConnect);

// Operation CreateGame:  For variables, look at type CreateGameVars in ../index.d.ts
const { data } = await CreateGame(dataConnect, createGameVars);

// Operation UpdateGame:  For variables, look at type UpdateGameVars in ../index.d.ts
const { data } = await UpdateGame(dataConnect, updateGameVars);

// Operation DeleteGame:  For variables, look at type DeleteGameVars in ../index.d.ts
const { data } = await DeleteGame(dataConnect, deleteGameVars);

// Operation GetGame:  For variables, look at type GetGameVars in ../index.d.ts
const { data } = await GetGame(dataConnect, getGameVars);

// Operation ListGames: 
const { data } = await ListGames(dataConnect);


```