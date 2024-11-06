import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import React from 'react';
import Navbar from './Components/Navbar.js'
import Home from './Components/Home';
// import Logo from './Pages/media/logo.jpeg';


import Orders from './Pages-Staff/Orders.js';
import Inventory from './Pages-Staff/Inventory.js'

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <Inventory /> */}
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
