require('dotenv').config();
const Usuario = require('../Models/User.models');
const jwt = require('jsonwebtoken');



const rolesControllers = {
    checkRole: async(req, res)=>{
        
    },
    isAdmin:async(req,res,next)=>{

    },
}

module.exports = rolesControllers;