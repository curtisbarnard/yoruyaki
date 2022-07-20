import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Get user from localStorage
const customer = JSON.parse(localStorage.getItem('customer'));

const initialState = {
  customer: customer ? customer : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = '';
    },
  },
  extraReducers: () => {},
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
