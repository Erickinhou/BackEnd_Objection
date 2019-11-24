const Knex = require('knex');
const knexConfig = require('../../knexfile');
const Adminstradores = require('../models/administradores.js')
const { Model } = require('objection');

const knex = Knex(knexConfig.development);
Model.knex(knex)



module.exports = {
  async index(req, res) {
      try{
        const adminstradores = await Adminstradores.query()
        .insert({
            login: req.body.login,
            senha: req.body.senha,
            telefone: req.body.telefone
        })
        return res.json(adminstradores)
    }
    catch{
        return res.json('Erro ao Cadastrar administrador')
    }
  }
}