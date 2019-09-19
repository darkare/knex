// Update with your config settings.
var options = {
    development: {
        client: 'mysql123',
        version: '5.7',
        connection: {
            host: 'localhost',
            user: 'root',
            password: 'pas5word',
            database: 'knex_mysql'
        },
        migrations: {
            directory: __dirname + '/db/migrations',
          },
        seeds: {
            directory: __dirname + '/db/seeds',
          },
      },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: __dirname + '/db/migrations',
          },
        seeds: {
            directory: __dirname + '/db/seeds/production',
          },
      },
  };

var environment = process.env.NODE_ENV || 'development';
var config = options[environment];
module.exports = require('knex')(config);
