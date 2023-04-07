import React, { useEffect, useState, useContext } from 'react'
import ItemTable from './ItemTable'
import { myContext } from '../App'

const PersonalInventory = () => {
  const [items, setItems] = useState([]);
  const { loggedIn , url} = useContext(myContext);
  
  useEffect(() => {
    getItems();
  }, [])

  const getItems = () => {
    fetch(`${url}/items/${loggedIn.userId}`)
      .then(res => res.json())
      .then(data => {
        setItems(data);
      }
      )
  }

  return (
    <div>
      <ItemTable items={items} userId={loggedIn.userId} getItems={getItems}/>
    </div>
  )
}

export default PersonalInventory