import React from 'react';

function ItemsPage() {
  return (
    <div className="homepage">
      <header className="homepage-header">
        <h1>Item Database</h1>
        <p>Here you'll find a list of common equipment and basic magic items that you can add to your party's inventory.</p>
      </header>
      <div className="item-list">
          <button onClick={() => navigate("/items")} className="homepage-button">View Item Database</button>
          <button onClick={() => navigate("/inventory")} className="homepage-button">View Your Inventory</button>
      </div>
      <footer className="homepage-footer">
        <p>&copy; 2025 Bag of Holding</p>
      </footer>
    </div>
  );
}

export default ItemsPage;