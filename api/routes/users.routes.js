const express = require('express');

const UsersService = require('../services/users.service');
const service = new UsersService();

const routerUsers = express.Router();

routerUsers.get('/', async (req, res) => {
  const users = await service.find();

  res.status(200).json(users);
});

routerUsers.get('/:uid', async (req, res) => {
  const { uid } = req.params;
  const user = await service.findOne(uid);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({
      message: 'not found',
    });
  }
});

routerUsers.put('/:uid', async (req, res) => {
  const { uid } = req.params;
  const body = req.body;
  const user = await service.update(uid, body);
  res.status(200).json(user);
});

routerUsers.patch('/:uid', async (req, res) => {
  const { uid } = req.params;
  const body = req.body;
  const user = await service.update(uid, body);
  res.status(200).json(user);
});

routerUsers.delete('/:uid', async (req, res) => {
  const { uid } = req.params;
  const rta = await service.delete(uid);
  res.status(200).json(rta);
});

module.exports = routerUsers;
