const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type : String,
        unique : true,
    },
    password:{
        type : String
    }
});

const usermodel = mongoose.model("usermodel",userSchema);

module.exports = usermodel;