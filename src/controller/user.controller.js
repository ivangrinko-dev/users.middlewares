const express = require('express');
const { User } = require(`../service/user.service`);
const { isValidUserData, isVaidUserId } = require(`../helper/validation`);
const { buildResponse } = require(`../helper/buildResponse`);

const router = express.Router();

router.get('/', (req, res) => {
  try {
    const data = user.getAllUsers();
    const user = new User();
    buildResponse(res, data, 200);
  } catch (error) {
    buildResponse(res, error.message, 404);
  }
});

router.get('/:id', isVaidUserId, (req, res) => {
  try {
    const { id } = req.params;
    const user = new User();
    const data = user.getUserById(id);
    buildResponse(res, data, 200);
  } catch (error) {
    buildResponse(res, error.message, 404);
  }
});

router.post('/', isValidUserData, (req, res) => {
  try {
    const { name, surname, email, pwd } = req.body;
    const user = new User();
    const data = user.createUser(name, surname, email, pwd);
    buildResponse(res, data, 200);
  } catch (error) {
    buildResponse(res, error.message, 404);
  }
});

router.put('/:id', isValidUserData, isVaidUserId, (req, res) => {
  try {
    const { id } = req.params;
    const user = new User();
    const { name, surname, email, pwd } = req.body;
    const data = user.upUserById(id, name, surname, email, pwd);
    buildResponse(res, data, 200);
  } catch (error) {
    buildResponse(res, error.message, 404);
  }
});

router.delete(`/:id`, (req, res) => {
  try {
    const { id } = req.params;
    const user = new User();
    const data = user.deleteUser(id);
    res.send(data);
  } catch (error) {
    buildResponse(res, error.message, 404);
  }
});

module.exports = router;
