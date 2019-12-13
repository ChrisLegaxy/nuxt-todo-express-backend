/* Configuration File */
const env = process.env.NODE_ENV || "dev";

/* Development */
const dev = {
  api: {
    ENDPOINT: "/api/v1"
  },
  app: {
    PORT: process.env.PORT || 5000
  },
  db: {
    USER: process.env.DB_USER || "admin",
    PASSWORD: process.env.DB_PASSWORD || "qwerty@999",
    SERVER: process.env.DB_HOST || "",
    DATABASE: process.env.DB_NAME || ""
  },
  token: {
    SECRET_KEY: ""
  }
};

/* Testing */
const test = {
  app: {
    ENV: process.env.NODE_ENV || "",
    PORT: process.env.PORT || 5001
  },
  db: {
    SERVER: process.env.DB_HOST || "",
    DATABASE: process.env.DB_NAME || ""
  },
  token: {
    SECRET_KEY: ""
  }
};

const config = {
  dev,
  test
};

module.exports = config[env];