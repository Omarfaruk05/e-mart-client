import './App.css';
import NavComponent from './pages/NavComponent/NavComponent';
import HomePage from './pages/HomePage/HomePage';
import Nav from './pages/Nav/Nav';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Footer from "./pages/Footer/Footer"

function App() {
  return (
    <>
    <NavComponent>
      <Nav></Nav>
      <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/home' element={<HomePage></HomePage>}></Route>
          <Route path='/details' element={<ProductDetails></ProductDetails>}></Route>
      </Routes>
      <Footer></Footer>
    </NavComponent>
    </>
  );
}

export default App;
