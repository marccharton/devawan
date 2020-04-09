const Sequelize = require('sequelize');
const client = require('../database');

class User extends Sequelize.Model {

  getFullName() {
    return this.firstname + ' ' + this.lastname;
  };

};

User.init({
  email: Sequelize.STRING,
  role: Sequelize.STRING,
  password: Sequelize.STRING,
  firstname: Sequelize.STRING,
  lastname: Sequelize.STRING,
  status: Sequelize.INTEGER
}, {
  sequelize: client,
  tableName: "app_user",
  underscored: true,
});


module.exports = User;