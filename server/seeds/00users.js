/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {firstName: 'Galvanize', lastName: 'Instructor', username: 'admin', password: 'password'},
    {firstName: 'Galvanize', lastName: 'Instructor2', username: 'admin2', password: 'password'},
    {firstName: 'Galvanize', lastName: 'Instructor3', username: 'admin3', password: 'password'}
  ]);
};
