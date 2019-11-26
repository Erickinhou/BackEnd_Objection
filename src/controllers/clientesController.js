const Knex = require('knex');
const knexConfig = require('../../knexfile');
const Clientes = require('../models/clientes')
const { Model } = require('objection');
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const dotenv = require('dotenv')
dotenv.config();

const knex = Knex(knexConfig.development);
Model.knex(knex)



module.exports = {
  async index(req, res) {
      const clientes = await Clientes.query().findById(req.params.id)
      res.json(clientes)
  },
  async store(req, res){
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
  },
  async login(req, res){
    try{
    const Salt = await  Clientes.query().where('email', `${req.body.email}`)
    const senha = crypto.pbkdf2Sync(req.body.senha, Salt[0].salt, 10000, 512, 'sha512').toString('hex');
    const clientes = await  Clientes.query().where('email', `${req.body.email}`).where('senha', `${senha}`)
    const token = jwt.sign(clientes[0].id, process.env.TOKEN_SECERT)
    return  res.send({ auth: true, token: token })
    }
    catch{
      return res.send({ auth: true, msg: 'Login Inválido' })
    }
  }
}