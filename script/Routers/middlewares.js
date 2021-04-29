const Usuario = require('../Models/Usuarios')
const bcrypt = require('bcrypt');
const middlewares = {

    datosRecibidos: async(req, res, next)=>{
        let errors = [];
        const {user, completeName, email, phone, address, password} = req.body;
            if(!user, !completeName, !email, !phone, !address, !password) errors.push('You must complete all the user fields');
            if(password.length<8) errors.push('Password must be 8 characters');
            if(isNaN(phone)) errors.push('Phone must contain only numbers');
            if(Number(completeName)) errors.push('Name must not contain numbers')
            if(password.search(/[A-Z]/) < 0) errors.push('Password must contain at least 1 upperCase');
            if(!email.endsWith('.com' || '.ar' )) errors.push('Invalid email')
            console.log(Usuario)
            const userCheck = await Usuario.findOne({where:{email:email}})
            console.log(userCheck)
            if(userCheck ) errors.push('The email registered already exists in our database');

            //*CHECKING FOR ERRORS:
            if(errors.length>0) {
                console.log(errors)
                return res.status(400).json({message:`${errors}`})
            }else next();
    }
    
};

module.exports = middlewares;