const express = require('express');

const UsersService = require('../services/users.service');
const service = new UsersService();

const routerUsers = express.Router();

routerUsers.get('/', (req, res) => {
  const users = service.find();

  res.status(200).json(users);
});

routerUsers.get('/:uid', (req, res) => {
  const { uid } = req.params;
  const user = service.findOne(uid);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({
      message: 'not found',
    });
  }
});

routerUsers.put('/:uid', (req, res) => {
  const { uid } = req.params;
  const body = req.body;
  const user = service.update(uid, body);
  res.status(200).json(user);
});

routerUsers.patch('/:uid', (req, res) => {
  const { uid } = req.params;
  const body = req.body;
  const user = service.update(uid, body);
  res.status(200).json(user);
});

routerUsers.delete('/:uid', (req, res) => {
  const { uid } = req.params;
  const rta = service.delete(uid);
  res.status(200).json(rta);
});

module.exports = routerUsers;
