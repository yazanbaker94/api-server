'use strict';

const order = (sequelize, DataTypes) => sequelize.define('order', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  animalId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});

module.exports = order;