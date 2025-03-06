require('dotenv').config();

module.exports = {
  development: {
    client: process.env.DB_CLIENT || 'mssql', // or 'pg', 'mysql', etc.
    connection: {
      server: process.env.DB_SERVER || 'localhost',
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      port: process.env.DB_PORT || 1433
    },
    migrations: {
      directory: './src/infrastructure/db/migrations'
    },
    seeds: {
      directory: './src/infrastructure/db/seeds'
    }
  }
};
