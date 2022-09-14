import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import orderService from './orderService';

const initialState = {
  order: [],
  openOrders: [],
  completedOrders: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Submit a new order (Create/POST)
export const createOrder = createAsyncThunk('orders/create', async (orderData, thunkAPI) => {
  try {
    return await orderService.createOrder(orderData);
  } catch (error) {
    // Checking in multiple places for error
    const message =
      (error.response && error.response.date && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// Get customers open orders (GET)
export const getOpenOrders = createAsyncThunk('orders/open/get', async (customerID, thunkAPI) => {
  try {
    return await orderService.getOpenOrders(customerID);
  } catch (error) {
    // Checking in multiple places for error
    const message =
      (error.response && error.response.date && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// Get all orders (GET)
export const getAllOrders = createAsyncThunk('orders/get', async (thunkAPI) => {
  try {
    return await orderService.getAllOrders();
  } catch (error) {
    // Checking in multiple places for error
    const message =
      (error.response && error.response.date && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// Mark order complete (PUT)
export const markOrderComplete = createAsyncThunk(
  'orders/completed/put',
  async (orderId, thunkAPI) => {
    try {
      return await orderService.markOrderComplete(orderId);
    } catch (error) {
      // Checking in multiple places for error
      const message =
        (error.response && error.response.date && error.response.data.message) ||
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
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = '';
    },
    addItem: (state, action) => {
      state.order.push(action.payload);
    },
    removeItem: (state, action) => {
      state.order = state.order.filter((item) => item.itemName !== action.payload.itemName);
    },
    plusOne: (state, action) => {
      state.order = state.order.map((item) => {
        if (item.itemName === action.payload.itemName) {
          const newQty = item.qty + 1;
          return {
            itemName: item.itemName,
            qty: newQty,
            price: item.price,
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
            price: item.price,
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
      })
      .addCase(getOpenOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOpenOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.openOrders = action.payload;
      })
      .addCase(getOpenOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getAllOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // Set open orders by filtering all returned orders. Then set completed orders by filtering all returned orders. Probably not efficient to do this client side.
        const open = action.payload.filter(
          (order) => order.orderStatus === 'open' || order.orderStatus === 'in progress'
        );
        state.openOrders = open;

        const completed = action.payload.filter((order) => order.orderStatus === 'completed');
        state.completedOrders = completed;
      })
      .addCase(getAllOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(markOrderComplete.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(markOrderComplete.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.openOrders = state.openOrders.filter((order) => order._id !== action.payload._id);
      })
      .addCase(markOrderComplete.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset, addItem, removeItem, plusOne, minusOne } = orderSlice.actions;
export default orderSlice.reducer;
