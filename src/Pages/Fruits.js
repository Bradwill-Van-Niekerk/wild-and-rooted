import React, { useState } from 'react';
import './Fruits.css'; // Use a CSS file for consistent styling

const Fruits = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (fruit) => {
    setCart((prevCart) => [...prevCart, fruit]);
    alert(`${fruit.name} has been added to the cart.`);
  };

  const fruitCategories = {
    "Citrus Fruits": [
      {
        id: 1,
        name: "Orange",
        description: "Juicy, fresh oranges full of vitamin C.",
        price: "R20.00 per kg",
        image: "https://media.istockphoto.com/id/1536094876/photo/orange-fruit-in-wooden-box.jpg?s=2048x2048&w=is&k=20&c=K3qTRQ492Py2Y_xttw5ozRJJgEZGcp-sAcrRX6ckhck=",
      },
      {
        id: 2,
        name: "Lemon",
        description: "Tangy lemons, perfect for zest and fresh lemonade.",
        price: "R25.00 per kg",
        image: "https://res.cloudinary.com/dvv9fvblr/image/fetch/f_jpg,w_350/https://res.cloudinary.com/dvv9fvblr/image/upload/v1695068248/ouvt3k6bknrekxeolfwg.jpg",
      },
      {
        id: 3,
        name: "Lime",
        description: "Tangy lemons, perfect for zest and fresh lemonade.",
        price: "R16.00 per kg",
        image: "https://www.goodharvest.com.au/cdn/shop/articles/lemonade_fruit_490_x_490_px_1.png?v=1651639513",
      },
    ],
    "Berries": [
      {
        id: 4,
        name: "Strawberry",
        description: "Sweet, fresh strawberries, great for snacks or desserts.",
        price: "R40.00 per kg",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-Fo56ZTfOsfMS3d-treBKc-NIvPlrdUa2PvWA7kReHB4WGJIppuiYodgGhBboVkYxqPxpyM5CSAmMJ1IA6fakQecM-qP3cj_vKZRTQXkdKguKWDKUv_6y2lpjPRWbyHyZAIEz-l8LXCQ/s1600/cameron+highlands+strawberry+farm.jpg",
      },
      {
        id: 5,
        name: "Blueberry",
        description: "Delicious, antioxidant-rich blueberries.",
        price: "R45.00 per kg",
        image: "https://images.squarespace-cdn.com/content/v1/5bfec493cef372cbb6d8f389/af057257-7c91-4922-8418-8c65046c5f35/48B0684A-BCFD-4F6A-88A7-0FE8E2C9C95A.jpeg?format=2500w",
      },
      {
        id: 6,
        name: "Kiwi",
        description: "Delicious, antioxidant-rich kiwi.",
        price: "R50.00 per kg",
        image: "https://plantsender.com.au/wp-content/uploads/2022/05/KIWIBERRY-1.jpg",
      },
    ],
    "Tropical Fruits": [
      {
        id: 8,
        name: "Pineapple",
        description: "Tropical, sweet pineapple, perfect for snacking.",
        price: "R30.00 each",
        image: "https://www.castlefarmbishton.co.uk/wp-content/uploads/2021/03/fresh-pineapple-sliced-on-chopping-board.jpeg",
      },
      {
        id: 7,
        name: "Mango",
        description: "Ripe and juicy mangoes, perfect for smoothies.",
        price: "R25.00 each",
        image: "http://batungbacalfarms.com/wp-content/uploads/2020/03/received_1297602220628516.jpeg",
      },
      {
        id: 8,
        name: "Guava",
        description: "Ripe and juicy guavas, perfect for smoothies.",
        price: "R22.00 each",
        image: "https://s30386.pcdn.co/wp-content/uploads/2019/08/p19n9riurt9t4e3fgie4ipbv06.jpg",
      },
    ],
    "Stone Fruits": [
      {
        id: 9,
        name: "Peach",
        description: "Sweet, juicy peaches perfect for snacking.",
        price: "R40.00 per kg",
        image: "https://c.stocksy.com/a/2IH400/z9/1019778.jpg",
      },
      {
        id: 10,
        name: "Cherry",
        description: "Fresh, ripe cherries, great for summer desserts.",
        price: "R80.00 per kg",
        image: "https://watermark.lovepik.com/photo/20211120/large/lovepik-fresh-cherry-picture-picture_500421002.jpg",
      },
      {
        id: 11,
        name: "Plum",
        description: "Fresh, ripe plums, perfect for summer desserts.",
        price: "R70.00 per kg",
        image: "https://cdn.shopify.com/s/files/1/0254/7715/2804/files/overflowing-with-ripe_-juicy-fruit.-The-peaches-are-sliced-into-thin-wedges_-the-plums-are-cut-in-half_-and-the-cherries-are-left-whole-with-their-stems-intact._1024x1024.jpg?v=1681309620",
      },
    ],
  };

  return (
    <div className="fruit-container">
      <header className="fruit-header">
        <h1>Our Fresh Fruits</h1>
        <div className="cart-icon">🛒 {cart.length} items</div>
      </header>

      {Object.entries(fruitCategories).map(([category, fruits]) => (
        <section key={category} className="fruit-category">
          <h2>{category}</h2>
          <div className="fruit-cards">
            {fruits.map((fruit) => (
              <div key={fruit.id} className="fruit-card">
                <img src={fruit.image} alt={fruit.name} className="fruit-image" />
                <h3 className="fruit-name">{fruit.name}</h3>
                <p className="fruit-description">{fruit.description}</p>
                <p className="fruit-price">{fruit.price}</p>
                <button onClick={() => addToCart(fruit)} className="order-btn">
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

export default Fruits;
