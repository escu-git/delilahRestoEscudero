const middlewares = {

    datosRecibidos: (req, res, next)=>{
        const {user, completeName, email, phone, address, password} = req.body;
            if(!user, !completeName, !email, !phone, !address, !password){
                res.status(400).json({err:'Faltan datos'})
            }
            else if(isNaN(phone)){
                res.status(400).json({
                    errorSignUp: 'Numero incorrecto'
                })
            }
            else if(passwordCheck()){
                res.status(400).json({
                    errorSignUp: 'Password no aceptado'
                })
            }
            else if(Number(completeName)){
                res.status(400).json({
                    errorSignUp: 'Nombre erroneo'
                })
            next()
        }
    }
}

module.exports = middlewares;