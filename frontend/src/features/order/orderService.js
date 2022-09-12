import axios from 'axios';

const API_URL = 'api/orders/';

// Create new inventory item
const createOrder = async (orderData) => {
  const response = await axios.post(API_URL, orderData);
  return response.data;
};

// Get open customer orders
const getOpenOrders = async (customerID) => {
  const response = await axios.get(API_URL + 'open/' + customerID);
  return response.data;
};

const orderService = {
  createOrder,
  getOpenOrders,
};

export default orderService;
