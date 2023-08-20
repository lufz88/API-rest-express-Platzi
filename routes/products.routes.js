const express = require('express');

const ProductsService = require('../services/product.service');

const service = new ProductsService();

const routerProducts = express.Router();
routerProducts.get('/', (req, res) => {
  const products = service.find();
  res.status(200).json(products);
});

routerProducts.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

// Los endpoints específicos tienen que ir antes de los endpoints dinámicos

routerProducts.get('/:pid', (req, res) => {
  const { pid } = req.params;
  const product = service.findOne(pid);
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({
      message: 'not found',
    });
  }
});

routerProducts.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body,
  });
});

routerProducts.put('/:pid', (req, res) => {
  const { pid } = req.params;
  const body = req.body;
  res.status(200).json({
    message: 'update',
    data: body,
    id: pid,
  });
});

routerProducts.patch('/:pid', (req, res) => {
  const { pid } = req.params;
  const body = req.body;
  res.status(200).json({
    message: 'update',
    data: body,
    id: pid,
  });
});

routerProducts.delete('/:pid', (req, res) => {
  const { pid } = req.params;
  res.status(200).json({
    message: 'delete',
    id: pid,
  });
});

module.exports = routerProducts;
