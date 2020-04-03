import {Sequelize, Model, DataTypes} from "sequelize";
import client from "../database";

class Exercice extends Model {}

Exercice.init({
    name: DataTypes.STRING(255),
    description: DataTypes.TEXT,
    correction: DataTypes.TEXT,
}, {
    sequelize: client,
    tableName: "exercice",
    modelName: 'exercice',
    underscored: true
    // createdAt: "created_at",
    // updatedAt: "updated_at"
});

export default Exercice;