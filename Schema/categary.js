const mongoose =require("mongoose");


let category = new mongoose.Schema({
    name:{
        type:String,
        enum:["photographer","Wedding halls"]
    }
});

module.exports = mongoose.model("category",category);