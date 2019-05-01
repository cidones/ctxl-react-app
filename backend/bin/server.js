const { Pool } = require('pg');
const express = require('express');

const app = express()
const port =  5000;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'ctxl',
    port: 5432,
    password: 'root',
  })


app.listen(port, () => console.log(`Example app listening on port ${port}!`))