const mongoose =require("mongoose");

let plans = new mongoose.Schema({
    name:{
        type:String,
    },
    feature:{
        type:String,
    },
    price:{
        type:Number
    },
    duration:{
        type:Number
    }
});

module.exports = mongoose.model("plans",plans);