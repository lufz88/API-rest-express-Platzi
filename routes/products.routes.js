const express = require('express');

const validatorHandler = require('../middlewares/validator.handler');
const {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
} = require('../schemas/product.schema');
const ProductsService = require('../services/products.service');
const service = new ProductsService();

const routerProducts = express.Router();

routerProducts.get('/', async (req, res, next) => {
  try {
    const products = await service.find();
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
});

routerProducts.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

// Los endpoints específicos tienen que ir antes de los endpoints dinámicos

routerProducts.get(
  '/:pid',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { pid } = req.params;
      const product = await service.findOne(pid);
      res.status(200).json(product);
    } catch (err) {
      next(err);
    }
  },
);

routerProducts.post(
  '/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
  },
);

routerProducts.put(
  '/:pid',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(createProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const { pid } = req.params;
      const body = req.body;
      const product = await service.update(pid, body);
      res.status(200).json(product);
    } catch (err) {
      next(err);
    }
  },
);

routerProducts.patch(
  '/:pid',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const { pid } = req.params;
      const body = req.body;
      const product = await service.update(pid, body);
      res.status(200).json(product);
    } catch (err) {
      next(err);
    }
  },
);

routerProducts.delete(
  '/:pid',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { pid } = req.params;
      const rta = await service.delete(pid);
      res.status(200).json(rta);
    } catch (err) {
      next(err);
    }
  },
);

module.exports = routerProducts;
