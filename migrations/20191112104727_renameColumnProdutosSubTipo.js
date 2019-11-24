
exports.up = function(knex) {
  return knex.schema.table('produtos', table => {
    table.renameColumn('subtipo', 'tipo');
  });
};

exports.down = function(knex) {
  return knex.schema.table('produtos', function(table) {
    table.renameColumn('tipo', 'subtipo');
  });
};
