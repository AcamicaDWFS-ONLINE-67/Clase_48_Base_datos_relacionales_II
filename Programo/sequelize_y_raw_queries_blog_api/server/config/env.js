require("dotenv").config();

const env = {
  PORT: process.env.PORT || 3000,
  USER: 'root',
  PASSWORD: 'root',
  CONNECTOR: 'mariadb',
  DB: 'blog_post',
  HOST: 'localhost'
};

module.exports = env;