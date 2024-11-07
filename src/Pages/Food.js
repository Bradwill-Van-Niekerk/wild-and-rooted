// Food.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Food.css'; // Ensure to import the CSS file

const Food = () => {
  return (
    <div className="food-container">
      <header className="food-header">
        <h1>FOOD</h1>
        <div className="cart-icon">🛒</div>
      </header>

      {/* Seasonal Salads and Starters */}
      <section className="food-category">
        <h2>Seasonal Salads and Starters</h2>
        <div className="food-cards">
          <div className="food-card">
            <img src="https://i.postimg.cc/xjMKmkmp/Roasted-Beet-Salad-with-Goat-Cheese-and-Arugula-1-of-3.jpg" alt="Seasonal Salad" />
            <h3>Seasonal Salad</h3>
            <p>R 80-100</p>
            <Link to="/food" className="order-btn">Order now</Link>
          </div>
          <div className="food-card">
            <img src="https://i.postimg.cc/66rv3ksD/R-2.jpg" alt="Vegetable Soup" />
            <h3>Vegetable Soup</h3>
            <p>R 60-80</p>
            <Link to="/food" className="order-btn">Order now</Link>
          </div>
        </div>
      </section>

      {/* Main Courses */}
      <section className="food-category">
        <h2>Main Courses</h2>
        <div className="food-cards">
          <div className="food-card">
            <img src="https://i.postimg.cc/28TLdnSG/th.jpg" alt="Orange" />
            <h3>Roasted chicken</h3>
            <p>R 100-150</p>
            <Link to="/food" className="order-btn">Order now</Link>
          </div>
          <div className="food-card">
            <img src="https://i.postimg.cc/g03YsPKp/Vegetable-Spaghetti-Recipe-2-1200.jpg" alt="Roasted Root Vegetables" />
            <h3>Pasta</h3>
            <p>R 150-170</p>
            <Link to="/food" className="order-btn">Order now</Link>
          </div>
          <div className="food-card">
            <img src="https://i.postimg.cc/k4zPP1ss/OIP-3.jpg" alt="Wild Mushroom Soup" />
            <h3>Stuffed Acorn Squash:</h3>
            <p>R 100-120</p>
            <Link to="/food" className="order-btn">Order now</Link>
          </div>
        </div>
      </section>

      {/* Desserts */}
      <section className="food-category">
        <h2>Desserts</h2>
        <div className="food-cards">
          <div className="food-card">
            <img src="https://i.postimg.cc/1zFpK4Tz/R-3.jpg" alt="Chocolate Cake" />
            <h3>Honey and Lavender Ice Cream</h3>
            <p>R 50-70</p>
            <Link to="/food" className="order-btn">Order now</Link>
          </div>
          <div className="food-card">
            <img src="https://i.postimg.cc/zvQBMFHY/Roast-apples-pears-3.jpg" alt="Fruit Salad" />
            <h3>Baked Apples or Pears</h3>
            <p>R 40-60</p>
            <Link to="/food" className="order-btn">Order now</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Food;
