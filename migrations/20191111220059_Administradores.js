
exports.up = function(knex) {
  return knex.schema.createTable("administradores", table => {
    table.increments("id").primary();
    table.string("login", 20).notNullable();
    table.string("senha", 255).notNullable();
    table.string("telefone", 20).notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("administradores");
};
