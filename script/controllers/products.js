const express = require('express');
const app = express();
const port = 3000;

app.listen(3000, ()=>{
    console.log('El server está escuchando el puerto 3000')
});

const producto = [
    {
        nombreProducto:'Hamburguesa',
        precio:200,
        vegetariano:'No',
        conBebida:'Si',        
    },
];

app.get('/productos',(req,res)=>{
    res.status(200).json(req.body);
})