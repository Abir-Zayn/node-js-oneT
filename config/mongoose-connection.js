import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/oneTDB')
     .then(function() {
            console.log("Mongoose connected successfully.");
     })
     .catch(function(err) {
            console.error("Mongoose connection error:", err);
     });

export default mongoose.connection;