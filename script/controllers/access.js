const Usuario = require('../Models/User.models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv')


const accessControllers ={
    isAuthorized:async (req, res)=>{
        const {user, password} = req.body;
        if(!user || !password) res.status(400).json({message:'User and password must be provided to login'});
        const checkUser = await checkDb(user);
        if(checkUser == false) res.status(400).json({message:'User does not exist in database'});
        const checkPassword = await validateUserAndPassword(user, password);
        console.log(`❗ Was user and password correctly validated?: ${checkPassword}`);
        if(checkPassword){
            const token = jwt.sign({user:user, isAdmin: await isAdmin(user)},process.env.JWT_SECRET);
            console.log(token);
            res.status(200).json({message:'Logged correctly...'}
        )}
        else{res.status(401).json({message:'User or password incorrect'}
        )}
    },
    logout:{
        //Crear logout para users
    },
} 
//! VALIDATION FUNCTIONS:
async function checkDb(user){
    const userDb = await Usuario.findOne({
        where:{
            user:user
        }
    })
    if(userDb !== null){
        console.log(`❗ User '${user}' exists in the database`)
        return true
    }
    else{
        console.log(`❗ User '${user}' is not registered in the database`)
        return false
    }
}

async function validateUserAndPassword(user, password){
    const dbUser = await Usuario.findOne({
        where:{
            user:user
        }
    })
    const comparePassword = await bcrypt.compare(password, dbUser.password)
    if(comparePassword === false){ 
        console.log('❗password doesnt match')
        return false
    }
    else{
        console.log(`❗This is the user from the database ( const dbUser):${dbUser.user}`)
        return true
    }
};

async function isAdmin(user){
    const dbUser= await Usuario.findOne({
        where:{
            user:user
        }
    })
    if(dbUser.admin === true){
        console.log(`❗User ${user} is admin`)
        return
    }else{
        console.log(`❗User ${user} is not admin`)
    }
}

module.exports = accessControllers;