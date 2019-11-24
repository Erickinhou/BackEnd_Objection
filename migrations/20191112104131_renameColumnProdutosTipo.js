
exports.up = function(knex) {
  return knex.schema.table('produtos', table => {
    table.renameColumn('tipo', 'categoria');
  });
};

exports.down = function(knex) {
  return knex.schema.table('produtos', function(table) {
    table.renameColumn('categoria', 'tipo');
  });
};
