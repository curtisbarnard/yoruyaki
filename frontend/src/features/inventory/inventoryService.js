import axios from 'axios';

const API_URL = 'api/inventory/';

// Create new inventory item
const createInventoryItem = async (inventoryData) => {
  const response = await axios.post(API_URL, inventoryData);
  return response.data;
};

// Get all inventory
const getInventory = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const inventoryService = {
  createInventoryItem,
  getInventory,
};

export default inventoryService;
