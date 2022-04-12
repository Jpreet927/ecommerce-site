import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import HomePage from "./Pages/HomePage";
import MensPage from "./Pages/MensPage";
import WomensPage from "./Pages/WomensPage";
import AboutPage from "./Pages/AboutPage";
import CheckoutPage from "./Pages/CheckoutPage";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'
import './Styles/App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mens" element={<MensPage />} />
          <Route path="/womens" element={<WomensPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
