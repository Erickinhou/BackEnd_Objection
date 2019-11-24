
exports.up = function(knex) {
  return knex.schema.alterTable('pedidos', table => {
    table.decimal('valorTotal', 10, 2).notNullable().alter();
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable('pedidos', function(table) {
    table.float('valorTotal').notNullable().alter();
  });
};
