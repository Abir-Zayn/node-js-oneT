import mongoose from 'mongoose';

// E-Commerce User Model
const userSchema =  mongoose.Schema({
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
    password : {
        type : String,
        minLength : 8,
        trim : true,
        required : true,
    },
    cart: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            min: 1,
            default: 1
        },
        addedAt: {
            type: Date,
            default: Date.now
        }
    }],
    isadmin: {
        type: Boolean,
        default: false
    },
    Orders: [],
    contact: {
        type: String,
        match: [/^[0-9]{10,15}$/, 'Please provide a valid contact number']
    },
    picture: {
        type: String,
        default: null
    },
});

export default mongoose.model('users', userSchema);


// we havent hashed the password . TODO. 