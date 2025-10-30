const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/oneTDB") 

// E-Commerce User Model 
const ownerSchema =  mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now
    },
    fullname : {
        type : String,
        minLength : 3,
        trim : true,
        required : true
    },
     email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address']
    },
    surname : {
        type : String,
        minLength : 3,
        trim : true,
        required : true
    },
    products: [],
    contact: {
        type: String,
        match: [/^[0-9]{10,15}$/, 'Please provide a valid contact number']
    },
    picture: {
        type: String,
        default: null
    },
    gstin: String,
});

module.exports = mongoose.model('owners', ownerSchema);


