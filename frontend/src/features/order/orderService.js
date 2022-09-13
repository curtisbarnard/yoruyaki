import axios from 'axios';

const API_URL = 'api/orders/';

// Create new inventory item
const createOrder = async (orderData) => {
  const response = await axios.post(API_URL, orderData);
  return response.data;
};

// Get All Orders
const getAllOrders = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Get open customer orders
const getOpenOrders = async (customerID) => {
  const response = await axios.get(API_URL + 'open/' + customerID);
  return response.data;
};

// Mark order Complete
const markOrderComplete = async (orderID) => {
  const response = await axios.put(API_URL + 'completed/' + orderID);
  console.log(response.data);
  return response.data;
};

const orderService = {
  createOrder,
  getAllOrders,
  getOpenOrders,
  markOrderComplete,
};

export default orderService;
