const { Model } = require('objection');

class clientes extends Model {
  static get tableName() {
    return 'clientes';
  }
}

module.exports = clientes;