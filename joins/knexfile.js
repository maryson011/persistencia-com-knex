// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

require("dotenv").config();
module.exports = {
    client: "mysql2",
    connection: {
      user: process.env.DBUSER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
    },
};
