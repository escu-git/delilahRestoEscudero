const router = require('express').Router();
const middlewares = require('./middlewares');
const userControllers = require('../controllers/users');
const productControllers = require('../controllers/products')
const rolesControllers = require('../controllers/roles');
const accessControllers = require('../controllers/access');
const orderControllers = require('../controllers/orders')
require('dotenv').config();


//! USER INTERFACES:
router.get('/', rolesControllers.checkRole )

//! ADMIN INTERFACES: 
router.get('/admin', middlewares.adminAuthentication, rolesControllers.checkRole);

//! ---------------- USER CRUD ---------------------
//*NEW USER REGISTER:
router.post('/register', middlewares.receivedData, userControllers.registerUser);
//*REQUEST FOR USER LIST:
router.get('/users', userControllers.getAllUsers);
//*REQUEST FOR SPECIFIC USER:
router.get('/user/:id', userControllers.getUserById);
//*REQUEST FOR MODIFYING USER:
router.put('/user-update/:id',middlewares.receivedData, userControllers.updateUserData);
//*REQUEST FOR USER DELETING:
router.delete('/delete/:id', middlewares.authToken, userControllers.deleteUser);
//! ---------------- ACCESS -------------------------
router.post('/auth/login', accessControllers.login);

//! ---------------- PRODUCT CRUD -------------------
//*REQUEST TO CREATE A NEW PRODUCT:
router.post('/products/new',middlewares.authToken,middlewares.productValidation, productControllers.createProduct);
//*REQUEST FOR ALL PRODUCTS
router.get('/products', middlewares.authToken, productControllers.getAllProducts);
//*REQUEST FOR ONE PRODUCT
router.get('/product/:id', middlewares.authToken, productControllers.getProductById);
//*REQUEST FOR PRODUCT MODIFYING:
router.put('/product-update/:id', productControllers.updateProduct);
//*REQUEST FOR PRODUCT DELETING:
router.delete('/product-delete/:id', productControllers.deleteProduct);

//! ---------------- ORDERS CRUD -------------------
//*REQUEST TO CREATE A NEW ORDER:
router.post('/new-order', )
//*REQUEST FOR ORDER LIST:
router.get('/orders',)
//*REQUEST FOR SPECIFIC ORDER:
router.get('/order/:id',)
//*REQUEST FOR ORDER MODIFYING:
router.put('/update-order/:id',)
//*REQUEST FOR ORDER DELETING:
router.delete('/order/:id',)


module.exports = router;