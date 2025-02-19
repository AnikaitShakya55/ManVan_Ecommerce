import React, { useContext, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductArr from "./Components/Products on Screen/ProductArr";
import CartComponent from "./Components/CartComponent/CartComponent";
import AboutUs from "./Pages/AboutUs";
import HomePage from "./Pages/HomePage";
import Contact from "./Pages/Contact";
import ProductDetails from "./Components/Products on Screen/ProductDetails";
import Login from "./Pages/Login";
import { AuthContext } from "./Store/Auth-Context";
import Notification from "./UI/Notification";
import Footer from "./Layout/Footer/Footer";
import NavBar from "./Layout/NavBar/NavBar";
import "./App.css";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  const [cartShow, setCartShow] = useState(false);
  const authCtx = useContext(AuthContext);
  const notification = useSelector((state) => state.ui.notification);
  const location = useLocation();

  const cartShowHandler = () => setCartShow(true);
  const cartCloseHandler = () => setCartShow(false);

  return (
    <div>
      <ScrollToTop />
      <header>
        <NavBar cartShowHandler={cartShowHandler} />

        {notification && location.pathname === "/products" && (
          <Notification
            status={notification.status}
            title={notification.title}
            message={notification.message}
          />
        )}

        {authCtx.isLoggedIn && cartShow && (
          <CartComponent cartCloseHandler={cartCloseHandler} />
        )}
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/products" element={<ProductArr />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
