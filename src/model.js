const knex = require('./knexfile');

const insertUser = (data) =>  {
    return knex.insert(data).into('users').then((id) => {
      const [retId] = id;
         return retId;
    } );
  }

  module.exports = {
      insertUser
  }