import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function InventoryPage() {
  const [inventory, setInventory] = useState([]);
  const navigate = useNavigate();

  // Fetch inventory from backend on component mount
  useEffect(() => {
    fetch("http://localhost:30000/api/items")
      .then((res) => res.json())
      .then((data) => setInventory(data))
      .catch((err) => console.error("Failed to fetch inventory:", err));
  }, []);

  // Optional: remove item from backend + local state
  const removeFromInventory = async (item) => {
    try {
      await fetch(`http://localhost:30000/api/items/${item._id}`, {
        method: 'DELETE',
      });
      setInventory(prev => prev.filter(i => i._id !== item._id));
    } catch (err) {
      console.error("Failed to remove item:", err);
    }
  };

  return (
    <div className="inventory-page">
      <header className="inventory-page">
        <div className="button-group">
          <button onClick={() => navigate("/")} className="homepage-button">Home</button>
          <button onClick={() => navigate("/items")} className="homepage-button">View Item Database</button>
        </div>
        <h1>Your Inventory</h1>
        <p>The items that are currently in your party's shared inventory.</p>
      </header>

      <main className="items-list">
        {inventory.length === 0 ? (
          <p>No items yet.</p>
        ) : (
          inventory.map(item => (
            <div key={item._id} className="item-card">
              <h2>{item.name}</h2>
              <p><strong>Type:</strong> {item.type}</p>
              <p><strong>Rarity:</strong> {item.rarity}</p>
              <button onClick={() => removeFromInventory(item)}>Remove from Inventory</button>
            </div>
          ))
        )}
      </main>

      <footer className="homepage-footer">
        <p>&copy; 2025 Bag of Holding</p>
      </footer>
    </div>
  );
}

export default InventoryPage;