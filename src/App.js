import './App.css';
import Navbar from './Components/Navbar.js'
import Orders from './Pages-Staff/Orders.js';
// import Inventory from './Pages-Staff/Inventory.js'


function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Inventory /> */}
      <Orders/>
    </div>
  );
}

export default App;
