import axios from 'axios';

const API_URL = 'api/orders/';

// Create new inventory item
const createOrder = async (orderData) => {
  const response = await axios.post(API_URL, orderData);
  return response.data;
};

const orderService = {
  createOrder,
};

export default orderService;
