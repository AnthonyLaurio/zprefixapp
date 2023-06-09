import React, { useRef, useState, useContext } from 'react'
import { Table } from 'react-bootstrap'
import '../stylesheets/ItemTable.css'
import ItemDetails from './ItemDetails';
import { myContext } from '../App';

const ItemTable = ({ items, userId, getItems }) => {
  const itemRef = useRef({ userId: userId, name: '', quantity: '', description: '' });
  const { url } = useContext(myContext);
  const [details, setDetails] = useState({});

  const handleAdd = () => {
    fetch(`${url}/items/`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(itemRef.current)
    })
      .then(res => res.json())
      .then(data => {
        getItems();
      })
  }

  const handleDelete = (id) => {
    fetch(`${url}/items/${id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => {
        setDetails({});
        getItems();
      })
  }
  //If user is not logged in, display only the item table
  if (!userId) {
    return (
      <>
        {Object.keys(details).length === 0 ? null : <ItemDetails item={details} setDetails={setDetails}/>}
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th className='text-center'>ID</th>
              <th>Item Name</th>
              <th className='text-center quantity-header'>Quantity</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} onClick={(e) => {setDetails(item)}}>
                <td className='text-center'>{item.id}</td>
                <td>{item.name}</td>
                <td className='text-center'>{item.quantity}</td>
                <td className='text-nowrap'>{item.description.length >= 100 ? `${item.description.slice(0, 97)}...` : item.description}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    )
  }
  //If user is logged in, display only the users items and allow adding, deleting, and editing items
  else {
    return (
      <>
      {Object.keys(details).length === 0 ? null : <ItemDetails item={details} setDetails={setDetails} userId={userId} handleDelete={handleDelete} getItems={getItems}/>}
      <Table striped bordered hover variant="dark">
        <thead className='text-center'>
          <tr>
            <th>ID</th>
            <th>Item Name</th>
            <th className='quantity-header'>Quantity</th>
            <th>Description</th>
            <th >Action</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          <tr key='add'>
            <td className='text-center'>0</td>
            <td className=''><input type='text' className='form-control' placeholder='name' onChange={(e) => { itemRef.current.name = e.target.value }} /></td>
            <td><input type='text' className='form-control' placeholder='quantity' onChange={(e) => { itemRef.current.quantity = e.target.value }} /></td>
            <td><input type='text' className='form-control' placeholder='description' onChange={(e) => { itemRef.current.description = e.target.value }} /></td>
            <td><button type='button' className='btn btn-success' onClick={() => handleAdd()}>Add</button></td>
          </tr>
          {items.map((item, index) => (
            <tr key={index} >
              <td className='text-center' onClick={() => {setDetails(item)}}>{item.id}</td>
              <td onClick={() => {setDetails(item)}}>{item.name}</td>
              <td className='text-center' onClick={() => {setDetails(item)}}>{item.quantity}</td>
              <td className='text-nowrap' onClick={() => {setDetails(item)}}>{item.description.length >= 100 ? `${item.description.slice(0, 97)}...` : item.description}</td>
              <td className='d-flex justify-content-evenly'>
                <button type='button' className='btn btn-danger' onClick={() => { handleDelete(item.id) }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      </>
    )
  }
}

export default ItemTable