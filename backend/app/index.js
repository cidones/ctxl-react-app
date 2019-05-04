const express = require('express');
const cors = require('cors');
const baselineRouter = require('./api/baseline');
const accountRouter = require('./api/account');
const thermalRouter = require('./api/thermal');
const bodyParser = require('body-parser');
const db = require('../queries');

const app = express();

app.use(cors({ origin: 'http://localhost:1234 '}));

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended:true,
// }))

app.use('/account', accountRouter);
//app.use('/baseline', baselineRouter);
app.post('/baseline', db.createBaseline);
app.use('/thermal', thermalRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    type: 'error', message: err.message
  })
});

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

module.exports = app;
