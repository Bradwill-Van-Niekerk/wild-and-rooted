import React from "react";
import "./vegetables.css";

const Vegetable = () => {
  const vegetableCategories = {
    "Root Vegetables": [
      {
        id: 1,
        name: "Carrot",
        description: "Fresh organic carrots, rich in beta-carotene and vitamins.",
        price: "$1.50 per lb",
        image: "https://via.placeholder.com/150?text=Carrot",
      },
      {
        id: 2,
        name: "Potato",
        description: "Versatile potatoes perfect for mashing, frying, or roasting.",
        price: "$1.00 per lb",
        image: "https://via.placeholder.com/150?text=Potato",
      },
    ],
    "Leafy Greens": [
      {
        id: 3,
        name: "Spinach",
        description: "Fresh, leafy spinach, packed with iron and vitamins.",
        price: "$1.80 per bunch",
        image: "https://via.placeholder.com/150?text=Spinach",
      },
      {
        id: 4,
        name: "Lettuce",
        description: "Crisp, green lettuce perfect for salads and sandwiches.",
        price: "$1.20 per head",
        image: "https://via.placeholder.com/150?text=Lettuce",
      },
    ],
    "Fruiting Vegetables": [
      {
        id: 5,
        name: "Tomato",
        description: "Juicy, ripe tomatoes perfect for salads and cooking.",
        price: "$1.20 per lb",
        image: "https://via.placeholder.com/150?text=Tomato",
      },
      {
        id: 6,
        name: "Bell Pepper",
        description: "Colorful bell peppers, great for cooking or raw snacks.",
        price: "$2.00 per lb",
        image: "https://via.placeholder.com/150?text=Bell+Pepper",
      },
    ],
    "Cruciferous Vegetables": [
      {
        id: 7,
        name: "Broccoli",
        description: "Green, crisp broccoli full of nutrients and antioxidants.",
        price: "$2.00 per lb",
        image: "https://via.placeholder.com/150?text=Broccoli",
      },
      {
        id: 8,
        name: "Cauliflower",
        description: "Tender cauliflower florets, perfect for roasting or steaming.",
        price: "$2.20 per lb",
        image: "https://via.placeholder.com/150?text=Cauliflower",
      },
    ],
  };

  return (
    <div className="vegetable-container">
      <h1>Our Fresh Vegetables</h1>
      {Object.entries(vegetableCategories).map(([category, vegetables]) => (
        <div key={category} className="vegetable-category">
          <h2 className="category-title">{category}</h2>
          <div className="vegetable-cards">
            {vegetables.map((veg) => (
              <div key={veg.id} className="vegetable-card">
                <img src={veg.image} alt={veg.name} className="vegetable-image" />
                <h3 className="vegetable-name">{veg.name}</h3>
                <p className="vegetable-description">{veg.description}</p>
                <p className="vegetable-price">{veg.price}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Vegetable;
