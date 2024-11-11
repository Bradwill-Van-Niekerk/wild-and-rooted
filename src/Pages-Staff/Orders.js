import React, { useState } from 'react';
import { OrderData } from './TempData'; // Assuming you have initial data here
import '../Pages-Staff-CSS/Orders.css'

function OrderHelp({ setHelpOpenFalse }) {

  return (
    <>
      <div className='HelpBox'>
        <div className='HelpText'>
        <div>
          <button type="button" className='CloseHelp' onClick={setHelpOpenFalse}>X</button>
        </div>
          <h3 className='HelpHeading'>Help</h3>
          <p><strong>To use the app, you can start by adding a new order by clicking the "add order" button.</strong>
          <br/>You can view and update orders by selecting them directly from the list. Inside the order, you can manually
            change information associated with an order or update its status. However, note that you can quickly change the
            status of an order by dragging it between the three different columns with your mouse.</p>
        </div>
      </div>
    </>
  );
}

function AddOrder({ addOrder, closeAddOrder }) {
  const [orderData, setOrderData] = useState({
    table: '1',
    drinks: '1',
    starter: '1',
    mainCourse: '1',
    dessert: '1',
    specialNote: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create new order
    const newOrder = {
      ...orderData,
      food: {
        starter: orderData.starter || '1',
        mainCourse: orderData.mainCourse || '1',
        dessert: orderData.dessert || '1',
      },
      id: Date.now(), // Use Date.now() for a unique ID
    };

    // Add new order to the OrderData array (simulating this by calling the addOrder function)
    addOrder(newOrder);

    // Optionally reset the form after submission
    setOrderData({
      table: '1',
      drinks: '1',
      starter: '1',
      mainCourse: '1',
      dessert: '1',
      specialNote: '',
    });
  };

  return (
    <div className='AddOrderBox'>
      <div className='AddOrderText'>
        <form onSubmit={handleSubmit}>
          <div className='AddOrderHeading'>
            <h1>Add Order</h1>
          </div>
          <div>
            <button type="button" className='OrderClose' onClick={closeAddOrder}>X</button>
          </div>
          <div>
            {/* Table number */}
            <div>
              <label>Table number</label>
              <select name="table" value={orderData.table} onChange={handleChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
            </div>

            {/* Drinks */}
            <div>
              <label>Drinks/Beverages</label>
              <select name="drinks" value={orderData.drinks} onChange={handleChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
            </div>

            {/* Starters */}
            <div>
              <label>Starter</label>
              <select name="starter" value={orderData.starter} onChange={handleChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
            </div>

            {/* Main Course */}
            <div>
              <label>Main Course</label>
              <select name="mainCourse" value={orderData.mainCourse} onChange={handleChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
            </div>

            {/* Desserts */}
            <div>
              <label>Desserts</label>
              <select name="dessert" value={orderData.dessert} onChange={handleChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
            </div>

            {/* Review Content */}
            <div>
              <label className='OrdersLabel'>Food preference</label>
              <textarea
                name="specialNote"
                value={orderData.specialNote}
                onChange={handleChange}
                placeholder="Any comments or special requests?"
              ></textarea>
            </div>

            <div>
              <button className='AddOrdersBtn' type="submit">Submit Order</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

// Orders Component
function Orders() {
  const [orderList, setOrderList] = useState(OrderData); // Initialize with OrderData
  const [isAddOrderOpen, setAddOrderOpen] = useState(false); // Toggle AddOrder form
  const [isHelpOpen, setHelpOpen] = useState(false); // Toggle Help

  // Add order function that updates state
  const addOrder = (newOrder) => {
    setOrderList((prevOrders) => [...prevOrders, newOrder]);
  };

  // Function to close the Add Order form
  const closeAddOrder = () => {
    setAddOrderOpen(false);
  };

  const setHelpOpenFalse = () => {
    setHelpOpen(false);
  };

  return (
    <>
      <div className="HomesBox1">
        <h1>Orders</h1>
      </div>

      <div className="HomesBox2">
        <div className="HomesBoxe1">
          <div className="HomesBoxes1">
            <h2>🤵 Ordered</h2>
          </div>
          <div className="HomesBoxes2">
            {orderList.map((order) => (
              <div key={order.id} className="OrderBox">
                <h3 className='OrderHeading'>Table {order.table}</h3>
                <p>Drinks: {order.drinks || 'N/A'}</p>
                <p>Starters: {order.food?.starter || 'N/A'}</p>
                <p>Main Course: {order.food?.mainCourse || 'N/A'}</p>
                <p>Dessert: {order.food?.dessert || 'N/A'}</p>
                <p>Special Requests: {order.specialNote || 'N/A'}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="HomesBoxe2">
          <div className="HomesBoxes1">
            <h2>👩‍🍳 Preparing</h2>
          </div>
          <div className="HomesBoxes2">
          </div>
        </div>

        <div className="HomesBoxes1">
          <h2>👩‍💼 Served</h2>
        </div>
      </div>

      {/* Add Order Form */}
      {isAddOrderOpen && <AddOrder addOrder={addOrder} closeAddOrder={closeAddOrder} />}

      {/* Toggle Help */}
      <div className='ExtraBtnsGrid'>
        <div className='OrdersBtn1'>
          {!isHelpOpen && (
            <button className='HelpBtn' onClick={() => setHelpOpen(true)}>
              Help
            </button>
          )}
        </div>

        {isHelpOpen && <OrderHelp setHelpOpenFalse={setHelpOpenFalse} />}

        {/* Add Order Button */}
        <div className='OrdersBtn2'>
          {!isAddOrderOpen && (
            <button className='AddOrderBtn' onClick={() => setAddOrderOpen(true)}>
              Add Order
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Orders;
