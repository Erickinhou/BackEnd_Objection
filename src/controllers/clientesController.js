const Knex = require('knex');
const knexConfig = require('../../knexfile');
const Clientes = require('../models/clientes')
const { Model } = require('objection');

const knex = Knex(knexConfig.development);
Model.knex(knex)



module.exports = {
  async index(req, res) {
      const clientes = await Clientes.query().findById(1)
      res.json(clientes)
  }
}