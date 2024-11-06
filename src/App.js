import './App.css';
import React from 'react';
import Navbar from './Components/Navbar.js'
import Home from './Components/Home';
// import Logo from './Pages/media/logo.jpeg';


import Orders from './Pages-Staff/Orders.js';
// import Inventory from './Pages-Staff/Inventory.js'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      {/* <Inventory /> */}
      <Orders/>
    </div>
  );
}

export default App;
