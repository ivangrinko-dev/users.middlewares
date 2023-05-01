const express = require("express");
const {
  getAllUsers,
  getUserById,
  createUser,
  upUserById,
  deleteUser,
} = require(`../service/user.service`);
const { isValidUserData, isVaidUserId } = require(`../helper/validation`);
const { buildResponse } = require(`../helper/buildResponse`);

const router = express.Router();

router.get("/", (req, res) => {
  try {
    const data = getAllUsers();
    buildResponse(res, data, 200);
  } catch (error) {
    buildResponse(res, error.message, 404);
  }
});

router.get("/:id", isVaidUserId, (req, res) => {
  try {
    const { id } = req.params;
    const data = getUserById(id);
    buildResponse(res, data, 200);
  } catch (error) {
    buildResponse(res, error.message, 404);
  }
});

router.post("/", isValidUserData, (req, res) => {
  try {
    const { name, surname, email, pwd } = req.body;
    const data = createUser(name, surname, email, pwd);
    buildResponse(res, data, 200);
  } catch (error) {
    buildResponse(res, error.message, 404);
  }
});

router.put("/:id", isValidUserData, isVaidUserId, (req, res) => {
  try {
    const { id } = req.params;
    const { name, surname, email, pwd } = req.body;
    const data = upUserById(id, name, surname, email, pwd);
    buildResponse(res, data, 200);
  } catch (error) {
    buildResponse(res, error.message, 404);
  }
});

router.delete(`/:id`, isVaidUserId, (req, res) => {
  try {
    const { id } = req.params;
    const data = deleteUser(id);
    buildResponse(res, data, 200);
  } catch (error) {
    buildResponse(res, error.message, 404);
  }
});

module.exports = router;
