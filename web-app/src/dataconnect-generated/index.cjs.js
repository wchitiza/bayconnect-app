const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'bayconnect-app',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const createUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateUser', inputVars);
}
createUserRef.operationName = 'CreateUser';
exports.createUserRef = createUserRef;

exports.createUser = function createUser(dcOrVars, vars) {
  return executeMutation(createUserRef(dcOrVars, vars));
};

const getServiceProviderProfileRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetServiceProviderProfile');
}
getServiceProviderProfileRef.operationName = 'GetServiceProviderProfile';
exports.getServiceProviderProfileRef = getServiceProviderProfileRef;

exports.getServiceProviderProfile = function getServiceProviderProfile(dc) {
  return executeQuery(getServiceProviderProfileRef(dc));
};

const createServiceProviderProfileRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateServiceProviderProfile', inputVars);
}
createServiceProviderProfileRef.operationName = 'CreateServiceProviderProfile';
exports.createServiceProviderProfileRef = createServiceProviderProfileRef;

exports.createServiceProviderProfile = function createServiceProviderProfile(dcOrVars, vars) {
  return executeMutation(createServiceProviderProfileRef(dcOrVars, vars));
};

const listServiceCategoriesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListServiceCategories');
}
listServiceCategoriesRef.operationName = 'ListServiceCategories';
exports.listServiceCategoriesRef = listServiceCategoriesRef;

exports.listServiceCategories = function listServiceCategories(dc) {
  return executeQuery(listServiceCategoriesRef(dc));
};
