import './App.css';
import React from 'react';
import Navbar from './Components/Navbar.js'
import Home from './Components/Home';
import Logo from './Pages/media/logo.jpeg';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
