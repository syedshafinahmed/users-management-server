const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;


app.use(cors());


app.get('/', (req, res) => {
  res.send('Users Server is Available');
})


const users = [
  {id: 1, name: 'Shafin', email:'shafin@gmail.com'},
  {id: 2, name: 'Nafin', email:'nafin@gmail.com'},
  {id: 3, name: 'Ahmed', email:'ahmed@gmail.com'},
  {id: 4, name: 'Dhruv', email:'dhruv@gmail.com'},
]


app.get('/users', (req, res) => {
  res.send(users);
})


app.listen(port, () => {
  console.log(`Users Server Started on Port: ${port}`)
})