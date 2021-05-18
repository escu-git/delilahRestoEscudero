const model = require('../Models/Usuarios');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const Usuario = model.Usuario;
const Producto = model.Producto;
const Pedidos = model.Pedidos;
const middlewares = {

    receivedData: async(req, res, next)=>{
        let errors = [];
        const {user, completeName, email, phone, address, password} = req.body;
            if(!user, !completeName, !email, !phone, !address, !password) errors.push('You must complete all the user fields');
            if(password.length<8) errors.push('Password must be 8 characters');
            if(isNaN(phone)) errors.push('Phone must contain only numbers');
            if(Number(completeName)) errors.push('Name must not contain numbers');
            if(password.search(/[A-Z]/) < 0) errors.push('Password must contain at least 1 upperCase');
            if(!email.endsWith('.com' || '.ar' )) errors.push('Invalid email');
            console.log(Usuario)
            const userCheck = await Usuario.findOne({where:{email:email}});
            console.log(userCheck)
            if(userCheck) errors.push('The email registered already exists in our database');
            //*CHECKING FOR ERRORS:
            if(errors.length>0) {
                console.log(errors)
                return res.status(400).json({message:`${errors}`})
            }else next();
    },
        //* Authorization: Bearer <token>
    authToken: async(req, res, next)=>{
        try {
            const bearerHeader = req.headers['authorization'];
            console.log(bearerHeader)
            const token = bearerHeader.split(' ')[1];
            if(token === null) return res.status(403).json({message:'token invalid'});
            jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user)=>{
                if(err) return res.json({err});
                req.user = user;
                console.log(`user ${user} validated correctly...`)
                next()
            });
            
        } catch (error) {
            console.log(error)
        }
        
        
    },

    adminAuthentication: async(req, res, next)=>{
        
        next()
    },
    
    productValidation: async(req,res,next)=>{
        console.log(req)
        let errors = [];
        const {product, size, price, ingredients, isVegetarian} = req.body;
        const productCheck = await Producto.findOne({where:{product:product}});

        if(!product, !size, !price, !ingredients, !isVegetarian && req.method == "POST") errors.push("You must complete all product fields")
        if(productCheck && req.method=="POST") errors.push('Product already exists, try another one...');
        console.log(productCheck);
        if(errors.length > 0) {
            return res.status(400).json({message:`${errors}`})}
            else{
                next()
            }
    },

    orderValidation: async(req, res, next)=>{
        console.log('Validated!')
    },
};

module.exports = middlewares;