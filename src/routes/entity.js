const { Router } = require('express');
const router = new Router();
const _ = require('underscore');

const entity = require('../jsons/Entidad.json');

router.get('/', (req, res) => {
    res.json(entity);
});

module.exports = router;