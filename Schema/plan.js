const mongoose =require("mongoose");

let plan = new mongoose.Schema({
    type:{
        type:String,
    }
})

module.exports = mongoose.model("plan",plan);