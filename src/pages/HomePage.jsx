import React from 'react';
import { useNavigate } from "react-router-dom";

function HomePage() {

  const navigate = useNavigate(); 
  return (
    <div className="homepage">
      <header className="homepage-header">
        <h1>Bag of Holding</h1>
      </header>

      <main className="homepage-main">
        <section className="homepage-nav">
          <h2>A party inventory manager for D&D5e!</h2>

    <div className="button-group">
      <button onClick={() => navigate("/items")} className="homepage-button">View Item Database</button>
      <button onClick={() => navigate("/inventory")} className="homepage-button">View Your Inventory</button>
    </div>
        </section>

        <section className='bag-img'>
            <img src="src/assets/Bag_of_holding_5e.png" alt="Bag of Holding" width="500" height="600"></img>
        </section>
      </main>

      <footer className="homepage-footer">
        <p>Created by Jacob Steele</p>
      </footer>
    </div>
  );
}

export default HomePage;