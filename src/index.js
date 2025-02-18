import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import AuthContextProvider from "./Store/Auth-Context";
import CartProvider from "./Store/CartProvider";
import store from "./Store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <Provider store={store}>
          <CartProvider>
            <App />
          </CartProvider>
        </Provider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
