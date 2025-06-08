import React from 'react';

function HomePage() {
  return (
    <div className="homepage">
      <header className="homepage-header">
        <h1>Bag of Holding</h1>
        <p>A party inventory manager for D&D5e.</p>
      </header>

      <main className="homepage-main">
        <section className="homepage-nav">
          <h2>Lets get started!</h2>
          {/* Placeholder content */}
    <div className="button-group">
      <button className="homepage-button">View Item Database</button>
      <button className="homepage-button">View Your Inventory</button>
    </div>
        </section>

        <section className='bag-img'>
            <img src="src/assets/Bag_of_holding_5e.png" alt="Bag of Holding" width="500" height="600"></img>
        </section>
      </main>

      <footer className="homepage-footer">
        <p>&copy; 2025 Bag of Holding</p>
      </footer>
    </div>
  );
}

export default HomePage;