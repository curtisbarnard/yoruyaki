const express = require('express');
const router = express.Router();
const {
  getAllOrders,
  createOrder,
  deleteOrder,
  getCustomerOrders,
  getOpenCustomerOrders,
  markOrderComplete,
} = require('../controllers/orderController');

router.route('/').get(getAllOrders).post(createOrder);
router.route('/:customerId').get(getCustomerOrders);
router.route('/open/:customerId').get(getOpenCustomerOrders);
router.route('/completed/:orderId').put(markOrderComplete);
router.route('/:id').delete(deleteOrder);

module.exports = router;
