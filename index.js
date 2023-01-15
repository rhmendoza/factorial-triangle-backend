const express = require('express');
const { factorial }= require('./factorial');
const { area }= require('./triangle');
const app = express();

app.use(express.urlencoded());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Mi primer servidor 💻.');
});

app.get('/getfactorial', (req, res) => {
  let num = req.query.num;
  res.send(`${factorial(num)}`); 
})

app.get('/getfactorial/:num', (req, res) => {
  let num = req.params.num;
  let result = factorial(num);
  let result2 = BigInt(result) 
  //res.send(factorial(num).toString());
  //res.send(result.toFixed());
  res.send(result2.toString());
})

app.post('/trianglearea/urlencoded', (req, res) => {
  let height = req.body.height;
  let base = req.body.base;
  res.send(area(base, height).toString());
})

app.post('/trianglearea/json', (req, res) => {
  let height = req.body.height;
  let base = req.body.base;
  res.send(area(base, height).toString());
})

const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
  console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
});