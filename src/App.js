import React, { useContext, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProductArr from "./Components/Products on Screen/ProductArr";
import CartComponent from "./Components/CartComponent/CartComponent";
import AboutUs from "./Pages/AboutUs";
import HomePage from "./Pages/HomePage";
import Contact from "./Pages/Contact";
import ProductDetails from "./Components/Products on Screen/ProductDetails";
import Login from "./Pages/Login";
import { AuthContext } from "./Store/Auth-Context";
import Footer from "./Layout/Footer/Footer";
import NavBar from "./Layout/NavBar/NavBar";
import "./App.css";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  const [cartShow, setCartShow] = useState(false);
  const authCtx = useContext(AuthContext);

  const cartShowHandler = () => setCartShow(true);
  const cartCloseHandler = () => setCartShow(false);

  return (
    <div>
      <ScrollToTop />
      <header>
        <NavBar cartShowHandler={cartShowHandler} />

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
