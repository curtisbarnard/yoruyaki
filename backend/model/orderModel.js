const mongoose = require('mongoose');

const orderSchema = mongoose.Schema(
  {
    customerId: String,
    orderItems: Array,
    orderStatus: String,
    totalPrice: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', orderSchema, 'orders');
