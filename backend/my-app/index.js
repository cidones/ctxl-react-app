const express = require('express');
const baselineRouter = require('../api/baseline');

const app = express()

app.use('/baseline', baselineRouter);

module.exports = app;
