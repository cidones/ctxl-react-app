const express = require('express');
const cors = require('cors');
const baselineRouter = require('./api/baseline');
const accountRouter = require('./api/account');
const titleRouter = require('./api/title');
const thermalRouter = require('./api/thermal');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


const app = express();

app.use(cors({ origin: 'http://localhost:3000 ', credentials: true }));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.use('/account', accountRouter);
app.use('/baseline', baselineRouter);
app.use('/create', titleRouter);
app.use('/thermal', thermalRouter);


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    type: 'error', message: err.message
  })
});


module.exports = app;
