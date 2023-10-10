const { Router } = require("express");
const router = new Router();
const _ = require("underscore");

const worker = require("../jsons/Trabajadores.json");

router.get("/", (req, res) => {
  res.json(worker);
});

module.exports = router;
