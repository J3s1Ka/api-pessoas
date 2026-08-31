const express = require('express');
const pessoaRoutes = require('./routes/pessoa.routes');
const logMiddleware = require('./middlewares/log.middleware');

const app = express();

app.use(express.json());
app.use(logMiddleware);

app.use('/pessoas', pessoaRoutes);

module.exports = app;