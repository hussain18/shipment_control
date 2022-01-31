const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shippingSchema = new Schema({
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  pinCode: {
    type: String,
    required: true,
  },
  purchaseOrderId: {
    type: String,
    required: true,
  },
  customerId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('shipping', shippingSchema);
