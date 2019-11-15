const { Model } = require('objection');

class administradores extends Model {
  static get tableName() {
    return 'administradores';
  }
}

module.exports = administradores;