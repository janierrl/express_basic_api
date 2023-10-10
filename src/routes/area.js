const { Router } = require("express");
const router = new Router();
const _ = require("underscore");

const area = require("../jsons/Areas.json");

router.get("/", (req, res) => {
  res.json(area);
});

module.exports = router;
