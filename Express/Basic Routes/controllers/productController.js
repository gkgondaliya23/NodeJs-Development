const Product = require('../models/product');

exports.createProduct = async(req, res)=>{
        const {id, title, desc,price, image} = req.body;

        const newProduct = await Product.create({id, title, desc, price, image});
        console.log(newProduct);
        newProduct.save();
        res.status(201).json(newProduct);
};

exports.getAllProduct = async(req, res)=>{       
        const newProduct = await Product.find();
       res.status(200).json(newProduct);
};

exports.getProduct = async (req, res) => {
        const id = req.params.id;
        const newProduct = await Product.findOne({ id: id });
        res.status(200).json(newProduct);
};

exports.updateProduct = async (req, res) => {
        const id = req.params.id;
        const product = await Product.findOne({ id: id });
        if (!product) {
                res.status(404).json({ msg: 'Product not found' });
        } else {
                const newProduct = await Product.findOneAndUpdate({ id: id }, { $set: req.body }, { $upsert: true });
                await newProduct.save();
                res.status(200).json(newProduct);
        }
};

exports.deleteProduct = async (req, res) => {
        const id = req.params.id;
        const product = await Product.findOne({ id: id });
        if (!product) {
                res.status(404).json({ msg: 'Product not found' });
        } else {
                const newProduct = await Product.findByIdAndDelete(product);
                res.status(200).json(newProduct);
        }
};