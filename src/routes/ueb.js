const { Router } = require("express");
const router = new Router();
const _ = require("underscore");

const ueb = require("../jsons/UEB.json");

router.get("/", (req, res) => {
  res.json(ueb);
});

module.exports = router;
