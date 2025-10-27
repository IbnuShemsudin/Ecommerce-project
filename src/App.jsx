import axios from 'axios';
import { Routes, Route } from 'react-router';
import { useState, useEffect} from 'react';
import { HomePage } from './Pages/Homepage';
import { CheckoutPage } from './Pages/CheckOutPage';
import { OrdersPage } from './Pages/OrdersPage';
import './App.css'

function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios.get('/api/cart-items')
      .then((response) => {
        setCart(response.data);
      })
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="orders" element={<OrdersPage cart={cart} />} />
    </Routes>
  )
}

export default App