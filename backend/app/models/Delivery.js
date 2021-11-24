'use strict';
module.exports = (sequelize, DataTypes) => {
  const Delivery = sequelize.define('Delivery', {
    nome: DataTypes.STRING,
    peso: DataTypes.FLOAT,
    endereco: DataTypes.STRING,
    telefone: DataTypes.STRING,
  }, {});
  Delivery.associate = function(models) {
  };
  return Delivery;
};
