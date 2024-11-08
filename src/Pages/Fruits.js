import React from "react";
import "./Fruits.css"; // Use a CSS file for consistent styling

const Fruits = () => {
  const fruitCategories = {
    "Citrus Fruits": [
      {
        id: 1,
        name: "Orange",
        description: "Juicy, fresh oranges full of vitamin C.",
        price: "$1.20 per lb",
        image: "https://via.placeholder.com/150?text=Orange",
      },
      {
        id: 2,
        name: "Lemon",
        description: "Tangy lemons, perfect for zest and fresh lemonade.",
        price: "$1.50 per lb",
        image: "https://via.placeholder.com/150?text=Lemon",
      },
    ],
    "Berries": [
      {
        id: 3,
        name: "Strawberry",
        description: "Sweet, fresh strawberries, great for snacks or desserts.",
        price: "$2.50 per lb",
        image: "https://via.placeholder.com/150?text=Strawberry",
      },
      {
        id: 4,
        name: "Blueberry",
        description: "Delicious, antioxidant-rich blueberries.",
        price: "$3.00 per lb",
        image: "https://via.placeholder.com/150?text=Blueberry",
      },
    ],
    "Tropical Fruits": [
      {
        id: 5,
        name: "Pineapple",
        description: "Tropical, sweet pineapple, perfect for snacking.",
        price: "$2.00 each",
        image: "https://via.placeholder.com/150?text=Pineapple",
      },
      {
        id: 6,
        name: "Mango",
        description: "Ripe and juicy mangoes, perfect for smoothies.",
        price: "$1.80 each",
        image: "https://via.placeholder.com/150?text=Mango",
      },
    ],
    "Stone Fruits": [
      {
        id: 7,
        name: "Peach",
        description: "Sweet, juicy peaches perfect for snacking.",
        price: "$1.80 per lb",
        image: "https://via.placeholder.com/150?text=Peach",
      },
      {
        id: 8,
        name: "Cherry",
        description: "Fresh, ripe cherries, great for summer desserts.",
        price: "$4.00 per lb",
        image: "https://via.placeholder.com/150?text=Cherry",
      },
    ],
  };

  return (
    <div className="fruit-container">
      <h1>Our Fresh Fruits</h1>
      {Object.entries(fruitCategories).map(([category, fruits]) => (
        <div key={category} className="fruit-category">
          <h2 className="category-title">{category}</h2>
          <div className="fruit-cards">
            {fruits.map((fruit) => (
              <div key={fruit.id} className="fruit-card">
                <img src={fruit.image} alt={fruit.name} className="fruit-image" />
                <h3 className="fruit-name">{fruit.name}</h3>
                <p className="fruit-description">{fruit.description}</p>
                <p className="fruit-price">{fruit.price}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Fruits;
