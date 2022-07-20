import axios from 'axios';

const API_URL = '/api/customers';

// Register User
const register = async (customerData) => {
  const response = await axios.post(API_URL, customerData);

  if (response.data) {
    localStorage.setItem('customer', JSON.stringify(response.data));
  }

  return response.data;
};

const authService = {
  register,
};

export default authService;
