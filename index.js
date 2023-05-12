const express = require('express');
const request = require('request');
require('dotenv').config();

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use('/api', (req, res) => {
  const ONE_TORRE_PERSON_API = `${process.env.ONE_TORRE_PERSON_API}${req.url}`;
  req.pipe(request(ONE_TORRE_PERSON_API)).pipe(res);
});

app.listen(process.env.PORT || 4000, () => {
  console.log('Server is running...');
});
