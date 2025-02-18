import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./Store/Auth-Context";
import CartProvider from "./Store/CartProvider";
import { Provider } from "react-redux";
import store from "./Store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <Provider store={store}>
        <CartProvider>
          <BrowserRouter basename="/EcommerceWebsite">
            <App />
          </BrowserRouter>
        </CartProvider>
      </Provider>
    </AuthContextProvider>
  </React.StrictMode>
);
