import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import orderService from './orderService';

const initialState = {
  order: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Submit a new order (Create/POST)
export const createOrder = createAsyncThunk(
  'orders/create',
  async (orderData, thunkAPI) => {
    try {
      return await orderService.createOrder(orderData);
    } catch (error) {
      // Checking in multiple places for error
      const message =
        (error.response &&
          error.response.date &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Order Slice
export const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    reset: (state) => initialState,
    addItem: (state, action) => {
      state.order.push(action.payload);
    },
    removeItem: (state, action) => {
      state.order = state.order.filter(
        (item) => item.itemName !== action.payload
      );
    },
    plusOne: (state, action) => {
      state.order = state.order.map((item) => {
        if (item.itemName === action.payload.itemName) {
          const newQty = item.qty + 1;
          return {
            itemName: item.itemName,
            qty: newQty,
          };
        }
        return item;
      });
    },
    minusOne: (state, action) => {
      state.order = state.order.map((item) => {
        if (item.itemName === action.payload.itemName) {
          const newQty = item.qty - 1;
          return {
            itemName: item.itemName,
            qty: newQty,
          };
        }
        return item;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.order = [];
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset, addItem, removeItem, plusOne, minusOne } =
  orderSlice.actions;
export default orderSlice.reducer;