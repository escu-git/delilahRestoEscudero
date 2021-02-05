const express = require('express');
const app = express();
const port = 3000;

app.listen(port,()=>{
    console.log(`El server está escuchando el puerto ${port}`)
})


app.get('/', function(req, res){
    res.send('hello world!')
})

app.get('/login', function(req, res){
    res.send ('Ingrese datos para loguear')
})

app.post('/login', function(req, res){
    res.render('hola')
})