import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function ItemsPage({ }) {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetches items from backend data
  useEffect(() => {
    fetch("http://localhost:30000/api/items")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Failed to fetch items:", err));
  }, []);

    // Inventory POST
const addToInventory = async (item) => {
  try {
    
    const { _id, ...newItem } = item;

    const res = await fetch("http://localhost:30000/api/inventory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newItem)
    });

    if (!res.ok) throw new Error("Failed to add item to inventory");

    alert(`${item.name} added to inventory.`);
  } catch (err) {
    console.error("Error adding to inventory:", err);
  }
};

  // Filter items by search term (WIP)
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="items page">
      <div className="button-group">
        <button onClick={() => navigate("/")} className="homepage-button">Home</button>
        <button onClick={() => navigate("/inventory")} className="inventory-button">View Your Inventory</button>
      </div>

      <header className="items-header">
        <h1>Item Database</h1>
        <p>Here you'll find a list of common equipment and basic magic items that you can add to your party's inventory.</p>
      </header>

      {/* <div className="search">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Items..."
        />
      </div> */}

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
        <p>Created by Jacob Steele</p>
      </footer>
    </div>
  );
}

export default ItemsPage;