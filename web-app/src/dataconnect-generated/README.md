# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetServiceProviderProfile*](#getserviceproviderprofile)
  - [*ListServiceCategories*](#listservicecategories)
- [**Mutations**](#mutations)
  - [*CreateUser*](#createuser)
  - [*CreateServiceProviderProfile*](#createserviceproviderprofile)

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

## GetServiceProviderProfile
You can execute the `GetServiceProviderProfile` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getServiceProviderProfile(): QueryPromise<GetServiceProviderProfileData, undefined>;

interface GetServiceProviderProfileRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetServiceProviderProfileData, undefined>;
}
export const getServiceProviderProfileRef: GetServiceProviderProfileRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getServiceProviderProfile(dc: DataConnect): QueryPromise<GetServiceProviderProfileData, undefined>;

interface GetServiceProviderProfileRef {
  ...
  (dc: DataConnect): QueryRef<GetServiceProviderProfileData, undefined>;
}
export const getServiceProviderProfileRef: GetServiceProviderProfileRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getServiceProviderProfileRef:
```typescript
const name = getServiceProviderProfileRef.operationName;
console.log(name);
```

### Variables
The `GetServiceProviderProfile` query has no variables.
### Return Type
Recall that executing the `GetServiceProviderProfile` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetServiceProviderProfileData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetServiceProviderProfileData {
  serviceProviderProfile?: {
    id: UUIDString;
    businessName?: string | null;
    description: string;
    hourlyRate: number;
    location: string;
  } & ServiceProviderProfile_Key;
}
```
### Using `GetServiceProviderProfile`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getServiceProviderProfile } from '@dataconnect/generated';


// Call the `getServiceProviderProfile()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getServiceProviderProfile();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getServiceProviderProfile(dataConnect);

console.log(data.serviceProviderProfile);

// Or, you can use the `Promise` API.
getServiceProviderProfile().then((response) => {
  const data = response.data;
  console.log(data.serviceProviderProfile);
});
```

### Using `GetServiceProviderProfile`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getServiceProviderProfileRef } from '@dataconnect/generated';


// Call the `getServiceProviderProfileRef()` function to get a reference to the query.
const ref = getServiceProviderProfileRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getServiceProviderProfileRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.serviceProviderProfile);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.serviceProviderProfile);
});
```

## ListServiceCategories
You can execute the `ListServiceCategories` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listServiceCategories(): QueryPromise<ListServiceCategoriesData, undefined>;

interface ListServiceCategoriesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListServiceCategoriesData, undefined>;
}
export const listServiceCategoriesRef: ListServiceCategoriesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listServiceCategories(dc: DataConnect): QueryPromise<ListServiceCategoriesData, undefined>;

interface ListServiceCategoriesRef {
  ...
  (dc: DataConnect): QueryRef<ListServiceCategoriesData, undefined>;
}
export const listServiceCategoriesRef: ListServiceCategoriesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listServiceCategoriesRef:
```typescript
const name = listServiceCategoriesRef.operationName;
console.log(name);
```

### Variables
The `ListServiceCategories` query has no variables.
### Return Type
Recall that executing the `ListServiceCategories` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListServiceCategoriesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListServiceCategoriesData {
  serviceCategories: ({
    id: UUIDString;
    name: string;
    description?: string | null;
  } & ServiceCategory_Key)[];
}
```
### Using `ListServiceCategories`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listServiceCategories } from '@dataconnect/generated';


// Call the `listServiceCategories()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listServiceCategories();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listServiceCategories(dataConnect);

console.log(data.serviceCategories);

// Or, you can use the `Promise` API.
listServiceCategories().then((response) => {
  const data = response.data;
  console.log(data.serviceCategories);
});
```

### Using `ListServiceCategories`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listServiceCategoriesRef } from '@dataconnect/generated';


// Call the `listServiceCategoriesRef()` function to get a reference to the query.
const ref = listServiceCategoriesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listServiceCategoriesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.serviceCategories);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.serviceCategories);
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
createUser(vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface CreateUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
}
export const createUserRef: CreateUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createUser(dc: DataConnect, vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface CreateUserRef {
  ...
  (dc: DataConnect, vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
}
export const createUserRef: CreateUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createUserRef:
```typescript
const name = createUserRef.operationName;
console.log(name);
```

### Variables
The `CreateUser` mutation requires an argument of type `CreateUserVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateUserVariables {
  displayName: string;
  email: string;
  userType: string;
}
```
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
import { connectorConfig, createUser, CreateUserVariables } from '@dataconnect/generated';

// The `CreateUser` mutation requires an argument of type `CreateUserVariables`:
const createUserVars: CreateUserVariables = {
  displayName: ..., 
  email: ..., 
  userType: ..., 
};

// Call the `createUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createUser(createUserVars);
// Variables can be defined inline as well.
const { data } = await createUser({ displayName: ..., email: ..., userType: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createUser(dataConnect, createUserVars);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
createUser(createUserVars).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

### Using `CreateUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createUserRef, CreateUserVariables } from '@dataconnect/generated';

// The `CreateUser` mutation requires an argument of type `CreateUserVariables`:
const createUserVars: CreateUserVariables = {
  displayName: ..., 
  email: ..., 
  userType: ..., 
};

// Call the `createUserRef()` function to get a reference to the mutation.
const ref = createUserRef(createUserVars);
// Variables can be defined inline as well.
const ref = createUserRef({ displayName: ..., email: ..., userType: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createUserRef(dataConnect, createUserVars);

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

## CreateServiceProviderProfile
You can execute the `CreateServiceProviderProfile` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createServiceProviderProfile(vars: CreateServiceProviderProfileVariables): MutationPromise<CreateServiceProviderProfileData, CreateServiceProviderProfileVariables>;

interface CreateServiceProviderProfileRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateServiceProviderProfileVariables): MutationRef<CreateServiceProviderProfileData, CreateServiceProviderProfileVariables>;
}
export const createServiceProviderProfileRef: CreateServiceProviderProfileRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createServiceProviderProfile(dc: DataConnect, vars: CreateServiceProviderProfileVariables): MutationPromise<CreateServiceProviderProfileData, CreateServiceProviderProfileVariables>;

interface CreateServiceProviderProfileRef {
  ...
  (dc: DataConnect, vars: CreateServiceProviderProfileVariables): MutationRef<CreateServiceProviderProfileData, CreateServiceProviderProfileVariables>;
}
export const createServiceProviderProfileRef: CreateServiceProviderProfileRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createServiceProviderProfileRef:
```typescript
const name = createServiceProviderProfileRef.operationName;
console.log(name);
```

### Variables
The `CreateServiceProviderProfile` mutation requires an argument of type `CreateServiceProviderProfileVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateServiceProviderProfileVariables {
  businessName: string;
  description: string;
  hourlyRate: number;
  location: string;
}
```
### Return Type
Recall that executing the `CreateServiceProviderProfile` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateServiceProviderProfileData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateServiceProviderProfileData {
  serviceProviderProfile_insert: ServiceProviderProfile_Key;
}
```
### Using `CreateServiceProviderProfile`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createServiceProviderProfile, CreateServiceProviderProfileVariables } from '@dataconnect/generated';

// The `CreateServiceProviderProfile` mutation requires an argument of type `CreateServiceProviderProfileVariables`:
const createServiceProviderProfileVars: CreateServiceProviderProfileVariables = {
  businessName: ..., 
  description: ..., 
  hourlyRate: ..., 
  location: ..., 
};

// Call the `createServiceProviderProfile()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createServiceProviderProfile(createServiceProviderProfileVars);
// Variables can be defined inline as well.
const { data } = await createServiceProviderProfile({ businessName: ..., description: ..., hourlyRate: ..., location: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createServiceProviderProfile(dataConnect, createServiceProviderProfileVars);

console.log(data.serviceProviderProfile_insert);

// Or, you can use the `Promise` API.
createServiceProviderProfile(createServiceProviderProfileVars).then((response) => {
  const data = response.data;
  console.log(data.serviceProviderProfile_insert);
});
```

### Using `CreateServiceProviderProfile`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createServiceProviderProfileRef, CreateServiceProviderProfileVariables } from '@dataconnect/generated';

// The `CreateServiceProviderProfile` mutation requires an argument of type `CreateServiceProviderProfileVariables`:
const createServiceProviderProfileVars: CreateServiceProviderProfileVariables = {
  businessName: ..., 
  description: ..., 
  hourlyRate: ..., 
  location: ..., 
};

// Call the `createServiceProviderProfileRef()` function to get a reference to the mutation.
const ref = createServiceProviderProfileRef(createServiceProviderProfileVars);
// Variables can be defined inline as well.
const ref = createServiceProviderProfileRef({ businessName: ..., description: ..., hourlyRate: ..., location: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createServiceProviderProfileRef(dataConnect, createServiceProviderProfileVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.serviceProviderProfile_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.serviceProviderProfile_insert);
});
```

