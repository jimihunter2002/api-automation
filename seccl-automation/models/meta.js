const validMetaSchema = {
  type: 'object',
  required: ['count', 'page', 'pageSize'],
  additionalProperties: true,
  properties: {
    count: { type: 'number' },
    page: { type: 'number' },
    pageSize: { type: 'number' },
  },
};

const invalidMetaSchema = {
  type: 'object',
  required: ['page', 'pageSize'],
  additionalProperties: false,
  properties: {
    page: { type: 'number' },
    pageSize: { type: 'number' },
  },
};

module.exports = {
  invalidMetaSchema,
  validMetaSchema,
};
