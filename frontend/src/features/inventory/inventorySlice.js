import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import inventoryService from './inventoryService';

const initialState = {
  inventory: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Create new inventory item
export const createInventoryItem = createAsyncThunk(
  'inventory/create',
  async (inventoryData, thunkAPI) => {
    try {
      return await inventoryService.createInventoryItem(inventoryData);
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

// Inventory Slice
export const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createInventoryItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createInventoryItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.inventory.push(action.payload);
      })
      .addCase(createInventoryItem.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = inventorySlice.actions;
export default inventorySlice.reducer;
