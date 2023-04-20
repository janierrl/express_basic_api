const express = require('express');

const app = express();

app.use('/api/ueb', require('./routes/ueb'));
app.use('/api/trabajadores', require('./routes/trabajadores'));
app.use('/api/entidad', require('./routes/entidad'));
app.use('/api/unidad', require('./routes/unidad'));
app.use('/api/area', require('./routes/area'));
app.use('/api/observation', require('./routes/observations'));
app.use('/api/procesos', require('./routes/procesos'));

module.exports = app;