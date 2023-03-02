const { Router } = require('express');
const router = new Router();
const _ = require('underscore');

const ueb = require('../observations.json');

router.get('/', (req, res) => {
    res.json(ueb);
});

module.exports = router;