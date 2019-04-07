const mongoose = require("mongoose");


let complaints = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    name:{
        type:String
    },
    email:{
        type:String
    },
    title:{
        type:String
    }   
});           

module.exports = mongoose.model("complaints",complaints);