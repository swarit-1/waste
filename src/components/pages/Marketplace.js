import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Marketplace() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', price: '' });

  // Fetch items from the backend on component mount
  useEffect(() => {
    axios.get('http://localhost:5000/api/marketplace')
      .then(response => setItems(response.data))
      .catch(error => console.error('Error fetching items:', error));
  }, []);

  // Function to handle adding a new item
  const addItem = (e) => {
    e.preventDefault();
    if (!newItem.name || !newItem.price) {
      alert('Please enter both name and price!');
      return;
    }

    // Send the new item to the backend
    axios.post('http://localhost:5000/api/marketplace', newItem)
      .then(response => {
        setItems([...items, response.data]); // Update the items array
        setNewItem({ name: '', price: '' }); // Reset form fields
      })
      .catch(error => console.error('Error adding item:', error));
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h1>Marketplace</h1>

      {/* Form to add new item */}
      <form onSubmit={addItem} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Item Name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <input
          type="text"
          placeholder="Item Price"
          value={newItem.price}
          onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <button type="submit" style={{ padding: '5px 10px' }}>Add Item</button>
      </form>

      {/* Display list of items */}
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {items.map((item, index) => (
          <li key={index} style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Marketplace;
