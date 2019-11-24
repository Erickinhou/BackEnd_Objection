const Knex = require('knex');
const knexConfig = require('../../knexfile');
const Pedidos = require('../models/pedidos')
const { Model } = require('objection');

const knex = Knex(knexConfig.development);
Model.knex(knex)



module.exports = {
  async index(req, res) {
    try {
      const pedidos = await Pedidos.query().findById(req.params.id);
      res.json(pedidos);
    }
    catch (error) {
      console.log(error);
      return res.json({ erro: 'Não foi possível exibir os pedidos no momento' });
    }
  },
  async store(req, res) {
    try{
      const {valorTotal, produtos, cliente} = req.body;
      const pedidos = await Pedidos.query()
      .insert({
          valorTotal,
          produtos,
          cliente
      })
      return res.json(pedidos)
    }
    catch{
        return res.json('não foi possível a inserção de um novo administrador')
    }
  }
}