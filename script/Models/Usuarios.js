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
    role:{
        type: DataTypes.STRING,
        defaultValue: 'regular',
        enum: ['regular', 'admin']
    }
},{
    sequelize,
    modelName: "Usuario" //* Este es el nombre de la tabla
});

class Producto extends Model{};
Producto.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    product: DataTypes.STRING,
    size: DataTypes.STRING,
    price: DataTypes.STRING,
    ingredients: DataTypes.STRING,
    isVegetarian: DataTypes.STRING,
},{
    sequelize,
    modelName: "Producto"
});

class Pedidos extends Model{};
Pedidos.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    order: DataTypes.STRING,
    productsBought: DataTypes.STRING,
    totalPrice: DataTypes.STRING,
    orderStatus: DataTypes.STRING    
}, {
    sequelize,
    modelName:"Pedidos"
})
module.exports = {Usuario, Producto, Pedidos}