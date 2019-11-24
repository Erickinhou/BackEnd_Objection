const Knex = require('knex');
const knexConfig = require('../../knexfile');
const Clientes = require('../models/clientes')
const { Model } = require('objection');

const knex = Knex(knexConfig.development);
Model.knex(knex)



module.exports = {
  async index(req, res) {
      try{
        const clientes = await  Clientes.query()
        .insert({
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha,
            rua: req.body.rua,
            numero: req.body.numero,
            complemento: req.body.complemento,
            bairro: req.body.bairro,
            cidade: req.body.cidade,
            telefone: req.body.telefone
        })
        return res.json(clientes)
    }
    catch{
        return res.json('Erro ao cadarastrar usuário')
    }
  }
}