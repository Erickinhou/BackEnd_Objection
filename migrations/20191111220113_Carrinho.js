
exports.up = function(knex) {
  return knex.schema.createTable("carrinho", table => {
    table.increments("id").primary();
    table.float("valorTotal").notNullable();
    table.integer("produtos");
    table.integer("cliente").notNullable();
    table.timestamps(true, true);

    table.foreign('produtos').references('id').inTable('produtos');
    table.foreign('cliente').references('id').inTable('clientes');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("carrinho");
};
