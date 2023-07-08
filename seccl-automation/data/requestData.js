const config = require('../utils/config');

const modelRequestData = {
  firmId: '',
  name: "Yusuf's Model",
  vatable: true,
  suspendRebalances: false,
  aim: 'Api testing',
  riskRating: 1,
  commentary: 'my model creation',
  investmentDecision: {
    firmLei: '',
    firmCountry: 'GB',
    personId: 'AB121212B',
    personIdType: 'NINO',
    personCountry: 'GB',
  },
  modelCharge: 0.97,
  cashAllocation: 0.445,
  productType: ['PENSION'],
  availableToNodeId: ['0'],
  allocations: [
    {
      assetId: '2851G',
      percentage: 0.1,
      status: 'Active',
      assetName: 'NATIONAL GRID PLC',
      currency: 'GBP',
    },
  ],
};

// client request data
const clientRequestData = {
  firmId: '',
  nodeId: ['0'],
  clientType: 'Individual',
  title: 'Mr',
  firstName: 'Yusuff',
  surname: 'Ogunjimii',
  gender: 'Male',
  currency: 'GBP',
  addressDetail: {
    flatNumber: '101',
    address1: 'Fake Lane',
    address2: 'London',
    country: 'GB',
    postCode: 'N19 6DB',
  },
  language: 'en',
  email: '',
  mobile: {
    number: '',
    locale: 'en-GB',
    isMobile: true,
  },
  nationality: 'GB',
  nationalInsuranceNo: '',
  dateOfBirth: '1981-11-02',
  taxDomicile: 'GB',
  amlStatus: 'Approved',
  termsAccepted: true,
};

const accountRequestData = {
  firmId: '',
  nodeId: '0',
  accountType: 'Wrapper',
  name: 'New trading account',
  status: 'Active',
  adviserCharge: 0.0125,
  discretionaryManagementCharge: 0.004,
  currency: 'GBP',
  clientId: '',
  wrapperDetail: {
    wrapperType: 'GIA',
    discretionary: true,
    advised: true,
    assetAllocationId: '',
  },
};

module.exports = {
  modelRequestData,
  clientRequestData,
  accountRequestData,
};
