const {Model, DataTypes} = require('sequelize'); //*Traemos desde Sequelize el modelo de tabla.
const sequelize = require('../Models/Conexion');

sequelize.define();

class Usuario extends Model{};
Usuario.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    address: DataTypes.STRING,
},{
    sequelize,
    modelName: "Usuario" //* Este es el nombre de la tabla
})

module.exports = Usuario;