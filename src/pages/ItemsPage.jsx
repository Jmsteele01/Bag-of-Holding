import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function ItemsPage({ addToInventory }) {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch items from backend on mount
  useEffect(() => {
    fetch("http://localhost:30000/api/items")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Failed to fetch items:", err));
  }, []);

  // Filter items by search term
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        {filteredItems.map(item => (
          <div key={item._id} className="item-card">
            <h2>{item.name}</h2>
            <p><strong>Type:</strong> {item.type}</p>
            <p><strong>Rarity:</strong> {item.rarity}</p>
            <button onClick={() => addToInventory(item)}>Add to Inventory</button>
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