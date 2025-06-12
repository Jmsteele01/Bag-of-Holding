import React, { useState } from 'react';
import items from '../data/items';

function InventoryPage() {
  return (
    <div className="homepage">
      <header className="homepage-header">
        <h1>Your Inventory</h1>
        <p>The items that are currently in your party's shared inventory.</p>
      </header>

      
        <div className="search">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Items..."
        />
      </div>

      <main className="items-list">
        {items.map(item => (
          <div key={item.id} className="item-card">
            <h2>{item.name}</h2>
            <p><strong>Type:</strong> {item.type}</p>
            <p><strong>Rarity:</strong> {item.rarity}</p>
          </div>
        ))}
      </main>

      <footer className="homepage-footer">
        <p>&copy; 2025 Bag of Holding</p>
      </footer>
    </div>
  );
}

export default InventoryPage;