const asyncHandler = require('express-async-handler');
const Order = require('../model/orderModel');

// Get all orders
// GET /api/orders
// Public
const getAllOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find();
  res.status(200).json(orders);
});

// Create order
// POST /api/orders
// Public
const createOrder = asyncHandler(async (req, res) => {
  // error handling for missing body data
  if (
    !req.body.customerId ||
    !req.body.orderItems ||
    !req.body.orderStatus ||
    !req.body.totalPrice
  ) {
    res.status(400);
    throw new Error(
      'Please make sure order contains customer ID, order items, order status and total price'
    );
  }

  const order = await Order.create({
    customerId: req.body.customerId,
    orderItems: req.body.orderItems,
    orderStatus: req.body.orderStatus,
    totalPrice: req.body.totalPrice,
  });

  res.status(200).json(order);
});

// Get customer orders
// GET /api/orders/:customerId
// Public
const getCustomerOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ customerId: req.params.customerId });

  if (!orders) {
    res.status(400);
    throw new Error('No orders not found');
  }

  res.status(200).json(orders);
});

// Get open customer orders
// GET /api/orders/open/:customerId
// Public
const getOpenCustomerOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({
    customerId: req.params.customerId,
    orderStatus: 'open',
  });

  if (!orders) {
    res.status(400);
    throw new Error('No orders not found');
  }

  res.status(200).json(orders);
});

// Delete order
// DELETE /api/orders/:id
// Public
const deleteOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    res.status(400);
    throw new Error('Order not found');
  }

  await order.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getAllOrders,
  createOrder,
  getCustomerOrders,
  getOpenCustomerOrders,
  deleteOrder,
};
