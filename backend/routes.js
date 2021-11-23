const express = require('express');
const getAllDeliveries = require('./app/controllers/listDeliveryController');
const createDelivery = require('./app/controllers/addDeliveryController');
const deleteDelivery = require('./app/controllers/deleteDeliveryController');

const router = new express.Router();

router.get('/GET/deliveries', getAllDeliveries);

router.post('/POST/deliveries', createDelivery);

router.delete('/DELETE/deliveries/:id', deleteDelivery);

module.exports = router;