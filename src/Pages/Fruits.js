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
        image: "https://media.istockphoto.com/id/1536094876/photo/orange-fruit-in-wooden-box.jpg?s=2048x2048&w=is&k=20&c=K3qTRQ492Py2Y_xttw5ozRJJgEZGcp-sAcrRX6ckhck=",
      },
      {
        id: 2,
        name: "Lemon",
        description: "Tangy lemons, perfect for zest and fresh lemonade.",
        price: "R18 per kg",
        image: "https://res.cloudinary.com/dvv9fvblr/image/fetch/f_jpg,w_350/https://res.cloudinary.com/dvv9fvblr/image/upload/v1695068248/ouvt3k6bknrekxeolfwg.jpg",
      },
    ],
    "Berries": [
      {
        id: 3,
        name: "Strawberry",
        description: "Sweet, fresh strawberries, great for snacks or desserts.",
        price: "$2.50 per lb",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-Fo56ZTfOsfMS3d-treBKc-NIvPlrdUa2PvWA7kReHB4WGJIppuiYodgGhBboVkYxqPxpyM5CSAmMJ1IA6fakQecM-qP3cj_vKZRTQXkdKguKWDKUv_6y2lpjPRWbyHyZAIEz-l8LXCQ/s1600/cameron+highlands+strawberry+farm.jpg",
      },
      {
        id: 4,
        name: "Blueberry",
        description: "Delicious, antioxidant-rich blueberries.",
        price: "$3.00 per lb",
        image: "https://images.squarespace-cdn.com/content/v1/5bfec493cef372cbb6d8f389/af057257-7c91-4922-8418-8c65046c5f35/48B0684A-BCFD-4F6A-88A7-0FE8E2C9C95A.jpeg?format=2500w",
      },
    ],
    "Tropical Fruits": [
      {
        id: 5,
        name: "Pineapple",
        description: "Tropical, sweet pineapple, perfect for snacking.",
        price: "$2.00 each",
        image: "https://www.castlefarmbishton.co.uk/wp-content/uploads/2021/03/fresh-pineapple-sliced-on-chopping-board.jpeg",
      },
      {
        id: 6,
        name: "Mango",
        description: "Ripe and juicy mangoes, perfect for smoothies.",
        price: "$1.80 each",
        image: "http://batungbacalfarms.com/wp-content/uploads/2020/03/received_1297602220628516.jpeg",
      },
    ],
    "Stone Fruits": [
      {
        id: 7,
        name: "Peach",
        description: "Sweet, juicy peaches perfect for snacking.",
        price: "$1.80 per lb",
        image: "https://c.stocksy.com/a/2IH400/z9/1019778.jpg",
      },
      {
        id: 8,
        name: "Cherry",
        description: "Fresh, ripe cherries, great for summer desserts.",
        price: "$4.00 per lb",
        image: "https://watermark.lovepik.com/photo/20211120/large/lovepik-fresh-cherry-picture-picture_500421002.jpg",
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
