const mongoose = require('mongoose');
const customerModel = require('./customerModel');
const purchaseOrderModel = require('./purchaseOrderModel');
const shippingModel = require('./shippingModel');

const saveModel = async (model) => {
  try {
    if (!model) throw new Error('No/Null/Undefined Model passed');
    await model.save(model);
  } catch (err) {
    console.log('MODEL_SAVING_ERROR: \n', err);
  }
};

const findOneModel = async (model, condition) => {
  try {
    const record = await model.findOne(condition).exec();
    return record;
  } catch (err) {
    return handleError(err);
  }
};

const findModel = async (model, condition) => {
  try {
    const records = await model.find(condition).exec();
    return records;
  } catch (err) {
    return handleError(err);
  }
};

module.exports = {
  customerModel,
  purchaseOrderModel,
  shippingModel,
  saveModel,
  findOneModel,
  findModel,
};
