const { Model } = require('objection');

class carrinho extends Model {
  static get tableName() {
    return 'carrinho';
  }
}

module.exports = carrinho;