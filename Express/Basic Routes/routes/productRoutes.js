const express = require('express');
const {createProduct, getAllProduct, getProduct} = require('../controllers/productController.js');
const productRoutes = express.Router();

/**
* @url : http://localhost:8000/products
* @method: POST 
* @param: no params
* @access: public 
**/
productRoutes.post('/', createProduct);

/**
* @url : http://localhost:8000/products
* @method: GET 
* @param: no params
* @access: public 
**/
productRoutes.get('/', getAllProduct);


module.exports = productRoutes;