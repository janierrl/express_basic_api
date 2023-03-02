const express = require('express');
const morgan = require('morgan');
const app = express();

// settings
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
// routes
app.use(require('./routes'));
app.use('/api/ueb', require('./routes/ueb'));
app.use('/api/trabajadores', require('./routes/trabajadores'));
app.use('/api/entidad', require('./routes/entidad'));
app.use('/api/unidad', require('./routes/unidad'));
app.use('/api/area', require('./routes/area'));
app.use('/api/observation', require('./routes/observations'));
app.use('/api/procesos', require('./routes/procesos'));
// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
