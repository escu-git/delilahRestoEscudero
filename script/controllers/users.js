require('dotenv').config();
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const Usuario = require('../Models/User.models')
const Producto = require('../Models/Product.models');
const Pedidos = require('../Models/Order.models');


const userControllers = {
    registerUser: async(req,res,next)=>{
        const {user, name, surname, email, phone, address, password, admin} = req.body; //? Datos del nuevo usuario
        
        const salt = await bcrypt.genSalt(5);
        let hashedPassword = await bcrypt.hash(password,salt);
        
        const newUser = {
            user,
            name,
            surname,
            email,
            phone,
            address,
            password: hashedPassword,
            admin
        };
    
        const saveUser = await Usuario.create(newUser); 
        if(saveUser) return res.status(200).json(newUser);
        res.status(400).json({message:"Unavailable to create and save user..."})
    },
    getAllUsers:async(req, res)=>{
        const users = await Usuario.findAll();
        if (users) return res.status(200).json(users);
        res.status(400).json({message:"There is no data to show..."})
    },
    getUserById:async(req, res)=>{
        const user = await Usuario.findOne({ where: { id: req.params.id } });
        if (user) return res.status(200).json(user);
        res.status(400).json({message:"There is no data to show..."})
    },
    updateUserData:async(req,res)=>{
        const updatedUser= await Usuario.update({where:{id: req.params.id}})
        console.log(updatedUser)
        if(updatedUser[0]!==0) return res.status(200).json("User was succesfully modified");
        res.status(400).json({message:`User wasn't found`})
        //**** REVISAR QUE UPDATE NO ELIMINE TODAS LAS PROPIEDADES DE PRODUCT */
        
    },
    deleteUser:async(req,res)=>{
        const user = await Usuario.findOne({where:{id:req.params.id}})
        if(user) user.destroy() && res.status(200).json({message:`User ${user.completeName} has been deleted`});
        res.status(400).json({message:`User doesn't exist, try another one...`})
    },
}

module.exports = userControllers;