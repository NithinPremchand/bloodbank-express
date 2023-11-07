const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    address: {
        locality: String,
        city: String,
        state: String,
        pincode: Number,
        location: String,
    }
});


module.exports = mongoose.model('User', userSchema)