import './App.css';
import Cart from './Cart';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import Navbar from './Navbar';
import Caurosel from './Caurosel';
import Cards from './Cards';
import React from 'react';
import data from './Data';

function App() {

  const [cartData, setCartData] = React.useState([])


  const handleCartData = (product) => {
    console.log("Hello")
    console.log(product)
    // setCartData([...cartData, product])
    setCartData((cartData) => [...cartData, { data: product, quantity: 1 }]);
    // setCartData((cartData) => [...cartData, { data: product, quantity: 1 }]);
  }

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Caurosel />
        <Routes>
          <Route path="/" element={<Cards data={data} handleCartData={handleCartData} />} />
          <Route path="/cart" element={<Cart data={cartData} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
