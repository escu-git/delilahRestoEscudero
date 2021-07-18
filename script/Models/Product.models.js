const {Model, DataTypes} = require('sequelize'); //*Traemos desde Sequelize el modelo de tabla.
const sequelize = require('./Conexion');


class Producto extends Model{};
Producto.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    product: {type:DataTypes.STRING, allowNull:false},
    size:{
        type: DataTypes.STRING,
        allowNull:true,
        defaultValue: 'normal',
        enum: ['small', 'normal', 'big', 'XL']
    },
    price: {type:DataTypes.STRING, allowNull:false},
    ingredients: {type:DataTypes.STRING, allowNull:false},
    isVegetarian: {type:DataTypes.BOOLEAN, allowNull:true,defaultValue:false},
    description:{type:DataTypes.STRING, allowNull:false}
},{
    sequelize,
    modelName: "Producto"
});

module.exports=Producto;