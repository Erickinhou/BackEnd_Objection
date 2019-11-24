
exports.up = function(knex) {
  return knex.schema.alterTable('carrinho', table => {
    table.decimal('valorTotal', 10, 2).notNullable().alter();
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable('carrinho', function(table) {
    table.float('valorTotal').notNullable().alter();
  });
};
