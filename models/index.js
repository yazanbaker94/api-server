'use strict';

require('dotenv').config();
const POSTGRES_URI = 'postgres://localhost:5432/yazanbakertwo';
const { Sequelize, DataTypes } = require('sequelize');

const Collection = require('./lib/collection.js');
const animalSchema = require('./animal.schema.js');
const orderSchema = require('./order.schema.js');

let sequelize = new Sequelize(POSTGRES_URI);

const animalModel = animalSchema(sequelize, DataTypes);
const orderModel = orderSchema(sequelize, DataTypes);

animalModel.hasMany(orderModel, { foreignKey: 'animalId', sourceKey: 'id'});
orderModel.belongsTo(animalModel, { foreignKey: 'animalId', targetKey: 'id'});


//export Collections 
const animalCollection = new Collection(animalModel);
const orderCollection = new Collection(orderModel);


module.exports = {
  db: sequelize,
  animalCollection: animalCollection,
  orderCollection: orderCollection
}