const config = {
  PORT_FRONTEND: 3001,
  BASE_API_URL: "http://localhost:3000/api",
  // ALLOWEDED_HOSTS: ["onehealth.localhost", "user.localhost"],
  BASE_DOMAIN: "localhost:9000",
  PRODUCTION_ENV: process.env.NODE_ENV === "production"
};

module.exports = config;
