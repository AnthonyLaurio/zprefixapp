const express = require('express');
const cors = require('cors');
const db = require('./db/controllers');
const port = 3001;


const app = express();

app.use(express.json());
app.use(cors());

app.get('/items', async (req, res) => {
  const items = await db.getItems();
  res.send(items);
})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
})