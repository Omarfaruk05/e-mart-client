import './App.css';
import NavComponent from './pages/NavComponent/NavComponent';
import HomePage from './pages/HomePage/HomePage';
import Nav from './pages/Nav/Nav';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Footer from "./pages/Footer/Footer"
import Products from './pages/Products/Products';
import CartItems from './pages/Checkout/CartItems/CartItems';
import Delivery from './pages/Checkout/ConfirmOrder/ConfirmOrder';
import Payment from './pages/Checkout/Payment/Payment';
import Receipt from './pages/Checkout/Receipt/Receipt';

function App() {
  return (
    <>
    <NavComponent>
      <Nav></Nav>
      <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/home' element={<HomePage></HomePage>}></Route>
          <Route path='/details' element={<ProductDetails></ProductDetails>}></Route>
          <Route path='/products' element={<Products></Products>}></Route>
          <Route path='/cart-items' element={<CartItems></CartItems>}></Route>
          <Route path='/delivery' element={<Delivery></Delivery>}></Route>
          <Route path='/payment' element={<Payment></Payment>}></Route>
          <Route path='/receipt' element={<Receipt></Receipt>}></Route>
      </Routes>
      <Footer></Footer>
    </NavComponent>
    </>
  );
}

export default App;
