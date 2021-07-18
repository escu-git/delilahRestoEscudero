require('dotenv').config();
const Usuario = require('../Models/User.models');
const jwt = require('jsonwebtoken');



const rolesControllers = {
    checkRole:async(req, res, next)=>{
        res.status(200).send({message:"Home Screen"})
    }
    // async(req, res, next)=>{
    //     res.status(200).send({message:'Admin screen'})
    // }
}

module.exports = rolesControllers;