const supertest = require('supertest');
const config = require('../utils/config');
const helper = require('../utils/testHelpers');
const {
  modelRequestData,
  clientRequestData,
  accountRequestData,
} = require('../data/requestData');

const { matchers } = require('jest-json-schema');
expect.extend(matchers);

let token = null;

beforeAll(async () => {
  token = await helper.getApiToken();
});

describe('create an account under a firm', () => {
  test('account should be created successfully', async () => {
    //create a model
    modelRequestData.firmId = config.FIRM_ID;
    modelRequestData.investmentDecision.firmLei = config.FIRM_LEI;

    const modelResponse = await helper.createModel(modelRequestData, token);
    const modelId = modelResponse.data.id;

    //create client
    clientRequestData.firmId = config.FIRM_ID;
    clientRequestData.email = config.CLIENT_EMAIL;
    clientRequestData.mobile.number = config.CLIENT_MOBILE;
    clientRequestData.nationalInsuranceNo = config.CLIENT_NI_NUMBER;

    const clientResponse = await helper.createClient(clientRequestData, token);
    const clientId = clientResponse.data.id;

    //create account
    accountRequestData.firmId = config.FIRM_ID;
    accountRequestData.clientId = clientId;
    accountRequestData.wrapperDetail.assetAllocationId = modelId;

    const accountResponse = await helper.createAccount(
      accountRequestData,
      token,
    );

    //create ValidationSchema
    const schema = {
      type: 'object',
      properties: {
        id: { type: 'string' },
      },
      required: ['id'],
    };

    expect(accountResponse.data).toMatchSchema(schema);
    const accountId = accountResponse.data.id;

    //get the newly created client account
    const accountCreated = await helper.getAccount(accountId, token);

    const { data } = accountCreated;
    expect(data.id).toBe(accountId);
    expect(data.clientId).toBe(clientId);
    expect(data.wrapperDetail.assetAllocationId).toBe(modelId);
  });
});
