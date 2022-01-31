const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const purchaseOrderSchema = new Schema({
  productName: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  pricing: {
    type: Number,
    required: true,
  },
  mrp: {
    type: Number,
    required: true,
  },
  customerId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('purchaseOrder', purchaseOrderSchema);
