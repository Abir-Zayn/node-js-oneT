const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/oneTDB") 

// E-Commerce Product Model 
const productSchema =  mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    discount: {
        type: Number,
        default: 0
    },
    bgColor: String,
    panelColor: String,
    textColor: String,
    category: String,
    image: String,    
    stock: Number,   //extra
    createdAt: {
        type: Date,
        default: Date.now
    }, 
    updatedAt: {         //extra
        type: Date,
        default: Date.now
    },
});


module.exports = mongoose.model('products', productSchema);
