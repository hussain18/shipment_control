const models = require('../models');

const purchaseOrderModel = models.purchaseOrderModel;

const addPurchaseOrder = async (purchaseOrder) => {
  try {
    if (!purchaseOrder) throw new Error('Undefined purchase order data passed');

    const newPurchaseOrder = new purchaseOrderModel(purchaseOrder);
    await models.saveModel(newPurchaseOrder);
    return { success: true };
  } catch (err) {
    console.log('DB_ADD_PURCHASE_ORDER_ERROR', err);
    return { success: false };
  }
};

const getPurchaseOrders = async (filters = {}) => {
  try {
    const purchaseOrders = await models.findModel(purchaseOrderModel, filters);
    return purchaseOrders;
  } catch (err) {
    console.log('DB_PURCHASE_ORDERS_FETCHING_ERROR: ', err);
    return { success: false };
  }
};

module.exports = {
  addPurchaseOrder,
  getPurchaseOrders,
};
