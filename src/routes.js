const express = require('express');

const routes = express.Router();

const Produtos = require('../src/controllers/adminstradoresController');

routes.get('/', Produtos.index);


module.exports = routes;