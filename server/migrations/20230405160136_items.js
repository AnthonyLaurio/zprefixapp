/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('items', table => {
    table.increments('id').primary();
    table.integer('userId').notNullable();
    table.foreign('userId').references('id').inTable('users')
      .onDelete('CASCADE');
    table.string('name').notNullable();
    table.string('description').notNullable();
    table.integer('quantity').notNullable();
});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('items');
};
