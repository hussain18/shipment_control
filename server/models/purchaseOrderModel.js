const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const purchaseOrderSchema = new Schema({
  productName: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  pricing: {
    type: String,
    required: true,
  },
  mrp: {
    type: String,
    required: true,
  },
  customerId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('purchaseOrder', purchaseOrderSchema);
