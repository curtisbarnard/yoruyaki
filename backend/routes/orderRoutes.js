const express = require('express');
const router = express.Router();
const {
  getAllOrders,
  createOrder,
  deleteOrder,
} = require('../controllers/orderController');

router.route('/').get(getAllOrders).post(createOrder);
router.route('/:id').delete(deleteOrder);

module.exports = router;
