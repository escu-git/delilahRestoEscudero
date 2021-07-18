const Producto = require('../Models/Product.models');
const Usuario = require('../Models/User.models');

const orderControllers = {
    createNewOrder: async(req, res)=>{
        const {customer, productsBought, totalPrice, orderStatus } = req.body

        if(!customer || !productsBought || !totalPrice || !orderStatus){
            res.status(400).json({message:'Some data is missing to create order'})
        }
        customerId
        const order = {
            customer:customer.id
        }

    }
}