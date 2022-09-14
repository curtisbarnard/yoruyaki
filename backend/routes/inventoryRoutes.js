const express = require('express');
const router = express.Router();
const {
  getInventory,
  createInventory,
  updateInventory,
  depleteInventory,
  deleteInventory,
} = require('../controllers/inventoryController');
const { protect } = require('../middleware/authmiddleware');

router.route('/').get(getInventory).post(createInventory);
router.route('/:id').put(updateInventory).delete(deleteInventory);
router.route('/deplete/:id').put(depleteInventory);

module.exports = router;
