const express = require('express');
const basicauth = require('basicauth-middleware');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'text.pdf'));
});
app.get('/basic', basicauth('samundra', 'samundra'), (req, res) => {
  res.sendFile(path.join(__dirname, 'text.pdf'));
});
app.get('/ftp', (req, res) => {
  res.sendFile(path.join(__dirname, 'text.pdf'));
});
app.listen(3001);
