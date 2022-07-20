import axios from 'axios';

const API_URL = 'api/inventory/';

// Create new inventory item
const createInventoryItem = async (inventoryData) => {
  const response = await axios.post(API_URL, inventoryData);
  return response.data;
};

const inventoryService = {
  createInventoryItem,
};

export default inventoryService;
