const express = require('express');

const CategoriesService = require('../services/categories.service');
const service = new CategoriesService();

const routerCategories = express.Router();

routerCategories.get('/', async (req, res) => {
  const categories = await service.find();

  res.status(200).json(categories);
});

routerCategories.get('/:cid', async (req, res) => {
  const { cid } = req.params;
  const category = await service.findOne(cid);
  if (category) {
    res.status(200).json(category);
  } else {
    res.status(404).json({
      message: 'not found',
    });
  }
});

routerCategories.post('/', async (req, res) => {
  const body = req.body;
  const newCategory = await service.create(body);
  res.status(201).json(newCategory);
});

routerCategories.put('/:cid', async (req, res) => {
  const { cid } = req.params;
  const body = req.body;
  const category = await service.update(cid, body);
  res.status(200).json(category);
});

routerCategories.patch('/:cid', async (req, res) => {
  const { cid } = req.params;
  const body = req.body;
  const category = await service.update(cid, body);
  res.status(200).json(category);
});

routerCategories.delete('/:cid', async (req, res) => {
  const { cid } = req.params;
  const rta = await service.delete(cid);
  res.status(200).json(rta);
});

module.exports = routerCategories;
