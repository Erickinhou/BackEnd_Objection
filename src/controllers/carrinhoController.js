const Knex = require('knex');
const knexConfig = require('../../knexfile');
const Carrinho = require('../models/carrinho')
const { Model } = require('objection');

const knex = Knex(knexConfig.development);
Model.knex(knex)



module.exports = {
  async index(req, res) {
      const carrinho = await Carrinho.query().findById(1)
      res.json(carrinho)
  }
}