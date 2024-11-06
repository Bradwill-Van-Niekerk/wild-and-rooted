import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar.js'
import Inventory from './Pages-Staff/Inventory.js'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/inventory' element={Inventory} />
      {/* //   <Route path='/' element={} />
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
      // <Route path='' element={} />
      // <Route path='' element={} />
      // <Route path='' element={} />
      // <Route path='' element={} /> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
