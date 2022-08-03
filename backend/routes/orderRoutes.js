const express = require('express');
const router = express.Router();
const {
  getAllOrders,
  createOrder,
  deleteOrder,
  getCustomerOrders,
} = require('../controllers/orderController');

router.route('/').get(getAllOrders).post(createOrder);
router.route('/:customerId').get(getCustomerOrders);
router.route('/:id').delete(deleteOrder);

module.exports = router;
