import './App.css';
import React from 'react';
import Navbar from './Components/Navbar.js'
import Home from './Components/Home';
// eslint-disable-next-line no-unused-vars
import Contact from './Components/Contact';
// eslint-disable-next-line no-unused-vars
import Logo from './Assets/images/logo.jpeg';
import Orders from './Pages-Staff/Orders.js';
import Footer from './Components/Footer';
import Menu from './Components/Menu.js';
// import Inventory from './Pages-Staff/Inventory.js'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      {/* <Inventory /> */}
      <Menu/>
      <Orders/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
