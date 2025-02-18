import React, { useContext, useState, useEffect } from "react";
import ProductArr from "./Components/Products on Screen/ProductArr";
import CartComponent from "./Components/CartComponent/CartComponent";
import { Route } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import HomePage from "./Pages/HomePage";
import Contact from "./Pages/Contact";
import ProductDetails from "./Components/Products on Screen/ProductDetails";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Login from "./Pages/Login";
import { AuthContext } from "./Store/Auth-Context";
import Notification from "./UI/Notification";
import { useSelector } from "react-redux";
import Footer from "./Layout/Footer/Footer";
import NavBar from "./Layout/NavBar/NavBar";
import { useLocation } from "react-router-dom";
import "./App.css";

function App() {
  const [cartShow, setCartShow] = useState(false);
  const authCtx = useContext(AuthContext);
  const notification = useSelector((state) => state.ui.notification);
  const location = useLocation();

  const cartShowHandler = () => {
    setCartShow(true);
  };

  const cartCloseHandler = () => {
    setCartShow(false);
  };

  useEffect(() => {
    // Scroll to the top of the page whenever the route changes
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <header>
        <NavBar cartShowHandler={cartShowHandler} />

        {notification && location.pathname === "/products" && (
          <Notification
            status={notification.status}
            title={notification.title}
            message={notification.message}
          />
        )}

        {authCtx.isLoggedIn && (
          <>
            {" "}
            {cartShow && (
              <CartComponent cartCloseHandler={cartCloseHandler} />
            )}{" "}
          </>
        )}
      </header>

      <main>
        <Route path="/">
          {" "}
          <Redirect to="/home" />{" "}
        </Route>
        <Route path="/home" exact>
          {" "}
          <HomePage />{" "}
        </Route>
        <Route path="/products" exact>
          <ProductArr />
        </Route>
        <Route path="/products/:productId" exact>
          {" "}
          <ProductDetails />{" "}
        </Route>

        <Route path="/about">
          {" "}
          <AboutUs />{" "}
        </Route>
        <Route path="/contact">
          {" "}
          <Contact />{" "}
        </Route>
        <Route path="/login">
          {" "}
          <Login />{" "}
        </Route>
      </main>

      <Footer />
    </div>
  );
}

export default App;
