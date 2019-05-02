const express = require('express');
const cors = require('cors');
const baselineRouter = require('./api/baseline');
const accountRouter = require('./api/account');
const thermalRouter = require('./api/thermal');
const bodyParser = require('body-parser');

const app = express();

app.use(cors({ origin: 'http://localhost:1234 '}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true,
}))

app.use('/account', accountRouter);
app.use('/add', baselineRouter);
app.use('/', thermalRouter);

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

module.exports = app;
