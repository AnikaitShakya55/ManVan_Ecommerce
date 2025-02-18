import React from 'react';

const CartContext = React.createContext({
    items: [],
    totalPrice: 0,
    totalquantity: 0,
    addItem: (item) => {},
    RemoveItem: (item) => {}
});

export default CartContext;
