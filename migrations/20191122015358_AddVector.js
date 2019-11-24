
exports.up = function(knex) {
    return knex.schema.table('carrinho', table => {
        table.specificType('produtosT', 'integer ARRAY');
    });
};

exports.down = function(knex) {
    return knex.schema.table('carrinho', function(t) {
        t.dropColumn('produtosT');
    });
  
};
