import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import ItemsPage from './pages/ItemsPage.jsx';
import InventoryPage from './pages/InventoryPage.jsx';
import './App.css';

function App() {

const [inventory, setInventory] = useState([]);

const addToInventory = (item) => {
  setInventory([...inventory, item]);
};

const removeFromInventory = (itemToRemove) => {
  setInventory(inventory.filter(item => item.id !== itemToRemove.id));
};

  return (
    <Routes>
      {/* Home Page */}
      <Route path="/" element={<HomePage />} />

      {/* Item Database Page */}
      <Route path="/items" element={<ItemsPage addToInventory={addToInventory}/>} />

      {/* Inventory Page */}
      <Route path="/inventory" element={<InventoryPage inventory={inventory}/>} />
      
    </Routes>
  );
}

export default App;
