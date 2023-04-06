import React from 'react'
import { Table } from 'react-bootstrap'

const ItemTable = ({ items }) => {
  console.log(items);
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>ID</th>
          <th>Item Name</th>
          <th>Quantity</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.description}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default ItemTable