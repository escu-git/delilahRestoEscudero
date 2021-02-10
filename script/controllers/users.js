'use strict'
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// const bodyParser = require('body-parser');
app.use(express.json());

var {datosRecibidos} = require('../routes/middlewares')

app.listen(port, ()=>{
    console.log(`El server está escuchando el puerto ${port}`);
})


const usuario =[
    {
        user: 'escu',
        completeName: 'Pablo Martin Escudero',
        email: 'escu@gmail.com' ,
        phone: 113214023,
        address: 'Calle falsa 123, Escobar',
        password: 'contrasenia'
    }
];

app.get('/usuarios',(req, res)=>{
    res.status(200).json(req.body);
})

app.post('/usuarios', datosRecibidos, (req,res)=>{
    const {user, completeName, email, phone, address, password} = req.body;
    const nuevoUsuario={user, completeName, email, phone, address, password};

    usuario.push(nuevoUsuario)
    res.status(200).json(nuevoUsuario)
    console.log(usuario)
    
})

app.put('/usuarios',(req, res)=>{ //Modificar info de usuarios

})

app.delete('/usuarios', (req, res)=>{ //Eliminar usuarios

})
