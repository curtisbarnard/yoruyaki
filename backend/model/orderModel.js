const mongoose = require('mongoose');

const orderSchema = mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Customer',
    },
    orderItems: {
      type: Array,
      required: true,
    },
    orderStatus: {
      type: String,
      required: true,
      default: 'open',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Order', orderSchema);
