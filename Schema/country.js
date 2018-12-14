const mongoose = require("mongoose");


let countries = new mongoose.Schema({
    name:{
        type:String,
        enum:["Egypt"],
        default:"Egypt"
    }
});

module.exports = mongoose.model("countries",countries);