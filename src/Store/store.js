import { configureStore, createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: { cartIsVisible: false, notification: null },
    reducers: {
      toggle(state) {
        state.cartIsVisible = !state.cartIsVisible;
      },
      showNotification(state, action) {
        state.notification = {
          status: action.payload.status,
          title: action.payload.title,
          message: action.payload.message,
        };
      },
    },
  });
  
  export const { toggle, showNotification } = uiSlice.actions;


const store = configureStore({
    reducer: { 
      ui: uiSlice.reducer,
     
    },
  });

 export default store; 