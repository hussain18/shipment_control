const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  customerName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobileNo: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('customer', shippingSchema);
