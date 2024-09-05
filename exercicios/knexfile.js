// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
require("dotenv").config()
module.exports = {

    client: 'mysql2',
    connection: {
      database: process.env.DATABASE,
      user:     process.env.DBUSER,
      password: process.env.PASSWORD,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: "./seeds"
    }

};
