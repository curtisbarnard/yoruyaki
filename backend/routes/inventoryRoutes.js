const express = require('express');
const router = express.Router();
const {
  getInventory,
  createInventory,
  updateInventory,
  deleteInventory,
} = require('../controllers/inventoryController');
const { protect } = require('../middleware/authmiddleware');

router.route('/').get(getInventory).post(protect, createInventory);
router
  .route('/:id')
  .put(protect, updateInventory)
  .delete(protect, deleteInventory);

module.exports = router;
