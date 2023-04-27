const express = require("express");
const {
  getAllUsers,
  getUsersById,
  createUsersById,
  upUsersById,
  deleteUsersById,
} = require(`../servise/user.service.js`);
const router = express.Router();

router.get("/", (req, res) => {
  const data = getAllUsers();
  res.send(data);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const data = getUsersById(id);
  res.send(data);
});

router.post("/", (req, res) => {
  try {
    const { name, surname, email, pwd } = req.body;
    const data = createUsersById(name, surname, email, pwd);
    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
});

router.put("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { name, surname, email, pwd } = req.body;
    const data = upUsersById(id, name, surname, email, pwd);
    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
});

router.delete("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const data = deleteUsersById(id);
    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = { router };
