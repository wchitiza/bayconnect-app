import { CreateUserData, CreateUserVariables, GetServiceProviderProfileData, CreateServiceProviderProfileData, CreateServiceProviderProfileVariables, ListServiceCategoriesData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateUser(options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, CreateUserVariables>): UseDataConnectMutationResult<CreateUserData, CreateUserVariables>;
export function useCreateUser(dc: DataConnect, options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, CreateUserVariables>): UseDataConnectMutationResult<CreateUserData, CreateUserVariables>;

export function useGetServiceProviderProfile(options?: useDataConnectQueryOptions<GetServiceProviderProfileData>): UseDataConnectQueryResult<GetServiceProviderProfileData, undefined>;
export function useGetServiceProviderProfile(dc: DataConnect, options?: useDataConnectQueryOptions<GetServiceProviderProfileData>): UseDataConnectQueryResult<GetServiceProviderProfileData, undefined>;

export function useCreateServiceProviderProfile(options?: useDataConnectMutationOptions<CreateServiceProviderProfileData, FirebaseError, CreateServiceProviderProfileVariables>): UseDataConnectMutationResult<CreateServiceProviderProfileData, CreateServiceProviderProfileVariables>;
export function useCreateServiceProviderProfile(dc: DataConnect, options?: useDataConnectMutationOptions<CreateServiceProviderProfileData, FirebaseError, CreateServiceProviderProfileVariables>): UseDataConnectMutationResult<CreateServiceProviderProfileData, CreateServiceProviderProfileVariables>;

export function useListServiceCategories(options?: useDataConnectQueryOptions<ListServiceCategoriesData>): UseDataConnectQueryResult<ListServiceCategoriesData, undefined>;
export function useListServiceCategories(dc: DataConnect, options?: useDataConnectQueryOptions<ListServiceCategoriesData>): UseDataConnectQueryResult<ListServiceCategoriesData, undefined>;
