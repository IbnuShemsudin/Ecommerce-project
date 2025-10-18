import { Routes, Route } from 'react-router';
import { HomePage } from './Pages/Homepage';
import { CheckOutPage } from './Pages/CheckOutPage';
import { OrdersPage } from './Pages/OrdersPage';
import './App.css'

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<CheckOutPage />} />
      <Route path="orders" element={<OrdersPage />} />
    </Routes>
  )
}

export default App