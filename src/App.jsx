import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import ItemsPage from './pages/ItemsPage.jsx';
import InventoryPage from './pages/InventoryPage.jsx';
import './App.css';

function App() {
  return (
    <Routes>
      {/* Home Page */}
      <Route path="/" element={<HomePage />} />

      {/* Item Database Page */}
      <Route path="/items" element={<ItemsPage />} />

      {/* Inventory Page */}
      <Route path="/inventory" element={<InventoryPage />} />
      
    </Routes>
  );
}

export default App;
