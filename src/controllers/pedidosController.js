const Knex = require('knex');
const knexConfig = require('../../knexfile');
const Pedidos = require('../models/pedidos')
const { Model } = require('objection');

const knex = Knex(knexConfig.development);
Model.knex(knex)



module.exports = {
  async index(req, res) {
      const pedidos = await Pedidos.query().findById(1)
      res.json(pedidos)
  }
}
