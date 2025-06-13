import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

//get all method for inventory
function InventoryPage({}) {
      const navigate = useNavigate();
      const [inventory, setInventory] = useState([]);

    useEffect(() => {
    const fetchInventory = async () => {
      try {
        const res = await fetch("http://localhost:30000/api/inventory"); 
        const data = await res.json();
        setInventory(data);
      } catch (err) {
        console.error("Error displaying inventory:", err);
      }
    };
    
    fetchInventory();
  }, []);

  //delete method for inventory
  const removeFromInventory = async (itemToRemove) => {
    try {
      await fetch(`http://localhost:30000/api/inventory/${itemToRemove._id}`, {
        method: "DELETE"
      });

      setInventory(inventory.filter(item => item._id !== itemToRemove._id));
    } catch (err) {
      console.error("Error removing item:", err);
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

      <main className="inventory-list">
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
        <p>Created by Jacob Steele</p>
      </footer>
    </div>
  );
}

export default InventoryPage;