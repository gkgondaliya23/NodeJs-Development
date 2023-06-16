const express = require('express');
const {createProduct, getAllProduct, getProduct, updateProduct, deleteProduct} = require('../controllers/productController.js');
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

/**
* @url : http://localhost:8000/products/:id
* @method: GET 
* @param: product_id
* @access: public 
**/
productRoutes.get('/:id', getProduct);

/**
* @url : http://localhost:8000/products/:id
* @method: PUT 
* @param: product_id
* @access: private 
**/
productRoutes.put('/:id', updateProduct);

/**
* @url : http://localhost:8000/products/:id
* @method: DELETE 
* @param: product_id
* @access: private 
**/
productRoutes.delete('/:id', deleteProduct);


module.exports = productRoutes;