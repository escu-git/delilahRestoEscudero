const {Model, DataTypes} = require('sequelize'); //*Traemos desde Sequelize el modelo de tabla.
const sequelize = require('./Conexion');


class Pedidos extends Model{};
Pedidos.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    customer: DataTypes.STRING,
    productsBought: DataTypes.STRING,
    totalPrice: DataTypes.STRING,
    orderStatus:{
        type: DataTypes.STRING,
        defaultValue: 'ordered',
        enum: ['ordered', 'prepared', 'delivered', 'received', 'canceled']
    }
},{
    sequelize,
    modelName:"Pedidos"
})

module.exports=Pedidos;