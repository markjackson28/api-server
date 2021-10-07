'use strict';

require('dotenv').config();

const DATABASE_URL = process.env.NODE_ENV === 'test' 
? 'sqlite:memory' 
: process.env.NODE_ENV === 'production'
// had to add this for heroku could use db
? process.env.HEROKU_POSTGRESQL_MAUVE_URL
: process.env.DATABASE_URL;

// Importing Schema's and Collections
const Collection = require('./lib/collection');
const petSchema = require('./pet.schema');
const apexLegendSchema = require('./apexLegend.schema');

const { Sequelize, DataTypes } = require('sequelize');
let sequelizeOptions = process.env.NODE_ENV === 'production'
  ? {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    }
  }
  : {};
  
// This turns the schema's into sequelize models  
const sequelize = new Sequelize(DATABASE_URL, sequelizeOptions);
const petModel = petSchema(sequelize, DataTypes);
const apexLegendModel = apexLegendSchema(sequelize, DataTypes);

// This turns models into Collections
const petCollection = new Collection(petModel);
const apexLegendCollection = new Collection(apexLegendModel);

module.exports = {
  db: sequelize,
  Pet: petCollection,
  ApexLegend: apexLegendCollection
};

