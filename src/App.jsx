import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import ItemsPage from './pages/ItemsPage.jsx';
import InventoryPage from './pages/InventoryPage.jsx';
import NotFound from './pages/NotFound.jsx';
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

      {/* Not found page */}
      <Route path="*" element={<NotFound />} />

      
    </Routes>
  );
}

export default App;
