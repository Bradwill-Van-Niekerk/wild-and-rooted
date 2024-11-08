import React from "react";
import "./vegetables.css"; // Import the CSS file for styling


const Vegetable = () => {
  const vegetables = [
    {
      id: 1,
      name: "Carrot",
      description: "Fresh organic carrots, rich in beta-carotene and vitamins.",
      price: "$1.50 per lb",
      image: "https://via.placeholder.com/150?text=Carrot", // Replace with actual image URLs if available
    },
    {
      id: 2,
      name: "Broccoli",
      description: "Green, crisp broccoli full of nutrients and antioxidants.",
      price: "$2.00 per lb",
      image: "https://via.placeholder.com/150?text=Broccoli", // Replace with actual image URLs if available
    },
    {
      id: 3,
      name: "Tomato",
      description: "Juicy, ripe tomatoes perfect for salads and cooking.",
      price: "$1.20 per lb",
      image: "https://via.placeholder.com/150?text=Tomato", // Replace with actual image URLs if available
    },
  ];

  return (
    <div className="vegetable-container">
      <h1>Our Vegetables</h1>
      <div className="vegetable-cards">
        {vegetables.map((veg) => (
          <div key={veg.id} className="vegetable-card">
            <img src={veg.image} alt={veg.name} className="vegetable-image" />
            <h2 className="vegetable-name">{veg.name}</h2>
            <p className="vegetable-description">{veg.description}</p>
            <p className="vegetable-price">{veg.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vegetable;
