const mongoose =require("mongoose");


let categories = new mongoose.Schema({
    name:{
        type:String,
    },
    description:{
        type:String
    },
    image:{
        type:String
    },
    background:{
        type:String
    },
    longdescription:{
        type:String
    },
});

module.exports = mongoose.model("categories",categories);