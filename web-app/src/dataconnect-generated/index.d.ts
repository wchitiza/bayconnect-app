import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface Booking_Key {
  id: UUIDString;
  __typename?: 'Booking_Key';
}

export interface CreateServiceProviderProfileData {
  serviceProviderProfile_insert: ServiceProviderProfile_Key;
}

export interface CreateServiceProviderProfileVariables {
  businessName: string;
  description: string;
  hourlyRate: number;
  location: string;
}

export interface CreateUserData {
  user_insert: User_Key;
}

export interface CreateUserVariables {
  displayName: string;
  email: string;
  userType: string;
}

export interface GetServiceProviderProfileData {
  serviceProviderProfile?: {
    id: UUIDString;
    businessName?: string | null;
    description: string;
    hourlyRate: number;
    location: string;
  } & ServiceProviderProfile_Key;
}

export interface ListServiceCategoriesData {
  serviceCategories: ({
    id: UUIDString;
    name: string;
    description?: string | null;
  } & ServiceCategory_Key)[];
}

export interface ProviderSubscription_Key {
  id: UUIDString;
  __typename?: 'ProviderSubscription_Key';
}

export interface Review_Key {
  id: UUIDString;
  __typename?: 'Review_Key';
}

export interface ServiceCategory_Key {
  id: UUIDString;
  __typename?: 'ServiceCategory_Key';
}

export interface ServiceProviderProfile_Key {
  id: UUIDString;
  __typename?: 'ServiceProviderProfile_Key';
}

export interface SubscriptionType_Key {
  id: UUIDString;
  __typename?: 'SubscriptionType_Key';
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
  operationName: string;
}
export const createUserRef: CreateUserRef;

export function createUser(vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;
export function createUser(dc: DataConnect, vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface GetServiceProviderProfileRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetServiceProviderProfileData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetServiceProviderProfileData, undefined>;
  operationName: string;
}
export const getServiceProviderProfileRef: GetServiceProviderProfileRef;

export function getServiceProviderProfile(): QueryPromise<GetServiceProviderProfileData, undefined>;
export function getServiceProviderProfile(dc: DataConnect): QueryPromise<GetServiceProviderProfileData, undefined>;

interface CreateServiceProviderProfileRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateServiceProviderProfileVariables): MutationRef<CreateServiceProviderProfileData, CreateServiceProviderProfileVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateServiceProviderProfileVariables): MutationRef<CreateServiceProviderProfileData, CreateServiceProviderProfileVariables>;
  operationName: string;
}
export const createServiceProviderProfileRef: CreateServiceProviderProfileRef;

export function createServiceProviderProfile(vars: CreateServiceProviderProfileVariables): MutationPromise<CreateServiceProviderProfileData, CreateServiceProviderProfileVariables>;
export function createServiceProviderProfile(dc: DataConnect, vars: CreateServiceProviderProfileVariables): MutationPromise<CreateServiceProviderProfileData, CreateServiceProviderProfileVariables>;

interface ListServiceCategoriesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListServiceCategoriesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListServiceCategoriesData, undefined>;
  operationName: string;
}
export const listServiceCategoriesRef: ListServiceCategoriesRef;

export function listServiceCategories(): QueryPromise<ListServiceCategoriesData, undefined>;
export function listServiceCategories(dc: DataConnect): QueryPromise<ListServiceCategoriesData, undefined>;

