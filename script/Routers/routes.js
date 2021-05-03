const router = require('express').Router();
const middleware = require('../Models/Usuarios');
const Usuario = middleware.Usuario;
const Producto = middleware.Producto;
const Pedidos = middleware.Pedidos;
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var {receivedData} = require('./middlewares')
var {productValidation} = require('./middlewares')

//!USER CRUD
//*NEW USER REGISTER:
router.post('/register',receivedData, async(req,res,next)=>{
    const {user, completeName, email, phone, address, password} = req.body; //? Datos del nuevo usuario
    
    const salt = await bcrypt.genSalt(5);
    let hashedPassword = await bcrypt.hash(password,salt);
    console.log(`${password} --> ${hashedPassword}`)
    
    const newUser = {
        user,
        completeName,
        email,
        phone,
        address,
        password: hashedPassword
    };

    const saveUser = await Usuario.create(newUser); 
    if(saveUser) return res.status(200).json(newUser);
    res.status(400).json({message:"Unavailable to create and save user..."})
})

//*REQUEST FOR USER LIST:
router.get('/users',async(req, res)=>{
    const users = await Usuario.findAll();
    if (users) return res.status(200).json(users);
    res.status(400).json({message:"There is no data to show..."})
})

//*REQUEST FOR SPECIFIC USER
router.get('/user/:id',async(req, res)=>{
    const user = await Usuario.findOne(req.body,{where:{id: req.params.id}});
    if (user) return res.status(200).json(user);
    res.status(400).json({message:"There is no data to show..."})
})

//*REQUEST FOR MODIFYING USER:
router.put('/update/:id',receivedData, async(req,res)=>{
    const updatedUser= await Usuario.update(req.body,{where:{id: req.params.id}})
    console.log(updatedUser)
    if(updatedUser[0]!==0) return res.status(200).json("User was succesfully modified");
    res.status(400).json({message:`User wasn't found`})
    
})

//*REQUEST FOR USER DELETING:
router.delete('/delete/:id', async(req,res)=>{
    const user = await Usuario.findOne(req.body,{where:{id:req.params.id}})
    if(user) user.destroy() && res.status(200).json({message:`User ${user.completeName} has been deleted`});
    res.status(400).json({message:`User doesn't exist, try another one...`})
})

//! PRODUCTS CRUD:
//*REQUEST TO CREATE A NEW PRODUCT:

router.post('/new-product',productValidation, async(req,res)=>{
    const {product, size, price, ingredients, isVegetarian} = req.body;

    newProduct={
        product,
        size,
        price,
        ingredients,
        isVegetarian
    }

    const saveProduct = await Producto.create(newProduct);
    if(saveProduct) return res.status(200).json({message:`Product ${newProduct.product} was succesfully saved...`});
    res.status(400).json({message:`Unable to create product...`})
    
});

//*REQUEST FOR ALL PRODUCTS
router.get('/products', async(req, res)=>{
    const productRequest = await Producto.findAll()
    if(productRequest) return res.status(200).json(productRequest);
    res.status(400).json({message:`There is no products in our database...`})
})

//*REQUEST FOR ONE PRODUCT
router.get('/product/:id', async(req,res)=>{
    const requestedProduct = await Producto.findOne(req.body,{where:{id: req.params.id}});

    if(requestedProduct) return res.status(200).json(requestedProduct);
    res.status(400).json({message:`Product is not in our database`})
})



module.exports = router;