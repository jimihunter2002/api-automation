const request = require('supertest');
const config = require('./config');

const getApiToken = async () => {
  const credentials = {
    firmId: config.FIRM_ID,
    id: config.USER_ID,
    password: config.PASSWORD,
  };
  //i would expect the status code to 201
  const response = await request(config.BASE_URL)
    .post('/authenticate')
    .send(credentials)
    .set('Content-Type', 'application/json')
    .expect(200);

  return response.body.data.token;
};

const getListOfAssetWithPageSize = async (page, size, token) => {
  let path = `&page=${page}&pageSize=${size}`;
  const response = await request(config.BASE_URL)
    .get(`/asset/${config.FIRM_ID}?idOrName=${config.ID_OR_NAME}${path}`)
    .set({ 'api-token': `${token}`, 'Content-Type': 'application/json' })
    .expect(200);
  return response.body;
};

const createModel = async (modelReqData, token) => {
  const response = await request(config.BASE_URL)
    .post('/model')
    .send(modelReqData)
    .set({ 'api-token': `${token}`, 'Content-Type': 'application/json' })
    .expect(201);

  return response.body;
};

const createClient = async (clientReqData, token) => {
  const response = await request(config.BASE_URL)
    .post('/client')
    .send(clientReqData)
    .set({ 'api-token': `${token}`, 'Content-Type': 'application/json' })
    .expect(201);

  return response.body;
};

const createAccount = async (accountReqData, token) => {
  const response = await request(config.BASE_URL)
    .post('/account')
    .send(accountReqData)
    .set({ 'api-token': `${token}`, 'Content-Type': 'application/json' })
    .expect(201);

  return response.body;
};

const getAccount = async (accountId, token) => {
  const response = await request(config.BASE_URL)
    .get(`/account/${config.FIRM_ID}/${accountId}`)
    .set({ 'api-token': `${token}`, 'Content-Type': 'application/json' })
    .expect(200);

  return response.body;
};

module.exports = {
  getApiToken,
  getListOfAssetWithPageSize,
  createAccount,
  createClient,
  createModel,
  getAccount,
};
