
exports.up = function(knex) {
  return knex.schema.alterTable('produtos', table => {
    table.decimal('preco', 10, 2).notNullable().alter();
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable('produtos', function(table) {
    table.float('preco').notNullable().alter();
  });
};
