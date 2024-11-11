import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import React from 'react';
import Navbar from './Components/Navbar.js'
import Home from './Components/Home';
import Registration from './Pages/Registration.js';
import Food from './Pages/Food.js';
import Login from './Pages-Staff/Login.js';
import Register from './Pages-Staff/Register.js';
import Carts from './Pages/carts.js'

// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
// import Logo from './Assets/images/logo.jpeg';
// import Logo from './Pages/media/logo.jpeg';


import Orders from './Pages-Staff/Orders.js';

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
            <Route path="/registration" element={<Registration />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/food" element={<Food />} />
            <Route path='/Inventory' element={<Inventory/>} />
            <Route path='/Orders' element={<Orders/>} />
            <Route path='/Orders' element={<Menu/>} />
            <Route path='/vegs' element={< Vegetable />} />
            <Route path='/fruit' element={<Fruits/>} />
            <Route path='/Login' element={<Login/>} />
            <Route path='/Register' element={<Register/>}/>
            <Route path='/carts' element={<Carts/>} />
      {/*
      <Route path='' element={} />
      */}
          </Routes>
      </BrowserRouter>
    </div>
   
  );
}

export default App;
