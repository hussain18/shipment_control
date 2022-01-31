const express = require('express');
const router = express.Router();
const db = require('../db');

// API functions
const getCustomerWithCityFilter = async (req, res) => {
  try {
    const customers = await db.customer.getCustomers({ city: req.params.city });

    return res.json(customers);
  } catch (err) {
    console.log('API_GET_CUSTOMER_WITH_CITY_FILTER_ERROR:', err);
    res.sendStatus(500);
  }
};

const getCustomersWithPurchaseOrders = async (req, res) => {
  try {
    const customers = await db.customer.getCustomers();

    const customersWithPurchaseOrders = new Array();

    await Promise.all(
      customers.map(async (customer) => {
        let currentCustomer = new Object();
        const purchaseOrders = await db.purchaseOrder.getPurchaseOrders({
          customerId: customer._id,
        });

        currentCustomer = {
          _id: customer._id,
          customerName: customer.customerName,
          email: customer.email,
          mobileNo: customer.mobileNo,
          city: customer.city,
          purchaseOrder: purchaseOrders,
        };
        customersWithPurchaseOrders.push(currentCustomer);
      })
    );

    return res.json(customersWithPurchaseOrders);
  } catch (err) {
    console.log('API_GET_CUSTOMER_WITH_PURCHASE_ORDER_ERROR:', err);
    res.sendStatus(500);
  }
};

const getCustomersWithOrdersAndShipment = async (req, res) => {
  try {
    const customers = await db.customer.getCustomers();

    const customersWithPurchaseOrders = new Array();

    await Promise.all(
      customers.map(async (customer) => {
        let currentCustomer = new Object();
        let purchaseOrdersWithShipmentDetails = new Array();
        const purchaseOrders = await db.purchaseOrder.getPurchaseOrders({
          customerId: customer._id,
        });

        // Getting shipment details of each purchase order
        await Promise.all(
          purchaseOrders.map(async (purchaseOrder) => {
            let currentPurchaseOrder = new Object();

            const shipmentDetails = await db.shipment.getShipments({
              customerId: customer._id,
              purchaseOrderId: purchaseOrder._id,
            });

            currentPurchaseOrder = {
              _id: purchaseOrder._id,
              productName: purchaseOrder.productName,
              quantity: purchaseOrder.quantity,
              pricing: purchaseOrder.pricing,
              mrp: purchaseOrder.mrp,
              customerId: purchaseOrder.customer,
              shipmentDetail: shipmentDetails,
            };
            purchaseOrdersWithShipmentDetails.push(currentPurchaseOrder);
          })
        );

        currentCustomer = {
          _id: customer._id,
          customerName: customer.customerName,
          email: customer.email,
          mobileNo: customer.mobileNo,
          city: customer.city,
          purchaseOrder: purchaseOrdersWithShipmentDetails,
        };
        customersWithPurchaseOrders.push(currentCustomer);
      })
    );

    return res.json(customersWithPurchaseOrders);
  } catch (err) {
    console.log('API_GET_CUSTOMER_WITH_PURCHASE_ORDER_ERROR:', err);
    res.sendStatus(500);
  }
};

// Routers
router.get('/get-customers/:city', getCustomerWithCityFilter);
router.get(
  '/get-customer-with-purchase-orders',
  getCustomersWithPurchaseOrders
);
router.get(
  '/get-customer-with-orders-and-shipment',
  getCustomersWithOrdersAndShipment
);

// // Helper function
// const getUser

module.exports = router;
