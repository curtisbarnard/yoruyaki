import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import inventoryReducer from '../features/inventory/inventorySlice';
import orderReducer from '../features/order/orderSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    inventory: inventoryReducer,
    order: orderReducer,
  },
});
