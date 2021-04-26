const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const config = require('./config')
const DB = require('./Models/Conexion');

const rutaUsuario = require('./Routers/routes');

app.use(express.json());
app.use(rutaUsuario); //*Para interactuar con la base de datos.

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






// app.listen(port, ()=>{
//     console.log(`Server is listening on ${port}......`)
// });

// app.get('/', function(req, res){
//     res.send('hello world!')
// })

// app.get('/login', function(req, res){
//     res.send ('Ingrese datos para loguear')
// })

// app.post('/login', function(req, res){
//     res.render('hola')
// })