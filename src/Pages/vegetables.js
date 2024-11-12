import React, { useState } from "react";
import "./vegetables.css";

const Vegetable = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (vegetable) => {
    setCart((prevCart) => [...prevCart, vegetable]);
    alert(`${vegetable.name} has been added to the cart.`);
  };

  const vegetableCategories = {
    "Root Vegetables": [
      {
        id: 1,
        name: "Carrot",
        description: "Fresh organic carrots, rich in beta-carotene and vitamins.",
        price: "R12.00 p/kg",
        image: "https://th.bing.com/th/id/OIP.l2kbPf18xoemyxkOz-GIbAHaEx?rs=1&pid=ImgDetMain",
      },
      {
        id: 2,
        name: "Potato",
        description: "Versatile potatoes perfect for mashing, frying, or roasting.",
        price: "R14.50 p/kg",
        image: "https://th.bing.com/th/id/OIP.JV_BrVwBxcZ4KJiLprP_UwHaHa?w=700&h=700&rs=1&pid=ImgDetMain",
      },
      {
        id: 3,
        name: "Potato",
        description: "Versatile potatoes perfect for mashing, frying, or roasting.",
        price: "R14.50 p/kg",
        image: "https://th.bing.com/th/id/OIP.JV_BrVwBxcZ4KJiLprP_UwHaHa?w=700&h=700&rs=1&pid=ImgDetMain",
      },
    ],
    "Leafy Greens": [
      {
        id: 4,
        name: "Spinach",
        description: "Fresh, leafy spinach, packed with iron and vitamins.",
        price: "R16.99 p/bunch",
        image: "https://images.squarespace-cdn.com/content/v1/5e4d646fb8470a53cbeab41d/1621522401013-WYFG4Y29JHC87BI207IW/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s0XaMNjCqAzRibjnE_wBlkZ2axuMlPfqFLWy-3Tjp4nKScCHg1XF4aLsQJlo6oYbA/spinach",
      },
      {
        id: 5,
        name: "Lettuce",
        description: "Crisp, green lettuce perfect for salads and sandwiches.",
        price: "R24.50 p/head",
        image: "https://th.bing.com/th/id/OIP.9ql5SvlYdR824Bl5UUI0kgHaE8?rs=1&pid=ImgDetMain",
      },
      {
        id: 6,
        name: "Lettuce",
        description: "Crisp, green lettuce perfect for salads and sandwiches.",
        price: "R24.50 p/head",
        image: "https://th.bing.com/th/id/OIP.9ql5SvlYdR824Bl5UUI0kgHaE8?rs=1&pid=ImgDetMain",
      },
    ],
    "Fruiting Vegetables": [
      {
        id: 7,
        name: "Tomato",
        description: "Juicy, ripe tomatoes perfect for salads and cooking.",
        price: "R15.00 p/kg",
        image: "https://th.bing.com/th/id/OIP.A21x3tUpZUgt1278KnWVYAHaE7?w=282&h=188&c=7&r=0&o=5&pid=1.7",
      },
      {
        id: 8,
        name: "Bell Pepper",
        description: "Colorful bell peppers, great for cooking or raw snacks.",
        price: "R27.25 p/kg",
        image: "https://th.bing.com/th/id/OIP.gqlLk2vvyio1jrFE6J94GAHaE7?rs=1&pid=ImgDetMain",
      },
      {
        id: 9,
        name: "Bell Pepper",
        description: "Colorful bell peppers, great for cooking or raw snacks.",
        price: "R27.25 p/kg",
        image: "https://th.bing.com/th/id/OIP.gqlLk2vvyio1jrFE6J94GAHaE7?rs=1&pid=ImgDetMain",
      },
    ],
    "Cruciferous Vegetables": [
      {
        id: 10,
        name: "Broccoli",
        description: "Green, crisp broccoli full of nutrients and antioxidants.",
        price: "R28.99 p/head",
        image: "https://th.bing.com/th/id/R.2b0d0a1273f360464544215910eec10c?rik=c%2f4Td6072d4SRQ&pid=ImgRaw&r=0",
      },
      {
        id: 11,
        name: "Cauliflower",
        description: "Tender cauliflower florets, perfect for roasting or steaming.",
        price: "R25.35 p/head",
        image: "https://cdn.mos.cms.futurecdn.net/ApkWfRWrKKyHAx3oi3DrQR.jpg",
      },
      {
        id: 12,
        name: "Cauliflower",
        description: "Tender cauliflower florets, perfect for roasting or steaming.",
        price: "R25.35 p/head",
        image: "https://cdn.mos.cms.futurecdn.net/ApkWfRWrKKyHAx3oi3DrQR.jpg",
      },
    ],
  };

  return (
    <div className="vegetable-container">
      <header className="vegetable-header">
        <h1>Our Fresh Vegetables</h1>
        <div className="cart-icon">🛒 {cart.length} items</div>
      </header>

      {Object.entries(vegetableCategories).map(([category, vegetables]) => (
        <section key={category} className="vegetable-category">
          <h2>{category}</h2>
          <div className="vegetable-cards">
            {vegetables.map((veg) => (
              <div key={veg.id} className="vegetable-card">
                <img src={veg.image} alt={veg.name} className="vegetable-image" />
                <h3 className="vegetable-name">{veg.name}</h3>
                <p className="vegetable-description">{veg.description}</p>
                <p className="vegetable-price">{veg.price}</p>
                <button onClick={() => addToCart(veg)} className="order-btn">
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

export default Vegetable;
