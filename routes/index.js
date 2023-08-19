const routerProducts = require('./products.routes');
const routerCategories = require('./categories.routes');
const routerUsers = require('./users.routes');

function routerApi(app) {
  app.use('/products', routerProducts);
  app.use('/categories', routerCategories);
  app.use('/users', routerUsers);
}

module.exports = routerApi;
