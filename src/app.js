const exspress = require("express");
const bodyParser = require(`body-parser`)
const { router } = require(`./controller/user.controller.js`);

const app = exspress();

app.use(bodyParser.json());

app.use(`/user`, router);

module.exports = { app };
