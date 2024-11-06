import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import React from 'react';
import Navbar from './Components/Navbar.js'
import Home from './Components/Home';
// eslint-disable-next-line no-unused-vars
import Contact from './Components/Contact';
// eslint-disable-next-line no-unused-vars
import Logo from './Assets/images/logo.jpeg';
// import Logo from './Pages/media/logo.jpeg';


import Orders from './Pages-Staff/Orders.js';
import Footer from './Components/Footer';
import Menu from './Components/Menu.js';
// import Inventory from './Pages-Staff/Inventory.js'

import Inventory from './Pages-Staff/Inventory.js'

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <Inventory /> */}
      <Menu/>
      <Orders/>
      <Contact/>
      <Footer/>
      {/* <Orders/> */}
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Inventory' element={<Inventory/>} />
            <Route path='/Orders' element={<Orders/>} />
      {/*// <Route path='' element={} />
      // <Route path='' element={} />
      // <Route path='' element={} />
      // <Route path='' element={} />
      // <Route path='' element={} />
      // <Route path='' element={} />
      // <Route path='' element={} />
      // <Route path='' element={} />
      // <Route path='' element={} />
      // <Route path='' element={} />
      // <Route path='' element={} />
      // <Route path='' element={} /> */}
          </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
