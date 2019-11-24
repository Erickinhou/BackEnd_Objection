const Knex = require('knex')
const knexConfig = require('../../knexfile')
const Produtos = require('../models/produtos')
const Carrinho = require('../models/carrinho')
const { Model } = require('objection')

//const MVector = require('../operations/MultiplicationVector') // função que multiplica vetores e retorna um vetor

const knex = Knex(knexConfig.development);
Model.knex(knex)



module.exports = {
  async index(req, res ) {
    try{
      const arrayProdutos = JSON.parse(req.body.produtosCarrinho)
      let total = 0
      for (let num in arrayProdutos){
        const produtos = await Produtos.query().findById(arrayProdutos[num].id)
        total += (produtos.preco* arrayProdutos[num].qtd)
      } 
      res.json(total)
    }
   catch{
      return res.json('Produto não encontrado')
    } 
  }
}
