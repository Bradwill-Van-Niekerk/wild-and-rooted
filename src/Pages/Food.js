import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Food.css';

const Food = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (foodItem) => {
    setCart((prevCart) => [...prevCart, foodItem]);
    alert(`${foodItem.name} has been added to the cart.`);
  };

  const foodCategories = {
    "Seasonal Salads and Starters": [
      {
        id: 1,
        name: "Seasonal Salad",
        description: "Fresh seasonal salad with organic ingredients.",
        price: "R 80-100",
        image: "https://i.postimg.cc/xjMKmkmp/Roasted-Beet-Salad-with-Goat-Cheese-and-Arugula-1-of-3.jpg",
      },
      {
        id: 2,
        name: "Vegetable Soup",
        description: "Warm and hearty vegetable soup.",
        price: "R 60-80",
        image: "https://i.postimg.cc/66rv3ksD/R-2.jpg",
      },
      {
        id: 3,
        name: "Bruschetta",
        description: "Toasted bread topped with tomatoes and basil.",
        price: "R 60-80",
        image: "https://i.postimg.cc/cCtgdzSL/R-4.jpgg",
      },
    ],
    "Main Courses": [
      {
        id: 4,
        name: "Roasted Chicken",
        description: "Juicy roasted chicken with herbs.",
        price: "R 100-150",
        image: "https://i.postimg.cc/28TLdnSG/th.jpg",
      },
      {
        id: 5,
        name: "Pasta",
        description: "Classic pasta with rich tomato sauce.",
        price: "R 150-170",
        image: "https://i.postimg.cc/g03YsPKp/Vegetable-Spaghetti-Recipe-2-1200.jpg",
      },
      {
        id: 6,
        name: "Stuffed Acorn Squash",
        description: "Stuffed squash with a blend of spices.",
        price: "R 100-120",
        image: "https://i.postimg.cc/k4zPP1ss/OIP-3.jpg",
      },
    ],
    "Desserts": [
      {
        id: 7,
        name: "Honey and Lavender Ice Cream",
        description: "Creamy ice cream with a hint of lavender.",
        price: "R 50-70",
        image: "https://i.postimg.cc/1zFpK4Tz/R-3.jpg",
      },
      {
        id: 8,
        name: "Baked Apples or Pears",
        description: "Oven-baked apples or pears with cinnamon.",
        price: "R 40-60",
        image: "https://i.postimg.cc/zvQBMFHY/Roast-apples-pears-3.jpg",
      },
      {
        id: 9,
        name: "Peanut Butter Dessert",
        description: "Rich peanut butter-based dessert.",
        price: "R 40-50",
        image: "https://i.postimg.cc/jjjyGZLL/th-1.jpg",
      },
    ],
  };

  return (
    <div className="food-container">
      <header className="food-header">
        <h1>Our Delicious Food</h1>
        <div className="cart-icon">🛒 {cart.length} items</div>
      </header>

      {Object.entries(foodCategories).map(([category, foods]) => (
        <section key={category} className="food-category">
          <h2>{category}</h2>
          <div className="food-cards">
            {foods.map((food) => (
              <div key={food.id} className="food-card">
                <img src={food.image} alt={food.name} className="food-image" />
                <h3 className="food-name">{food.name}</h3>
                <p className="food-description">{food.description}</p>
                <p className="food-price">{food.price}</p>
                <button onClick={() => addToCart(food)} className="order-btn">
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Food;
