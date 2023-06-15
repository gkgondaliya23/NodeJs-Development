const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: { type: String },
    title: { type: String },
    desc: { type: String },
    price: { type: Number },
    image: [String]
});

module.exports = mongoose.model('Product', productSchema);