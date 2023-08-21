const express = require('express');

const CategoriesService = require('../services/categories.service');
const service = new CategoriesService();

const routerCategories = express.Router();

routerCategories.get('/', (req, res) => {
  const categories = service.find();

  res.status(200).json(categories);
});

routerCategories.get('/:cid', (req, res) => {
  const { cid } = req.params;
  const category = service.findOne(cid);
  if (category) {
    res.status(200).json(category);
  } else {
    res.status(404).json({
      message: 'not found',
    });
  }
});

routerCategories.post('/', (req, res) => {
  const body = req.body;
  const newCategory = service.create(body);
  res.status(201).json(newCategory);
});

routerCategories.put('/:cid', (req, res) => {
  const { cid } = req.params;
  const body = req.body;
  const category = service.update(cid, body);
  res.status(200).json(category);
});

routerCategories.patch('/:cid', (req, res) => {
  const { cid } = req.params;
  const body = req.body;
  const category = service.update(cid, body);
  res.status(200).json(category);
});

routerCategories.delete('/:cid', (req, res) => {
  const { cid } = req.params;
  const rta = service.delete(cid);
  res.status(200).json(rta);
});

module.exports = routerCategories;
