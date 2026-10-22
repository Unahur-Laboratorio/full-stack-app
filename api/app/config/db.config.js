module.exports = {
  HOST: process.env.DB_HOST || "mysql",
  USER: process.env.DB_USER || "appuser",
  PASSWORD: process.env.DB_PASSWORD,
  DB: process.env.DB_NAME || "appdb"
};