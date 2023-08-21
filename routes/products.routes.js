const express = require('express');

const ProductsService = require('../services/products.service');
const service = new ProductsService();

const routerProducts = express.Router();

routerProducts.get('/', async (req, res) => {
  const products = await service.find();
  res.status(200).json(products);
});

routerProducts.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

// Los endpoints específicos tienen que ir antes de los endpoints dinámicos

routerProducts.get('/:pid', async (req, res) => {
  const { pid } = req.params;
  const product = await service.findOne(pid);
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({
      message: 'not found',
    });
  }
});

routerProducts.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
});

routerProducts.put('/:pid', async (req, res) => {
  const { pid } = req.params;
  const body = req.body;
  const product = await service.update(pid, body);
  res.status(200).json(product);
});

routerProducts.patch('/:pid', async (req, res) => {
  const { pid } = req.params;
  const body = req.body;
  const product = await service.update(pid, body);
  res.status(200).json(product);
});

routerProducts.delete('/:pid', async (req, res) => {
  const { pid } = req.params;
  const rta = await service.delete(pid);
  res.status(200).json(rta);
});

module.exports = routerProducts;
