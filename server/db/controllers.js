const knex = require('./dbConnection.js');

getItems = async () => {
  const items = await knex('items').select('*');
  return items
}

module.exports = { getItems }