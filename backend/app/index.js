const express = require('express');
const baselineRouter = require('./api/baseline');
const bodyParser = require('body-parser');

const app = express()

app.use('/baseline', baselineRouter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true,
}))


app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

module.exports = app;
