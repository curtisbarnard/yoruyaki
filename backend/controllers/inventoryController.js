// Get complete inventory
// GET /api/inventory
// Private
const getInventory = (req, res) => {
  res.status(200).json({ message: 'Get Inventory' });
};

// Create inventory item
// POST /api/inventory
// Private
const createInventory = (req, res) => {
  res.status(200).json({ message: 'Create Inventory' });
};

// Update inventory item
// PUT /api/inventory/:id
// Private
const updateInventory = (req, res) => {
  res.status(200).json({ message: `Update inventory item ${req.params.id}` });
};

// Delete inventory item
// DELETE /api/inventory/:id
// Private
const deleteInventory = (req, res) => {
  res.status(200).json({ message: `Delete inventory item ${req.params.id}` });
};

module.exports = {
  getInventory,
  createInventory,
  updateInventory,
  deleteInventory,
};
