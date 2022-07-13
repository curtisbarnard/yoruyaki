const asyncHandler = require('express-async-handler');

// Get complete inventory
// GET /api/inventory
// Private
const getInventory = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get Inventory' });
});

// Create inventory item
// POST /api/inventory
// Private
const createInventory = asyncHandler(async (req, res) => {
  // error handling for missing body data
  if (!req.body.test) {
    res.status(400);
    throw new Error('Please add a test field');
  }

  res.status(200).json({ message: 'Create Inventory' });
});

// Update inventory item
// PUT /api/inventory/:id
// Private
const updateInventory = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update inventory item ${req.params.id}` });
});

// Delete inventory item
// DELETE /api/inventory/:id
// Private
const deleteInventory = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete inventory item ${req.params.id}` });
});

module.exports = {
  getInventory,
  createInventory,
  updateInventory,
  deleteInventory,
};
