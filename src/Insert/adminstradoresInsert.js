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
            login: 'LisaAnn@gmail.com',
            senha: '12345678',
            telefone: '(38) 999036079'
        })
        return res.json(adminstradores)
    }
    catch{
        return res.json('não funcionou pohan')
    }
  }
}