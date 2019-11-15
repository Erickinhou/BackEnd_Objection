const { Model } = require('objection');

class produtos extends Model {
  static get tableName() {
    return 'produtos';
  }
}

module.exports = produtos;