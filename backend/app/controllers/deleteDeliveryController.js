const { Delivery } = require('../models');

const deleteDeliveries = async (req, res) => {
    const delivery_id = req.params.id;
    const delivery = await Delivery.findByPk(delivery_id);
    if (delivery === null) return res.status(404).json({ message: 'Não foi encontrado nenhum delivery com esse ID.' });
    await Delivery.destroy({
        where: {
            id : delivery.id
        } 
    })
    .then(status => res.status(201).json({
        error: false,
        message: 'Delivery deletado.'
    }))
    .catch(error => res.json.status(400).json({
        error: true,
        error: error
    }))
};


module.exports = deleteDeliveries;