const Knex = require('knex');
const knexConfig = require('../../knexfile');
const Adminstradores = require('../models/administradores')
const { Model } = require('objection');

const knex = Knex(knexConfig.development);
Model.knex(knex)



module.exports = {
  async index(req, res) {
      const adminstradores = await Adminstradores.query().findById(1)
      res.json(adminstradores)
  }
}