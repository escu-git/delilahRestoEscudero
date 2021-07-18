const Usuario = require('../Models/User.models');
const jwt = require('jsonwebtoken');

const accessControllers ={
    login:async (req, res, next)=>{
        const {user, password} = req.body;
        const isRegistered = await Usuario.findOne({where: {user:req.body.user}});
        console.log(isRegistered)
        const passwordOk = await Usuario.findOne({where:{password: password}});
        console.log(passwordOK)
        if(passwordOk){
            jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, (err, accessToken)=>{
                if(err) return res.status(401).json({message:'Error while authenticating token'})
                res.json({accessToken:accessToken});
            });
        }else {
            return res.status(401).json({message:'User not registered'})
        }
        next()
    },
    logout:{
        //Crear logout para users
    },
} 

module.exports = accessControllers;