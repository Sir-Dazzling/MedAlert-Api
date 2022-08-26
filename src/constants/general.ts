const PORT = process.env.PORT;
const PRODUCTION = process.env.NODE_ENV === "production";
const STAGING = process.env.NODE_ENV === "staging";
const DEVELOPMENT = process.env.NODE_ENV === "development";
const DATABASE_URL = process.env.DATABASE_URL;

export default {
  DATABASE_URL,
  DEVELOPMENT,
  PORT,
  PRODUCTION,
  STAGING,
};
