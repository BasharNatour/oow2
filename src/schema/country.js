const mongoose = require("mongoose");


let countries = new mongoose.Schema({
    name:{
        type:String,
    }
});

module.exports = mongoose.model("countries",countries);