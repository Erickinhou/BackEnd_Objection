const Knex = require('knex');
const knexConfig = require('../../knexfile');
const Administradores = require('../models/administradores')
const { Model } = require('objection');

const knex = Knex(knexConfig.development);
Model.knex(knex)


module.exports = {
  async index(req, res) {
      const adminstradores = await Administradores.query().findById(1)
      res.json(adminstradores)
  },
  async store(req, res) {
    try{
      const { login, senha, telefone} = req.params;
      const administradores = await Administradores.query()
      .insert({
          login,
          senha,
          telefone
      })
      return res.json(administradores)
  }
  catch{
      return res.json('não funcionou pohan')
  }
}
}
