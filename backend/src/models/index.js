const dotenv = require('dotenv');
dotenv.config();

const path = require('path');
const fs = require('fs');
const Sequelize = require('sequelize');
const config = require('../config/config.js');
const DataTypes = require('sequelize/lib/data-types');
const basename = path.basename(__filename);

const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  { host: config.host, dialect: 'mysql' }
);

const modelModules = fs
  .readdirSync(__dirname)
  .filter(fileName => fileName !== basename)
  .map(fileName => require('./' + fileName));

modelModules.forEach(modelModule => {
  const model = modelModule(sequelize, DataTypes);
  db[model.name] = model;
});

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
