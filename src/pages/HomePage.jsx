import React from 'react';

function HomePage() {
  return (
    <div className="homepage">
      <header className="homepage-header">
        <h1>Bag of Holding</h1>
        <p>A party inventory manager for D&D5e.</p>
      </header>

      <main className="homepage-main">
        <section className="featured-products">
          <h2>Lets get started!</h2>
          {/* Placeholder content */}
          <div className="p">View Item Database</div>
          <div className="product-card">View Current Inventory</div>
        </section>
      </main>

      <footer className="homepage-footer">
        <p>&copy; 2025 Bag of Holding</p>
      </footer>
    </div>
  );
}

export default HomePage;