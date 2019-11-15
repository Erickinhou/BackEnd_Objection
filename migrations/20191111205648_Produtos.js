
exports.up = function (knex) {
  return knex.schema.createTable("produtos", table => {
    table.increments("id").primary();
    table.string("nome", 255).notNullable();
    table.float("preco").notNullable().unsigned();
    table.string("descricao", 255);
    table.string("link_imagem", 1000);
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("produtos");
};
