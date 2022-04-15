import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { womensProducts } from './Data/WomenProducts'
import { mensProducts } from './Data/MenProducts'
import HomePage from "./Pages/HomePage";
import MensPage from "./Pages/MensPage";
import WomensPage from "./Pages/WomensPage";
import AboutPage from "./Pages/AboutPage";
import CheckoutPage from "./Pages/CheckoutPage";
import ProductPage from './Pages/ProductPage';
import SearchPage from './Pages/SearchPage'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import './Styles/App.css';

function App() {
  const [womens, setWomens] = useState(womensProducts);
  const [mens, setMens] = useState(mensProducts);
  const [cartItems, setCartItems] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);

  useEffect(() => {
  }, [cartItems]);

  const handleAdd = (newProduct) => {
    let isItemInCart = cartItems.some((item) => item.id === newProduct.id);

    if (isItemInCart) {
      let itemInCart = cartItems.find((item) => item.id === newProduct.id);
      let updatedCart = cartItems.map((item) => 
        item.id === newProduct.id 
          ? { ...itemInCart, quantity: itemInCart.quantity + 1 } 
          : item
      );

      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...newProduct, quantity: 1 }])
    }
  }

  const handleRemove = (product) => {
    let updatedCart = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCart);
  }

  const handleDecrementQuantity = (product) => {
    let itemToDecrement = cartItems.find((item) => item.id === product.id);
    if (itemToDecrement.quantity === 1) {
      handleRemove(itemToDecrement);
    } else {
      let updatedCart = cartItems.map((item) => 
        (item.id === product.id && item.quantity >= 0) 
          ? ({ ...itemToDecrement, quantity: itemToDecrement.quantity - 1 }) 
          : item
      );
  
      setCartItems(updatedCart);
    }
  }

  const handleIncrementQuantity = (product) => {
    let itemToIncrement = cartItems.find((item) => item.id === product.id);
    let updatedCart = cartItems.map((item) => 
      item.id === product.id
        ? {...itemToIncrement, quantity: itemToIncrement.quantity + 1 }
        : item
    );

    setCartItems(updatedCart);
  }

  const handleClearCart = () => {
    setCartItems([]);
  }

  return (
    <Router>
      <div className="App">
        <Navbar cartItems={cartItems} cartVisible={cartVisible} setCartVisible={setCartVisible} handleRemove={handleRemove} />
        {/* <ProductPage /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route 
            path="/mens" 
            element={<MensPage 
              mensItems={mens} 
              setMensItems={setMens}
              cartItems={cartItems} 
              handleAdd={handleAdd} 
            />} 
          />
          <Route 
            path="/womens" 
            element={<WomensPage 
              womensItems={womens} 
              setWomensItems={setWomens}
              cartItems={cartItems} 
              handleAdd={handleAdd} 
            />} 
          />
          <Route path="/about" element={<AboutPage />} />
          <Route 
            path="/checkout" 
            element={<CheckoutPage 
              cartItems={cartItems} 
              handleIncrementQuantity={handleIncrementQuantity} 
              handleDecrementQuantity={handleDecrementQuantity} 
              handleRemove={handleRemove} 
            />} 
          />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/womens/:id" element={<ProductPage products={womensProducts} handleAdd={handleAdd} />} />
          <Route path="/mens/:id" element={<ProductPage products={mensProducts} handleAdd={handleAdd} />} />
         </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
