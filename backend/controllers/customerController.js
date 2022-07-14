const asyncHandler = require('express-async-handler');
const Customer = require('../model/customerModel');

// Create new customer profile
// POST /api/customers
// Public
const createCustomer = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'create customer' });
});

// Authenticate Customer
// POST /api/customers/login
// Public
const loginCustomer = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'login customer' });
});

// Get Customer Data
// GET /api/customers/me
// Public
const getCustomer = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'get customer info' });
});

module.exports = {
  createCustomer,
  loginCustomer,
  getCustomer,
};
