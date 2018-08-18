const config = {
  PORT_FRONTEND: 3001,
  BASE_API_URL: "http://localhost:3000/api",
  BASE_DOMAIN: "localhost:9000",
  PRODUCTION_ENV: process.env.NODE_ENV === "production",
  // SUB_DOMAIN: "react-template",
  SUB_DOMAIN: ""
};

module.exports = config;
