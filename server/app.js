const express = require('express');
const cors = require('cors');
const db = require('./db/controllers');
const auth = require('./authentication');
const item = require('./items');
const cookieParser = require('cookie-parser')
const port = 3001;


const app = express();

const corsOptions = {
  origin: true, //included origin as true
  credentials: true, //included credentials as true
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

app.get('/items', async (req, res) => {
  item.getItems(req, res);
})

app.get('/items/:id', async (req, res) => {
  item.getPersonalItems(req, res);
})

app.delete('/items/:id', async (req, res) => {
  item.deleteItem(req, res);
})

app.patch('/items', async (req, res) => {
  item.updateItem(req, res);
})


app.post('/items', async (req, res) => {
  item.addItem(req, res);
})

app.get('/login', async (req, res) => {
  auth.login(req, res);
  })

app.get('/checkAuth', async (req, res) => {
  auth.checkAuth(req, res);
})

app.get('/logout', async (req, res) => {
  auth.logout(req, res);
})

app.post('/register', async (req, res) => {
  console.log(req.body);
  auth.register(req, res);
})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
})