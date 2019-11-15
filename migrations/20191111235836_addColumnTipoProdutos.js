
exports.up = function(knex) {
  return knex.schema.table('produtos', table => {
    table.string('tipo').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.table('produtos', function(table) {
    table.dropColumn('tipo');
  });
};
