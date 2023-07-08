require('dotenv').config();

const FIRM_ID = process.env.firmId;
const USER_ID = process.env.userId;
const PASSWORD = process.env.password;
const ID_OR_NAME = process.env.idOrName;
const CLIENT_EMAIL = process.env.clientEmail;
const CLIENT_NI_NUMBER = process.env.clientNiNumber;
const FIRM_LEI = process.env.firmLei;
const CLIENT_MOBILE = process.env.clientMobile;

const BASE_URL =
  process.env.NODE_ENV === 'staging' ? process.env.baseUrlStaging : '';

module.exports = {
  FIRM_ID,
  USER_ID,
  PASSWORD,
  ID_OR_NAME,
  CLIENT_EMAIL,
  CLIENT_NI_NUMBER,
  BASE_URL,
  FIRM_LEI,
  CLIENT_MOBILE,
};
