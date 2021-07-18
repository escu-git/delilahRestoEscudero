const {Model, DataTypes} = require('sequelize'); //*Traemos desde Sequelize el modelo de tabla.
const sequelize = require('./Conexion');

sequelize.define();

class Usuario extends Model{};
Usuario.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user: DataTypes.STRING,
    name: {type: DataTypes.STRING, allowNull:false},
    surname: {type: DataTypes.STRING, allowNull:false},
    email: {type: DataTypes.STRING, allowNull:false},
    phone: {type: DataTypes.STRING, allowNull:false},
    address: {type: DataTypes.STRING, allowNull:false},
    password: {type: DataTypes.STRING, allowNull:false},
    admin:{
        type: DataTypes.BOOLEAN,
        allowNull:true,
        defaultValue: false,
    }
},{
    sequelize,
    modelName: "Usuario" //* Este es el nombre de la tabla
});


module.exports = Usuario