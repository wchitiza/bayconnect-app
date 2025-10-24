import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'bayconnect-app',
  location: 'us-east4'
};

export const createUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateUser', inputVars);
}
createUserRef.operationName = 'CreateUser';

export function createUser(dcOrVars, vars) {
  return executeMutation(createUserRef(dcOrVars, vars));
}

export const getServiceProviderProfileRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetServiceProviderProfile');
}
getServiceProviderProfileRef.operationName = 'GetServiceProviderProfile';

export function getServiceProviderProfile(dc) {
  return executeQuery(getServiceProviderProfileRef(dc));
}

export const createServiceProviderProfileRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateServiceProviderProfile', inputVars);
}
createServiceProviderProfileRef.operationName = 'CreateServiceProviderProfile';

export function createServiceProviderProfile(dcOrVars, vars) {
  return executeMutation(createServiceProviderProfileRef(dcOrVars, vars));
}

export const listServiceCategoriesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListServiceCategories');
}
listServiceCategoriesRef.operationName = 'ListServiceCategories';

export function listServiceCategories(dc) {
  return executeQuery(listServiceCategoriesRef(dc));
}

