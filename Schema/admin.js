const mongoose = require("mongoose");

let admin = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }

});

module.exports = mongoose.model("admin",admin);

