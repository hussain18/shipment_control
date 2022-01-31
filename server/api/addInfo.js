const express = require('express');
const router = express.Router();
const db = require('../db');

// API functions
const addCustomer = async (req, res) => {
  try {
    const responseMsg = await db.customer.addCustomer(req.body);

    return res.json(responseMsg);
  } catch (err) {
    console.log('API_ADD_CUSTOMER_ERROR:', err);
    res.sendStatus(500);
  }
};

const addPurchaseOrder = async (req, res) => {
  try {
    if (req.body.pricing > req.body.mrp)
      return res
        .status(403)
        .json({ success: false, message: "Pricing can't be greater than MRP" });

    const responseMsg = await db.purchaseOrder.addPurchaseOrder(req.body);
    return res.json(responseMsg);
  } catch (err) {
    console.log('API_ADD_PURCHASE_MODEL_ERROR:', err);
    res.sendStatus(500);
  }
};

const addShippingDetails = async (req, res) => {
  try {
    const responseMsg = await db.shipment.addShipment(req.body);
    return res.json(responseMsg);
  } catch (err) {
    console.log('API_ADD_SHIPMENT_ERROR:', err);
    res.sendStatus(500);
  }
};

// Routers
router.post('/add-customer', addCustomer);
router.post('/add-purchase-order', addPurchaseOrder);
router.post('/add-shipping-details', addShippingDetails);

module.exports = router;
