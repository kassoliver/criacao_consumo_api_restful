const { Delivery } = require('../models');

const getAllDeliveries = async (req, res) => {
    const delivery = await Delivery.findAll({})
    .then(delivery => res.json({
        error: false,
        data: delivery
    }))
    .catch(error => res.status(400).json({
        error: true,
        data: [],
        error: error
    }))
};


module.exports = getAllDeliveries;