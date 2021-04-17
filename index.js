const express = require('express');
const app = express();

function getRandomNumber() {
  const number = Math.floor(Math.random() * 99) + 1;
  return number.toString();
}

app.get('/listUsers', (req, res) => {
  res.end(getRandomNumber());
});

const server = app.listen(3001, () => {
  const host = server.address().address
  const port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
});