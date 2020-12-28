/* jshint esversion: 6 */

import express from 'express';
const app = express();
import { join } from 'path';
import parser from 'body-parser';

app.set('trust proxy', true);
app.use(parser.urlencoded({ extended: true }));



app.get('/', (req, res) => {
  res.send('Hello (H0la) From App Engine.!');
});

app.get('/submit', (req, res) => {
  res.sendFile(join(__dirname, '/views/form.html'));
});

app.post('/submit', (req, res) => {
  console.log({
    name: req.body.name,
    message: req.body.message
  });
  res.send('Danks!');
});


  const server = app.listen(8080, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Example app listening at http://${host}:${port}`);
});

