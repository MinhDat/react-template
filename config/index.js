const config = {
  PORT_FRONTEND: 3001,
  BASE_API_URL: "https://reactjs-template-be.herokuapp.com/api",
  // ALLOWEDED_HOSTS: ["onehealth.localhost", "user.localhost"],
  BASE_DOMAIN: "localhost",
  PRODUCTION_ENV: process.env.NODE_ENV === "production"
};

module.exports = config;
