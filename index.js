var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/deniss', (req, res) => {
    res.send('Hello Deniss!')
  })

app.listen(3000, () => {
  console.log('Приклад застосунку, який прослуховує 3000-ий порт!')
})
