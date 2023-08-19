const express = require('express');
const { faker } = require('@faker-js/faker');

const routerProducts = express.Router();
routerProducts.get('/', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10; // si no viene size, asigna 10
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url(),
    });
  }
  res.status(200).json(products);
});

routerProducts.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

// Los endpoints específicos tienen que ir antes de los endpoints dinámicos

routerProducts.get('/:pid', (req, res) => {
  const { pid } = req.params;
  res.json({
    id: pid,
    name: 'Product',
    proce: '1520',
  });
});

module.exports = routerProducts;
