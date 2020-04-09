const Sequelize = require('sequelize');
const client = require('../database');

class Exercice extends Sequelize.Model {}

Exercice.init({
    name: Sequelize.STRING,
    description: Sequelize.STRING,
    correction: Sequelize.STRING,
  },{
    sequelize: client,
    tableName: "exercice",
    underscored: true
  });


module.exports = Exercice;