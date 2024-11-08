import React, { useState } from 'react';
import { OrderData } from './TempData'; // This would be a file containing the initial OrderData
import '../Pages-Staff-CSS/Orders.css'

function OrderHelp(){
    const [isOrdersOpen, setOrdersOpen] = useState(false);

    const setOrdersOpenFalse = () =>{
        setOrdersOpen(false)
    }
    const setOrdersOpenTrue = () =>{
        setOrdersOpen(true)
    }
    return(
        <>
        {isOrdersOpen ? (
        <div className='OrdersHelp'>
            <div className='OrdersHeading'>
                <h3>
                    Welcome
                </h3>
                <button onClick={setOrdersOpenTrue}>
                    Close
                </button>
            </div>
        </div>):(
        <button onClick={setOrdersOpenFalse}>
            <h3> Help </h3>
        </button>
        )}
        </>
    )
}

function AddOrder({ addOrder }) {
  const [orderData, setOrderData] = useState({
    table: '1',
    drinks: '1',
    starter: '1',
    mainCourse: '1',
    dessert: '1',
    ReviewContent: '1',
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
      id: OrderData.length + 1, // Incremental ID (you can generate this differently)
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
            {/* Table number */}
            <div OrdersLabel>
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
            <div OrdersLabel>
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
            <div OrdersLabel>
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
            <div OrdersLabel>
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
            <div OrdersLabel>
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
              <button type="submit">Submit Order</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

// Orders Component
function Orders() {
  const [orderList, setOrderList] = useState(OrderData); // Store orders in state

  // Add order function that updates state
  const addOrder = (newOrder) => {
    //appends the new order to the previous orders
    setOrderList((prevOrders) => [prevOrders, newOrder]);
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
                {/* Render the orders in the second column */}
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

            <div className="HomesBoxe3">
                <h2>👩‍💼 Served</h2>
            </div>
        </div>
        {/* Add Order Form */}
        <button onClick={<AddOrder addOrder={addOrder} />}>
                Add Order
        </button>
        <button onClick={<OrderHelp/>}>
                Help
        </button>
            
    </>
  );
}

export default Orders;