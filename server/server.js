const express = require('express');

const app = express();

const hostname = '127.0.0.1';
const port = 5000;

app.get('/hello', (req, res) => res.send('Hello World!'));
app.get('/summary', (req, res) => res.send('Summary!'));

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
