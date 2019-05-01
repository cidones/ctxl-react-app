const express = require('express');
const baselineRouter = require('../api/baseline');

const app = express()

app.use('/baseline', baselineRouter);


app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

module.exports = app;
