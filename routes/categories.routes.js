const express = require('express');

const routerCategories = express.Router();

routerCategories.get('/', (req, res) => {
  res.json([
    {
      categoryName: 'Pantalones',
    },
    {
      categoryName: 'Remeras',
    },
  ]);
});

routerCategories.get('/:cid', (req, res) => {
  const { cid } = req.params;
  res.json({
    categoryId: cid,
    categoryName: 'Pantalones',
  });
});

module.exports = routerCategories;
