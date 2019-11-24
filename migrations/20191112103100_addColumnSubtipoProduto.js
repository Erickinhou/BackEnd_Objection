
exports.up = function(knex) {
  return knex.schema.table('produtos', table => {
    table.string('subtipo');
  });
};

exports.down = function(knex) {
  return knex.schema.table('produtos', function(table) {
    table.dropColumn('subtipo');
  });
};
