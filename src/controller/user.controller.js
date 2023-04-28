const express = require("express");
const {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
} = require(`../service/user.service`);

const router = express.Router();

router.get("/", (req, res) => {
  const data = getAllUsers();
  res.send(data);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const data = getUserById(id);
  res.send(data);
});

router.post("/", (req, res) => {
  const { name, surname, email, pwd } = req.body;
  const data = createUser(name, surname, email, pwd);
  res.send(data);
});

router.delete(`/:id`, (req, res) => {
  const { id } = req.params;
  const data = deleteUser(id);
  res.send(data);
});

module.exports = router;
