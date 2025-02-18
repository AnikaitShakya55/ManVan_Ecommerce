import React, { useContext, useEffect, useReducer, useState } from 'react';
import CartContext from './CartContext';
import { AuthContext } from './Auth-Context';
import { useDispatch } from 'react-redux';
import { showNotification } from './store';

const defaultCartState = { items: [], totalPrice: 0, totalquantity: 0 };

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD-ITEM":
      const updateTotalPriceAdd = state.totalPrice + action.item.price;
      const updateTotalQuantityAdd = state.totalquantity + 1;

      const existingItemIndexAdd = state.items.findIndex(item => item.id === action.item.id);
      const existingItemAdd = state.items[existingItemIndexAdd];
      let updatedItemsAdd;
      let updatedItemAdd;
      if (existingItemAdd) {
        updatedItemAdd = { ...existingItemAdd, quantity: existingItemAdd.quantity + 1 };
        updatedItemsAdd = [...state.items];
        updatedItemsAdd[existingItemIndexAdd] = updatedItemAdd;
      } else {
        updatedItemAdd = { ...action.item, quantity: 1 };
        updatedItemsAdd = state.items.concat(updatedItemAdd);
      }
      return { ...state, items: updatedItemsAdd, totalPrice: updateTotalPriceAdd, totalquantity: updateTotalQuantityAdd };

    case "REMOVE-ITEM":
      const existingItemIndexRemove = state.items.findIndex(item => item.id === action.itemId);
      const existingItemRemove = state.items[existingItemIndexRemove];
      if (!existingItemRemove) {
        return state;
      }
      let updatedItemsRemove = [...state.items];
      if (existingItemRemove.quantity === 1) {
        updatedItemsRemove = state.items.filter(item => item.id !== action.itemId);
      } else {
        updatedItemsRemove[existingItemIndexRemove] = { ...existingItemRemove, quantity: existingItemRemove.quantity - 1 };
      }
      const updateTotalPriceRemove = state.totalPrice - existingItemRemove.price;
      const updateTotalQuantityRemove = state.totalquantity - 1;
      return { ...state, items: updatedItemsRemove, totalPrice: updateTotalPriceRemove, totalquantity: updateTotalQuantityRemove };

    case "FETCH":
      if (!action.data) {
        return state;
      }
      return {
        ...state,
        items: action.data.items || [],
        totalPrice: action.data.totalPrice || 0,
        totalquantity: action.data.totalquantity || 0
      };

    default:
      return state;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);
  const [postData, setPostData] = useState(false);
  const authCtx = useContext(AuthContext)
  const dispatch = useDispatch();
  const userEmail = authCtx.userEmail;
  const userName = userEmail && userEmail.split('@')[0];
  const fetchUrl = `https://man-van-ecommerce-website-default-rtdb.firebaseio.com/manvan/${userName}.json`;
  const isLoggedIn = authCtx.isLoggedIn

  useEffect(() => {
    if (isLoggedIn) {
      fetch(fetchUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch cart data');
          }
          return response.json();
        })
        .then((data) => {
          dispatchCart({ type: 'FETCH', data });
          dispatch(
            showNotification({
              status: 'fetched',
              title: 'Cart Data Fetched',
              message: 'Cart data has been successfully fetched.',
            })
          );
        })
        .catch((error) => {
          console.error('Error fetching cart data:', error);
        });
    }
  }, [isLoggedIn, fetchUrl,dispatch]);

  useEffect(() => {
    if (postData) {
      fetch(`${fetchUrl}`, {
        method: 'PUT',
        body: JSON.stringify({
          items: cartState.items,
          totalPrice: cartState.totalPrice,
          totalquantity: cartState.totalquantity
        }),
        headers: { 'Content-Type': 'application/json' }
      })
        .then(res => {
          setPostData(false);
          console.log(res);
          dispatch(
            showNotification({
              status: 'success',
              title: 'Cart Data Posted',
              message: 'Cart data has been successfully Posted.',
            }))
        })
        .catch(error => {
          console.error('Error updating cart data:', error);
        });
    }
  }, [postData, cartState.items, cartState.totalPrice, cartState.totalquantity, fetchUrl,dispatch]);

  const addCartItemHandler = item => {
    dispatchCart({ type: "ADD-ITEM", item: item });
    setPostData(true);
  };

  const removeCartItemHandler = itemId => {
    dispatchCart({ type: "REMOVE-ITEM", itemId: itemId });
    setPostData(true);
  };

  const value = {
    items: cartState.items,
    addItem: addCartItemHandler,
    removeItem: removeCartItemHandler,
    totalPrice: cartState.totalPrice,
    totalquantity: cartState.totalquantity
  };

  return (
    <CartContext.Provider value={value}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
