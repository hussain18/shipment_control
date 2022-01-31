const models = require('../models');

const shippingModel = models.shippingModel;

const addShipment = async (shipment) => {
  try {
    if (!shipment) throw new Error('Undefined purchase order data passed');

    const newShipment = new shippingModel(shipment);
    await models.saveModel(newShipment);
    return { success: true };
  } catch (err) {
    console.log('DB_ADD_SHIPMENT_ERROR:', err);
    return { success: false };
  }
};

const getShipments = async (filters = {}) => {
  try {
    const shipments = await models.findModel(shippingModel, filters);
    return shipments;
  } catch (err) {
    console.log('DB_SHIPMENTS_FETCHING_ERROR: ', err);
    return { success: false };
  }
};

module.exports = {
  addShipment,
  getShipments,
};
