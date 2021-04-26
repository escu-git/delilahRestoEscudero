//*Configuración de la base de datos:
//? username, password, database & host --> Database Server mariaDB
module.exports = {
    PORT: 3000 || process.env.PORT,
    DB:{
        username:'root',
        password:'',
        database:'delilahResto',
        host:'localhost'
    }
};