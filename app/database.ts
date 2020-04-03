const Sequelize = require("sequelize");
const client = new Sequelize(process.env.PG_URL);

export default client;