import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import React from 'react';
import Navbar from './Components/Navbar.js'
import Home from './Components/Home';
import Food from './Pages/Food.js';
import Carts from './Pages/carts.js'
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
// import Logo from './Assets/images/logo.jpeg';
// import Logo from './Pages/media/logo.jpeg';


import Orders from './Pages-Staff/Orders.js';
import Footer from './Components/Footer';
import Menu from './Components/Menu.js';
// import Inventory from './Pages-Staff/Inventory.js'
import Vegetable from './Pages/vegetables.js'

import Inventory from './Pages-Staff/Inventory.js'
import Fruits from './Pages/Fruits.js';

function App() {
  return (
   
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path="/food" element={<Food />} />
            <Route path='/Inventory' element={<Inventory/>} />
            <Route path='/Orders' element={<Orders/>} />
            <Route path='/Orders' element={<Menu/>} />
            <Route path='/vegs' element={< Vegetable />} />
            <Route path='/fruit' element={<Fruits/>} />
            <Route path='/carts' element={<Carts/>} />

      {/*
      <Route path='' element={} />
      */}
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
   
  );
}

export default App;
