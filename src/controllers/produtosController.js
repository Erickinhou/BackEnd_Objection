const Knex = require('knex');
const knexConfig = require('../../knexfile');

const Produtos = require('../models/produtos')
const { Model } = require('objection');

const knex = Knex(knexConfig.development);
Model.knex(knex)


module.exports = {
  async indexPorCategoria(req, res) {
    const { categoria } = req.params;
    try {
      const produtos = await Produtos.query().where('categoria', categoria);
      return res.json(produtos)
    }
    catch (error) {
      console.log(error);
      return res.json({ erro: 'Não foi possível retornar os produtos' });
    }
  },
  async indexPorID(req, res) {
    const { id } = req.body;
    try {
      console.log(id)
      const produtos = await Produtos.query().findByIds(id);
      return res.json(produtos)
    }
    catch (error) {
      console.log(error);
      return res.json({ erro: 'Não foi possível retornar os produtos' });
    }
  }
}
