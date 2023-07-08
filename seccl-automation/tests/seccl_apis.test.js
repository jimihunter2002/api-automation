const supertest = require('supertest');
const config = require('../utils/config');
const helper = require('../utils/testHelpers');
const { validMetaSchema, invalidMetaSchema } = require('../models/meta');
const { matchers } = require('jest-json-schema');
expect.extend(matchers);

let token = null;

beforeAll(async () => {
  token = await helper.getApiToken();
});

describe('when page is specified', () => {
  test('specified size should be returned', async () => {
    let pageSize = 2;
    let page = 1;
    const response = await helper.getListOfAssetWithPageSize(
      page,
      pageSize,
      token,
    );
    const { data } = response;
    expect(data).toHaveLength(pageSize);
    expect(response.meta.page).toEqual(page);
    expect(response.meta.pageSize).toEqual(pageSize);
  });

  test('meta object schema in the response should be validated', async () => {
    let pageSize = 2;
    let page = 1;
    const response = await helper.getListOfAssetWithPageSize(
      page,
      pageSize,
      token,
    );

    const { meta } = response;
    expect(meta).toMatchSchema(validMetaSchema);
    expect(meta).not.toMatchObject(invalidMetaSchema);
  });
});
