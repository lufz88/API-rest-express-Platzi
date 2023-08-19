const express = require('express');

const routerUsers = express.Router();
routerUsers.get('/', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.status(200).json({
      limit,
      offset,
    });
  }
  res.status(200).json([
    {
      name: 'El pepe',
    },
    {
      name: 'El Coco',
    },
  ]);
});

routerUsers.get('/:uid', (req, res) => {
  const { uid } = req.params;
  res.status(200).json({
    id: uid,
    name: 'El pepe',
  });
});

module.exports = routerUsers;
