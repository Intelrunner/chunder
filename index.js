const express = require('express');
const app = express();
const path = require('path');

app.set('trust proxy', true);

app.get('/', (req, res) => {
  res.send('Hello (H0la) From App Engine.!');
});

app.get('/submit', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/form.html'));
});
const server = app.listen(8080, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Example app listening at http://${host}:${port}`);
});