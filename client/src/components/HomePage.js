import React, { useEffect } from 'react'
import ItemTable from './ItemTable';
import { myContext } from '../App';

const HomePage = () => {
  const [items, setItems] = React.useState([]);
  const { url } = React.useContext(myContext);

  useEffect(() => {
    fetch(`${url}/items`)
      .then(res => res.json())
      .then(data => {
        setItems(data);
      })
  }, [])
  return (
    <div>
      {items.length !== 0 ? <ItemTable items={items} /> : <h1 className='text-light text-center'>Loading...Server may be booting up please wait</h1>}
    </div>
  )
}

export default HomePage