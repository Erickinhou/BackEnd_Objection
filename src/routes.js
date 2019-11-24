const express = require('express');

const routes = express.Router();

const ValorTotal = require('../src/controllers/ValorTotal');

// que já existiam
const Administradores = require('./controllers/administradoresController');
const Carrinho = require('./controllers/carrinhoController.js');
const Clientes = require('./controllers/clientesController.js');
const Pedidos = require('./controllers/pedidosController.js');
const Produtos = require('./controllers/produtosController.js');
 // Funcionalidades
routes.post('/_p_/carrinho/total', ValorTotal.index);
// adicionar ao  bd 
routes.post('/_p_/add/SignUp', Clientes.store);
routes.post('/_p_/add/administradores', Administradores.store);
routes.post('/_p_/add/pedidos', Pedidos.index);
//pesquisas
routes.get('/pedidos/:id', Pedidos.index);

routes.get('/produtos/:categoria', Produtos.indexPorCategoria);
routes.post('/_p_/produtos', Produtos.indexPorID);



module.exports = routes;