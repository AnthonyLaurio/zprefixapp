const db = require('./db/controllers');

const getItems = async (req, res) => {
  const items = await db.getItems();
  console.log(`Got items`);
  res.send(items);
}

const getPersonalItems = async (req, res) => {
  const items = await db.getPersonalItems(req.params.id);
  console.log(`Got personal items for user: ${req.params.id}`);
  res.send(items);
}

const addItem = async (req, res) => {
  const item = await db.addItem(req.body);
  if(item){
    res.status(200).send({message: 'Item added', error: false});
  }else{
    res.status(200).send({message: 'Item not added', error: true});
  }
}

const deleteItem = async (req, res) => {
  const item = await db.deleteItem(req.params.id);
  if(item){
    res.status(200).send({message: 'Item deleted', error: false});
  }else{
    res.status(200).send({message: 'Item not deleted', error: true});
  }
}

const updateItem = async (req, res) => {
  const item = await db.updateItem(req.body);
  if(item){
    res.status(200).send({message: 'Item updated', error: false});
  }else{
    res.status(200).send({message: 'Item not updated', error: true});
  }
}

module.exports = { addItem, getItems, getPersonalItems, deleteItem, updateItem };