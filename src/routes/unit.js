const { Router } = require('express');
const router = new Router();
const _ = require('underscore');

const unit = require('../jsons/unidad.json');

router.get('/', (req, res) => {
    res.json(unit);
});

module.exports = router;