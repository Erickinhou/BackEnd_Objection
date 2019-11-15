
exports.up = function(knex) {
  return knex.schema.createTable("clientes", table => {
    table.increments("id").primary();
    table.string("nome", 255).notNullable();
    table.string("email", 255).notNullable();
    table.string("senha", 255).notNullable();
    table.string("rua", 255).notNullable();
    table.integer("numero").notNullable().unsigned();
    table.string("complemento", 10);
    table.string("bairro", 255).notNullable();
    table.string("cidade", 255).notNullable();
    table.string("telefone", 20).notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("clientes");
};
