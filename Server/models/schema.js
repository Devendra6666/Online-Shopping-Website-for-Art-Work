const mongoose = require("mongoose")
require('../Databse/db')

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    profession : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true
    },
    password : {
        type : String,
        required : true
    }
})

const User = new mongoose.model("Register",userSchema)
module.exports = User;

