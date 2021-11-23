const { Delivery } = require('../models');
const createDeliveries = async (req, res) => {
    const { nome, peso, endereco, telefone } = req.body;
    const delivery = await Delivery.create({nome, peso, endereco, telefone})
    .then(delivery => res.status(201).json({
        error: false,
        data: delivery,
        message: "Delivery criado com sucesso!"
    }))
    .catch(error => res.status(400).json({
        message: "Campo(s) obrigatório(s) não informado(s)!",
        error: true,
        data: [],
        error: error
    }));
}


module.exports = createDeliveries;