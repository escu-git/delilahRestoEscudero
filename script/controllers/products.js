const Producto = require('../Models/Product.models');


const productControllers = {
    createProduct: async(req,res)=>{
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
    },
    getAllProducts:async(req, res)=>{
        const productRequest = await Producto.findAll()
        if(productRequest) return res.status(200).json(productRequest);
        res.status(400).json({message:`There is no products in our database...`})
    },
    getProductById: async(req,res)=>{
        const requestedProduct = await Producto.findOne({ where: { id: req.params.id } });
        if(requestedProduct) return res.status(200).json(requestedProduct);
        res.status(400).json({message:`Product is not in our database`})
    },
    updateProduct:async(req,res)=>{
        const updateProduct = await Producto.update({where: {id:req.params.id}});
        const updated = await Producto.findOne({where:{id:req.params.id}});
        if(updateProduct[0]!==0) return res.status(200).json(updated);
        res.status(400).json({message:`Product doesn't exist`});
    
        //**** REVISAR QUE UPDATE NO ELIMINE TODAS LAS PROPIEDADES DE PRODUCT */
    },
    deleteProduct:async(req,res)=>{
        const productDelete = await Producto.findOne({where:{id:req.params.id}})
        if(productDelete) return productDelete.destroy() && res.status(200).json({message:`Product "${req.params.id}" was succesfully deleted...`});
        res.status(400).json({message:"Cannot find product..."})
    },
}

module.exports = productControllers;