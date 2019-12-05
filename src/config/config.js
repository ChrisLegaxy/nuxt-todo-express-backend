/* Configuration File */

const env = process.env.NODE_ENV || "dev";

const dev = {
  app: {
    PORT: process.env.PORT || 5000
  },
  db: {
    SERVER: process.env.DB_HOST || "",
    DATABASE: process.env.DB_NAME || ""
  },
  token: {
    SECRET_KEY: ""
  }
};

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