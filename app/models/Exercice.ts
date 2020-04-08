const Sequelize = require('sequelize');
const client = require('../database');

class Exercice extends Sequelize.Model {}

// Exercice.init({
//     name: DataTypes.STRING,
//     description: DataTypes.STRING,
//     correction: DataTypes.STRING,
// }, {
//     sequelize: client,
//     tableName: "exercice",
//     // modelName: 'exercice',
//     underscored: true,
//     createdAt: "created_at",
//     updatedAt: "updated_at"
// });
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