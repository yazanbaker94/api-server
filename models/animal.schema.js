'use strict';

const animal = (sequelize, DataTypes) => sequelize.define('animal', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = animal;