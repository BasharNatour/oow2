const mongoose =require("mongoose");


let category = new mongoose.Schema({
    name:{
        type:String,
    }
});

module.exports = mongoose.model("categories",categories);