// Update with your config settings.
var options = {
    development: {
        client: 'mysql',
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
        client: 'mysql',
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
            directory: __dirname + '/db/seeds/production',
          },
      },
  };

var environment = process.env.NODE_ENV || 'development';
var config = options[environment];
console.log(config);
module.exports = require('knex')(options.development);
