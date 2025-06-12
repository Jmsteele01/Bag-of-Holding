import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import items from '../data/items';

function ItemsPage({ addToInventory }) {
        const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");

  return (

    <div className="homepage">

      <div className="button-group">
      <button onClick={() => navigate("/")} className="homepage-button">Home</button>
      <button onClick={() => navigate("/inventory")} className="homepage-button">View Your Inventory</button>
    </div>

      <header className="homepage-header">
        <h1>Item Database</h1>
        <p>Here you'll find a list of common equipment and basic magic items that you can add to your party's inventory.</p>
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
            <button onClick={() => addToInventory(item)}>
                Add to Inventory
              </button>
          </div>
        ))}
      </main>
      
      <footer className="homepage-footer">
        <p>&copy; 2025 Bag of Holding</p>
      </footer>
    </div>
  );
}

export default ItemsPage;