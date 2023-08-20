const express = require('express');
const routerProducts = require('./products.routes');
const routerCategories = require('./categories.routes');
const routerUsers = require('./users.routes');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', routerProducts);
  router.use('/categories', routerCategories);
  router.use('/users', routerUsers);
}

module.exports = routerApi;
