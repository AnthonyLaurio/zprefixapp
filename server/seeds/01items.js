/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('items').del()
  await knex('items').insert([
    {userId: 1, name: 'item1', description: 'A bunch of text that needs to have 100 characters', quantity: 1},
    {userId: 1, name: 'item2', description: 'A bunch of text that needs to have 100 characters', quantity: 2},
    {userId: 1, name: 'item3', description: 'A bunch of text that needs to have 100 characters', quantity: 3}
  ]);
};
