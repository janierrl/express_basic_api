const { Router } = require('express');
const router = new Router();
const _ = require('underscore');

const process = require('../jsons/procesos.json');

router.get('/', (req, res) => {
    res.json(process);
});

module.exports = router;