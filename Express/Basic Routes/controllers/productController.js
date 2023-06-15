const Product = require('../models/product');

exports.createProduct = async(req, res)=>{
        const {id, title, desc,price, image} = req.body;

        const newProduct = await Product.create({id, title, desc, price, image});
        console.log(newProduct);
        newProduct.save();
        res.status(201).json(newProduct);
}

exports.getAllProduct = async(req, res)=>{       
        const newProduct = await Product.find();
       res.status(200).json(newProduct);
}

