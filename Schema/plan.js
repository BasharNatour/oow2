const mongoose =require("mongoose");

let plan = new mongoose.Schema({
    name:{
        type:String,
    },
    type:{
        type:String,
    },
    price:{
        type:Number
    },
    duration:{
        type:Number
    }
});

module.exports = mongoose.model("plans",plan);