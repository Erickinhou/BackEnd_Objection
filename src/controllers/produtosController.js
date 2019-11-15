const Knex = require('knex');
const knexConfig = require('../../knexfile');
const Produtos = require('../models/produtos')
const { Model } = require('objection');

const knex = Knex(knexConfig.development);
Model.knex(knex)



module.exports = {
  async index(req, res) {
      const produtos = await Produtos.query().findById(1)
      res.json(produtos)
  }
}
