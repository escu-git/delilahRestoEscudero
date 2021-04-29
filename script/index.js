const express = require('express');
const app = express();
const config = require('./config');
const DB = require('./Models/Conexion');
const userRoute = require('./Routers/routes');

app.use(express.json());
app.use(userRoute); //*Interaction with database

app.listen(config.PORT,()=>{
    console.log('Server initialited OK.......')
    DB.sync({force:false})
    .then(()=>{
        console.log('Database connected succesfully...')
    })
    .catch((err)=>{
        console.log(`Error connecting database : ${err}`)
    })
})
