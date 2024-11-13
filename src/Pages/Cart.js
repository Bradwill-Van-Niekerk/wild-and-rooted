import React, { useContext, useState } from 'react';
import { CartContext } from './cartContext';
import { Link } from 'react-router-dom';
import './carts.css';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + parseFloat(item.price.split(" ")[0].replace("R", "")), 0)
      .toFixed(2);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty. Add items before checking out.");
      return;
    }
    clearCart();
    setCheckoutSuccess(true);
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty. <Link to="/">Continue Shopping</Link></p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div>
                <h3>{item.name}</h3>
                <p>Price: {item.price}</p>
                <button onClick={() => removeFromCart(item.id)} className="remove-item-btn">
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="cart-total">
            <h3>Total: R {calculateTotal()}</h3>
          </div>

          {/* Checkout Section */}
          <button onClick={handleCheckout} className="checkout-btn">
            Checkout
          </button>

          {/* Checkout Success Message */}
          {checkoutSuccess && (
            <div className="checkout-success">
              <p>Thank you for your purchase! 🎉</p>
              <Link to="/">Continue Shopping</Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
