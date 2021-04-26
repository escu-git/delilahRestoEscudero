const {Sequelize} = require('sequelize');
const config = require('../config');

//*Traemos los datos de la base de datos (Importamos desde config la info y la utilizamos en Sequelize):

const sequelize = new Sequelize(
    config.DB.database,
    config.DB.username,
    config.DB.password,
    {
        host: config.DB.host,
        dialect : 'mysql'
    }
);

module.exports = sequelize;