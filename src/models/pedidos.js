const { Model } = require('objection');

class pedidos extends Model {
  static get tableName() {
    return 'pedidos';
  }
}

module.exports = pedidos;