const express = require('express');
const router = express.Router();
const {
  createCustomer,
  loginCustomer,
  getCustomer,
} = require('../controllers/customerController');

router.post('/', createCustomer);
router.post('/login', loginCustomer);
router.get('/me', getCustomer);

module.exports = router;
