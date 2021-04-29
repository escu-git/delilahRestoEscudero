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
    user: DataTypes.STRING,
    completeName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    password: DataTypes.STRING,
},{
    sequelize,
    modelName: "Usuario" //* Este es el nombre de la tabla
})

module.exports = Usuario;