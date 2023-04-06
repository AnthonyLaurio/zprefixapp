/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {firstName: 'Anthony', lastName: 'L', username: 'admin1', password: 'password'},
    {firstName: 'Anthony2', lastName: 'M', username: 'admin2', password: 'password'},
    {firstName: 'Anthony3', lastName: 'R', username: 'admin3', password: 'password'}
  ]);
};
