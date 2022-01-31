const models = require('../models');

const customerModel = models.customerModel;

const addCustomer = async (customer) => {
  try {
    if (!customer) throw new Error('Undefined customer data passed');

    const newCustomer = new customerModel(customer);
    await models.saveModel(newCustomer);
    return { success: true };
  } catch (err) {
    console.log('DB_CREATE_CUSTOMER_ERROR', err);
    return { success: false };
  }
};

const getCustomers = async (filters = {}) => {
  try {
    const customers = await models.findModel(customerModel, filters);
    return customers;
  } catch (err) {
    console.log('DB_CUSTOMERS_FETCHING_ERROR: ', err);
    return { success: false };
  }
};

module.exports = {
  addCustomer,
  getCustomers,
};
