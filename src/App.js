import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Footer from "./components/shared/footer/Footer";
import Products from "./pages/Products/Products";
import CartItems from "./pages/Checkout/CartItems/CartItems";
import Delivery from "./pages/Checkout/ConfirmOrder/ConfirmOrder";
import Payment from "./pages/Checkout/Payment/Payment";
import Success from "./pages/Checkout/PaymentStatus/Success";
import Dashboard from "./pages/DashboardContainer/Dashboard/Dashboard";
import NavComponent from "./components/shared/navbar/NavComponent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGetMeQuery } from "./redux/features/user/userApi";
import { useDispatch } from "react-redux";
import { storeUserInRedux } from "./redux/features/user/userSlice";
import DashboardHome from "./pages/DashboardContainer/Dashboard/DashboardHome";
import MyOrders from "./pages/DashboardContainer/Dashboard/MyOrders";
import Fail from "./pages/Checkout/PaymentStatus/Fail";
import Cencel from "./pages/Checkout/PaymentStatus/Cencel";

function App() {
  const dispatch = useDispatch();
  const { data } = useGetMeQuery();

  dispatch(storeUserInRedux(data?.data));

  return (
    <>
      <NavComponent>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route
            path="/product/:id"
            element={<ProductDetails></ProductDetails>}
          ></Route>
          <Route
            path="/products/:productCategory"
            element={<Products></Products>}
          ></Route>
          <Route path="/cart-items" element={<CartItems></CartItems>}></Route>
          <Route path="/delivery" element={<Delivery></Delivery>}></Route>
          <Route path="/payment" element={<Payment></Payment>}></Route>
          <Route path="/success" element={<Success></Success>}></Route>
          <Route path="/fail" element={<Fail></Fail>}></Route>
          <Route path="/cencel" element={<Cencel></Cencel>}></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}>
            <Route index element={<DashboardHome></DashboardHome>}></Route>
            <Route
              path="/dashboard/my-orders"
              element={<MyOrders></MyOrders>}
            ></Route>
          </Route>
        </Routes>
        <Footer></Footer>
        <ToastContainer />
      </NavComponent>
    </>
  );
}

export default App;
