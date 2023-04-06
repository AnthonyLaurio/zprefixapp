const knex = require('./dbConnection.js');

getItems = async () => {
  const items = await knex('items').select('*');
  return items
}

getPersonalItems = async (id) => {
  const items = await knex('items').select('*').where('userId', id);
  return items;
}

getUser = async (username) => {
  const user = await knex('users').select('*').where('username', username);
  return user;
}

addUser = async(user) => {
  const newUser = await knex('users').insert(user);
  return newUser;
}

addItem = async(item) => {
  const newItem = await knex('items').insert(item);
  return newItem;
}

deleteItem = async(id) => {
  const item = await knex('items').where('id', id).del();
  return item;
}

module.exports = { getItems, getUser, addUser, getPersonalItems, addItem, deleteItem }